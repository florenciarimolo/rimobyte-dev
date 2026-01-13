# RimoByte Portfolio

A modern, responsive portfolio website for Florencia Rímolo - Full Stack Developer, built with Astro, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents
- **Dark/Light Theme**: Toggle between dark and light themes
- **Multilingual Support**: English and Spanish language support
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Beautiful hover effects and transitions
- **Interactive Components**: Dynamic project filtering and timeline
- **Contact Form**: Integrated contact form with Resend email delivery
- **reCAPTCHA Protection**: Google reCAPTCHA Enterprise integration
- **SEO Optimized**: Meta tags, structured data, and dynamic sitemap
- **Landing Pages**: Dynamic city-based landing pages for services
- **Performance**: Server-side rendering with Astro for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Astro v5](https://astro.build/) - Server-side rendering (SSR)
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/) - Utility-first CSS
- **Components**: [React 19](https://reactjs.org/) - Interactive components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth animations
- **Deployment**: [Vercel](https://vercel.com/) - Serverless functions
- **Email**: [Resend](https://resend.com/) - Email delivery
- **Security**: Google reCAPTCHA Enterprise - Form protection
- **Icons**: SVG icons
- **Fonts**: Inter font family

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── MainPage.tsx    # Main portfolio page component
│   ├── Navbar.tsx      # Navigation bar with theme/language switchers
│   ├── ThemeSwitcher.tsx # Dark/light theme toggle
│   ├── LanguageSwitcher.tsx # Language selection
│   ├── TimelineItem.tsx # Experience/education timeline items
│   ├── ProjectCard.tsx  # Project display cards
│   ├── ProjectModal.tsx # Project detail modal
│   ├── ContactForm.tsx  # Contact form component
│   ├── wordpress-landing/ # WordPress service landing pages
│   ├── migration-landing/ # Migration service landing pages
│   └── icons/          # Technology icons
├── layouts/            # Astro layouts
│   └── MainLayout.astro # Main layout with meta tags and SEO
├── pages/              # Astro pages (file-based routing)
│   ├── api/           # API routes (contact, recaptcha, og-image)
│   ├── es/            # Spanish pages
│   ├── en/            # English pages
│   ├── index.astro    # Root redirect
│   ├── 404.astro      # Not found page
│   └── sitemap.xml.ts # Dynamic sitemap generation
├── i18n/              # Internationalization
│   ├── en.json        # English translations
│   ├── es.json        # Spanish translations
│   └── index.ts       # i18n utilities
├── data/               # Static data
│   ├── projects.ts    # Project information
│   ├── experience.ts  # Work experience data
│   ├── education.ts   # Education timeline data
│   └── templates.ts   # Template showcase data
├── constants/          # Constants and configuration
│   └── cities.ts      # City data for landing pages
├── utils/             # Utility functions
│   ├── recaptcha.ts   # reCAPTCHA verification
│   └── i18n-urls.ts   # i18n URL utilities
└── styles/            # Global styles
    └── global.css     # TailwindCSS and custom styles
public/
├── assets/            # Static assets
│   └── images/       # Project and template images
└── favicon.*         # Favicon files (multiple sizes)
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher (required for Astro v5 and Vite 6)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rimobyte/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Run type check and build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run Astro type checking
- `npm run clean` - Clean build artifacts and cache
- `npm run generate-favicons` - Generate favicon files

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/data/projects.ts` - Add your projects
- `src/data/experience.ts` - Update work experience
- `src/data/education.ts` - Update education history
- `src/pages/index.astro` - Update personal details and contact information

### Styling

- Colors: Update the gradient colors in `src/styles/global.css`
- Fonts: Change the font family in the layout
- Animations: Modify animation keyframes in the CSS

### Contact Form

The contact form is already integrated with Resend. It includes:
- Client-side form validation
- reCAPTCHA Enterprise verification
- Server-side email delivery via Resend API

The form is protected by Google reCAPTCHA Enterprise to prevent spam submissions.

## 🌍 Internationalization (i18n)

The site supports multiple languages with automatic routing:

- **Default Language**: Spanish (`/es/`)
- **Secondary Language**: English (`/en/`)
- **Routing**: Language prefix is required for all routes
- **Fallback**: English pages fall back to Spanish if translation is missing

### Landing Pages

The project includes dynamic landing pages for services:
- **WordPress Development**: `/es/desarrolladora-wordpress-freelance/[city]`
- **Website Migration**: `/es/migrar-web-agencia-freelance/[city]`

These pages are automatically generated for multiple cities and languages.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically (Vercel will detect the Astro configuration)

The project is configured with the `@astrojs/vercel` adapter for optimal serverless deployment.

### Other Platforms

This project uses server-side rendering (SSR) and requires a Node.js-compatible hosting platform. The Vercel adapter is configured, but you can adapt it for other platforms that support Astro SSR:

- **Netlify**: Use `@astrojs/netlify` adapter
- **Cloudflare Pages**: Use `@astrojs/cloudflare` adapter
- **Node.js**: Use `@astrojs/node` adapter

Note: This is not a static site - it requires server-side rendering capabilities.

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# reCAPTCHA Enterprise
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
GOOGLE_CLOUD_PROJECT_ID=your_google_cloud_project_id
# OR
RECAPTCHA_PROJECT_ID=your_recaptcha_project_id

# Google Service Account (for reCAPTCHA verification)
# Optional: If not provided, uses Application Default Credentials (ADC)
GOOGLE_SERVICE_ACCOUNT_JSON=your_service_account_json_string

# Development only
SKIP_RECAPTCHA=true  # Skip reCAPTCHA verification in development
```

**Note**: For production on Vercel, add these as environment variables in your Vercel project settings.

### Astro Configuration

The Astro configuration is in `astro.config.mjs` and includes:
- **Output**: Server-side rendering (SSR) mode
- **Adapter**: Vercel adapter for serverless deployment
- **Integrations**: 
  - TailwindCSS v3 integration
  - React integration for interactive components
  - Sitemap generation with i18n support
- **i18n**: Built-in internationalization with Spanish (default) and English
- **TypeScript**: Strict type checking enabled

### Favicon Configuration

Para que Google muestre correctamente el favicon, necesitas generar múltiples tamaños de tu favicon. La configuración actual requiere los siguientes archivos en la carpeta `public/`:

- `favicon.ico` (16x16, 32x32, 48x48 - formato ICO tradicional)
- `favicon-16x16.png` (16x16 pixels)
- `favicon-32x32.png` (32x32 pixels)
- `apple-touch-icon.png` (180x180 pixels para iOS)
- `android-chrome-192x192.png` (192x192 pixels)
- `android-chrome-512x512.png` (512x512 pixels)

**Cómo generar los favicons:**

1. **Usando herramientas online** (recomendado):
   - Visita [RealFaviconGenerator](https://realfavicongenerator.net/) o [Favicon.io](https://favicon.io/)
   - Sube tu imagen original (preferiblemente 512x512 o mayor)
   - Descarga el paquete generado
   - Coloca todos los archivos en la carpeta `public/`

2. **Usando herramientas de línea de comandos**:
   ```bash
   # Si tienes ImageMagick instalado
   convert favicon.png -resize 16x16 favicon-16x16.png
   convert favicon.png -resize 32x32 favicon-32x32.png
   convert favicon.png -resize 180x180 apple-touch-icon.png
   convert favicon.png -resize 192x192 android-chrome-192x192.png
   convert favicon.png -resize 512x512 android-chrome-512x512.png
   ```

3. **Verificar que Google indexe el favicon**:
   - Después de desplegar, usa [Google Search Console](https://search.google.com/search-console)
   - Solicita una nueva indexación de tu sitio
   - Puede tomar varios días para que Google actualice el favicon en los resultados de búsqueda

**Nota:** El archivo `site.webmanifest` ya está configurado y apunta a todos estos archivos.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: info@rimobyte.com
- **GitHub**: [@rimobyte](https://github.com/florenciarimolo)
- **LinkedIn**: [Florencia Rímolo](https://linkedin.com/in/florencia-rimolofigueira)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various open-source icon libraries
- Built with amazing open-source tools

---

Made with ❤️ by Florencia Rímolo
