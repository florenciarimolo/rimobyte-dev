// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

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
    })
  ],
  output: "server",
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
      include: ['react', 'react-dom', 'framer-motion'],
      exclude: []
    },
    ssr: {
      noExternal: ['@fontsource/inter', '@fontsource/dm-serif-display']
    }
  }
});