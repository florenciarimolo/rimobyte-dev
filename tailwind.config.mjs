/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'serif-display': ['DM Serif Display', 'serif'],
      },
      fontSize: {
        'base': '0.875rem', // 14px - reducido desde el default de 16px
      },
      colors: {
        'gradient-start': '#3F67FE',
        'gradient-end': '#D42EFE',
      },
    },
  },
  plugins: [],
}
