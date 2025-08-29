# RymoByte Portfolio

A modern, responsive portfolio website for Florencia Rímolo - Full Stack Developer, built with Astro, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents
- **Dark/Light Theme**: Toggle between dark and light themes
- **Multilingual Support**: English and Spanish language support
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Beautiful hover effects and transitions
- **Interactive Components**: Dynamic project filtering and timeline
- **Contact Form**: Integrated contact form (ready for Resend integration)
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Fast loading with Astro's static site generation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- **Components**: [React](https://reactjs.org/) - Interactive components
- **Icons**: SVG icons and emojis
- **Fonts**: Inter font family

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with theme/language switchers
│   ├── ThemeSwitcher.tsx # Dark/light theme toggle
│   ├── LanguageSwitcher.tsx # Language selection
│   ├── TimelineItem.tsx # Experience/education timeline items
│   ├── ProjectCard.tsx  # Project display cards
│   └── ContactForm.tsx  # Contact form component
├── layouts/            # Astro layouts
│   └── MainLayout.astro # Main layout with meta tags
├── pages/              # Astro pages
│   └── index.astro     # Main portfolio page
├── styles/             # Global styles
│   └── global.css      # TailwindCSS and custom styles
└── data/               # Static data
    ├── projects.ts     # Project information
    ├── experience.ts   # Work experience data
    └── education.ts    # Education timeline data
public/
├── assets/             # Static assets
│   ├── svgs/          # SVG icons
│   └── images/        # Project images
└── favicon.svg        # Site favicon
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

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
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

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

### Contact Form Integration

To integrate with Resend:

1. Install Resend SDK:
```bash
npm install resend
```

2. Create an API route in `src/pages/api/contact.ts`
3. Update the ContactForm component to use the API

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms

The static site can be deployed to any hosting platform that supports static sites.

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any API keys:

```env
RESEND_API_KEY=your_resend_api_key
```

### Astro Configuration

The Astro configuration is in `astro.config.mjs` and includes:
- TailwindCSS integration
- React integration
- TypeScript checking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: florencia@rimobyte.dev
- **GitHub**: [@rimobyte](https://github.com/rimobyte)
- **LinkedIn**: [Florencia Rímolo](https://linkedin.com/in/florencia-rimolo)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various open-source icon libraries
- Built with amazing open-source tools

---

Made with ❤️ by Florencia Rímolo
