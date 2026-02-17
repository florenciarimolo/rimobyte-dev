#!/usr/bin/env node
/**
 * Generate responsive image sizes for LCP/PageSpeed.
 * Run: npm run generate-responsive-images (or before build)
 * Requires: sharp (devDependency)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function resizeAndSave(inputPath, outputPath, width) {
  const meta = await sharp(inputPath).metadata();
  const targetWidth = Math.min(meta.width, width); // never upscale
  await sharp(inputPath)
    .resize({ width: targetWidth })
    .webp({ quality: 82 })
    .toFile(outputPath);
}

async function processHero() {
  const src = path.join(publicDir, 'assets', 'images', 'programadora-web.webp');
  if (!fs.existsSync(src)) return;
  const dir = path.dirname(src);
  const base = 'programadora-web';
  for (const w of [200, 400]) {
    const out = path.join(dir, `${base}-${w}w.webp`);
    await resizeAndSave(src, out, w);
    console.log(`  ${base}-${w}w.webp`);
  }
}

async function processDir(subdir, widths = [400, 664, 1328]) {
  const dir = path.join(publicDir, 'assets', 'images', subdir);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.webp') && !/\d+w\.webp$/.test(f));
  for (const file of files) {
    const src = path.join(dir, file);
    const base = file.replace(/\.webp$/, '');
    for (const w of widths) {
      const out = path.join(dir, `${base}-${w}w.webp`);
      try {
        await resizeAndSave(src, out, w);
      } catch (e) {
        // ignore if original smaller than w
      }
    }
    console.log(`  ${file} -> ${base}-{${widths.join(',')}w}.webp`);
  }
}

async function main() {
  console.log('Generating responsive images...');
  console.log('Hero (programadora-web):');
  await processHero();
  console.log('Projects:');
  await processDir('projects');
  console.log('Templates:');
  await processDir('templates');
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
