#!/usr/bin/env node
/**
 * Download Satoshi font (woff2) from Fontshare CDN to public/fonts for local hosting.
 * Run once: npm run download-satoshi-fonts
 * Fontshare ITF Free Font License allows self-hosting.
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, '..', 'public', 'fonts');

const FONTS = [
  { weight: 300, url: 'https://cdn.fontshare.com/wf/D7WD5OXZFWQ5T76HSPWAC7MNKAJXE2YG/LUGNSPO5YC34ABNB2O6K7AFDSOJZT56V/WNDVG7O66ENLOD43GS7FBUCC4KMT5OM2.woff2' },
  { weight: 400, url: 'https://cdn.fontshare.com/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2' },
  { weight: 500, url: 'https://cdn.fontshare.com/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2' },
  { weight: 700, url: 'https://cdn.fontshare.com/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
  }
  for (const { weight, url } of FONTS) {
    const filename = `satoshi-${weight}.woff2`;
    const filepath = path.join(fontsDir, filename);
    process.stdout.write(`Downloading Satoshi ${weight}... `);
    try {
      const buf = await download(url);
      fs.writeFileSync(filepath, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(1)} KiB)`);
    } catch (e) {
      console.error(`Error: ${e.message}`);
      process.exit(1);
    }
  }
  console.log('Satoshi fonts saved to public/fonts/');
}

main();
