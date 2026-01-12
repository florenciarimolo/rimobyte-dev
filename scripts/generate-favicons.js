import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import toIco from 'to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const faviconPath = join(publicDir, 'favicon.png');

// Tamaños a generar
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  try {
    console.log('🔄 Generando favicons desde favicon.png...\n');

    // Leer la imagen original
    const image = sharp(faviconPath);

    // Generar cada tamaño
    for (const { name, size } of sizes) {
      const outputPath = join(publicDir, name);
      await image
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✅ Generado: ${name} (${size}x${size})`);
    }

    // Generar favicon.ico (formato ICO real con múltiples tamaños)
    const icoPath = join(publicDir, 'favicon.ico');
    
    // Generar PNGs temporales para los tamaños ICO
    const icoSizes = [16, 32, 48];
    const icoBuffers = [];
    
    for (const icoSize of icoSizes) {
      const tempPath = join(publicDir, `temp-${icoSize}.png`);
      await image
        .clone()
        .resize(icoSize, icoSize, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(tempPath);
      
      icoBuffers.push(readFileSync(tempPath));
    }
    
    // Convertir a ICO
    const icoBuffer = await toIco(icoBuffers);
    writeFileSync(icoPath, icoBuffer);
    
    // Limpiar archivos temporales
    for (const icoSize of icoSizes) {
      const tempPath = join(publicDir, `temp-${icoSize}.png`);
      try {
        const { unlinkSync } = await import('fs');
        unlinkSync(tempPath);
      } catch (e) {
        // Ignorar errores al eliminar
      }
    }
    
    console.log(`✅ Generado: favicon.ico (16x16, 32x32, 48x48)\n`);

    console.log('✨ ¡Todos los favicons han sido generados exitosamente!');
    console.log('\n📝 Todos los archivos están listos para usar.\n');

  } catch (error) {
    console.error('❌ Error al generar favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();

