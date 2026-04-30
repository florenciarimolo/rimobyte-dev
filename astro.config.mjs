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
  build: {
    // Inline styles into HTML to avoid render-blocking CSS requests (_slug_.*.css).
    // Removes extra network round-trips and improves LCP/FCP.
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
    react(),
    sitemap(),
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
  redirects: {
    '/desarrolladora-wordpress-freelance/madrid': '/desarrolladora-wordpress-freelance',
    '/desarrolladora-wordpress-freelance/valencia': '/desarrolladora-wordpress-freelance',
    '/desarrolladora-wordpress-freelance/sevilla': '/desarrolladora-wordpress-freelance',
    '/desarrolladora-wordpress-freelance/bilbao': '/desarrolladora-wordpress-freelance',
    '/desarrolladora-wordpress-freelance/zaragoza': '/desarrolladora-wordpress-freelance',
    '/migrar-web-agencia-freelance/madrid': '/migrar-web-agencia-freelance',
    '/migrar-web-agencia-freelance/valencia': '/migrar-web-agencia-freelance',
    '/migrar-web-agencia-freelance/sevilla': '/migrar-web-agencia-freelance',
    '/migrar-web-agencia-freelance/bilbao': '/migrar-web-agencia-freelance',
    '/migrar-web-agencia-freelance/zaragoza': '/migrar-web-agencia-freelance',
    '/desarrolladora-wordpress-freelance/barcelona': '/desarrolladora-wordpress-freelance',
    '/migrar-web-agencia-freelance/barcelona': '/migrar-web-agencia-freelance',
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