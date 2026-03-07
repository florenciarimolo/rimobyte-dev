#!/usr/bin/env node
/**
 * Capture Fénix hero in desktop viewport and save as webp.
 * Run: node scripts/screenshot-fenix-desktop.js
 * Requires: puppeteer (npm install -D puppeteer)
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'projects', 'fenix.webp');

const DESKTOP_VIEWPORT = { width: 1280, height: 800 };

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport(DESKTOP_VIEWPORT);
    await page.goto('https://fenixinternacional360.com/', {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: outPath,
      type: 'webp',
      quality: 85,
    });
    console.log('Saved:', outPath);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
