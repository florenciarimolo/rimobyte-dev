// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { resolve, join } from 'path';
import * as fs from 'fs';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import opengraphImages from 'astro-opengraph-images';
import vercel from '@astrojs/vercel';

import { brandedLogoWithSubtitle } from './src/og-renderer.tsx';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const interFontDir = join(__dirname, 'node_modules', '@fontsource', 'inter', 'files');

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US'
        }
      }
    }),
    opengraphImages({
      options: {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Inter',
            weight: 400,
            style: 'normal',
            data: fs.readFileSync(join(interFontDir, 'inter-latin-400-normal.woff')),
          },
          {
            name: 'Inter',
            weight: 600,
            style: 'normal',
            data: fs.readFileSync(join(interFontDir, 'inter-latin-600-normal.woff')),
          },
        ],
      },
      render: brandedLogoWithSubtitle,
    }),
  ],
  output: 'static',
  site: 'https://rimobyte.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    },
    fallback: {
      'en': 'es'
    }
  },
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion']
    },
    ssr: {
      noExternal: ['@fontsource/inter', '@fontsource/dm-serif-display']
    }
  }
});