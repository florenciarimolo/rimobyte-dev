export interface TechConfig {
  gradient: string;
  backgroundColor?: string;
  icon?: string;
  hideText?: boolean; // Hide text when icon contains the name (e.g., Supabase)
}

import { VuejsIcon, ReactIcon, JavaScriptIcon, TypeScriptIcon, PythonIcon, JavaIcon, CSSIcon, TailwindCSSIcon, ShopifyIcon, WooCommerceIcon, WordPressIcon, ElementorIcon, AstraIcon, DiviIcon, LiquidIcon, YoastSEOIcon, PolylangIcon, DjangoIcon, DjangoRESTFrameworkIcon, SpringBootIcon, DockerIcon, KubernetesIcon, GitLabIcon, MongoDBIcon, MySQLIcon, OracleSQLIcon, JDBCIcon, JavaServletsIcon, FlutterIcon, AstroIcon, ResendIcon, MailerLiteIcon, MarkdownIcon, JiraIcon, SupabaseIcon, NuxtIcon, LearnDashIcon } from './icons';

export const techConfig: Record<string, TechConfig> = {
  // Frontend Frameworks
  "Vue.js": {
    gradient: "bg-gradient-to-r from-green-300 to-emerald-600",
    icon: VuejsIcon,
  },
  React: {
    gradient: "bg-gradient-to-r from-cyan-400 to-blue-600",
    icon: ReactIcon,
  },

  // Languages
  JavaScript: {
    gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    icon: JavaScriptIcon,
  },
  TypeScript: {
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
    icon: TypeScriptIcon,
  },
  Python: {
    gradient: "bg-gradient-to-r from-yellow-600 to-yellow-700",
    icon: PythonIcon,
  },
  Java: {
    gradient: "bg-gradient-to-r from-yellow-400 to-red-500",
    icon: JavaIcon,
  },
  CSS: {
    gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
    icon: CSSIcon,
  },
  "Tailwind CSS": {
    gradient: "bg-gradient-to-r from-cyan-800 to-cyan-500",
    icon: TailwindCSSIcon,
  },

  // E-commerce Platforms
  Shopify: {
    gradient: "bg-gradient-to-r from-green-400 to-green-700",
    icon: ShopifyIcon,
  },
  WooCommerce: {
    gradient: "bg-gradient-to-r from-purple-500 to-purple-700",
    icon: WooCommerceIcon,
  },

  // CMS & Tools
  WordPress: {
    gradient: "bg-gradient-to-r from-blue-400 to-blue-700",
    icon: WordPressIcon,
  },
  Elementor: {
    gradient: "bg-gradient-to-r from-red-700 to-red-900",
    icon: ElementorIcon,
  },
  Astra: {
    gradient: "bg-gradient-to-r from-blue-300 to-indigo-800",
    icon: AstraIcon,
  },
  Divi: {
    gradient: "bg-gradient-to-r from-blue-400 to-blue-500",
    icon: DiviIcon,
  },
  Liquid: {
    gradient: "bg-gradient-to-r from-blue-400 to-blue-500",
    icon: LiquidIcon,
  },
  "Yoast SEO": {
    gradient: "bg-gradient-to-r from-pink-600 to-pink-700",
    icon: YoastSEOIcon,
  },
  Polylang: {
    gradient: "bg-gradient-to-r from-orange-800 to-orange-600",
    icon: PolylangIcon,
  },
  LearnDash: {
    gradient: "bg-gradient-to-r from-gray-700 to-gray-900",
    icon: LearnDashIcon,
  },

  // Backend & Frameworks
  Django: {
    gradient: "bg-gradient-to-r from-green-600 to-green-800",
    icon: DjangoIcon,
  },
  "Django REST Framework": {
    gradient: "bg-gradient-to-r from-green-600 to-green-800",
    icon: DjangoRESTFrameworkIcon,
  },
  "Spring Boot": {
    gradient: "bg-gradient-to-r from-green-500 to-green-700",
    icon: SpringBootIcon,
  },

  // DevOps & Tools
  Docker: {
    gradient: "bg-gradient-to-r from-blue-600 to-blue-800",
    icon: DockerIcon,
  },
  Kubernetes: {
    gradient: "bg-gradient-to-r from-blue-600 to-blue-800",
    icon: KubernetesIcon,
  },
  GitLab: {
    gradient: "bg-gradient-to-r from-orange-400 to-red-600",
    icon: GitLabIcon,
  },

  // Databases
  MongoDB: {
    gradient: "bg-gradient-to-r from-green-500 to-green-700",
    icon: MongoDBIcon,
  },
  MySQL: {
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
    icon: MySQLIcon,
  },
  "Oracle SQL": {
    gradient: "bg-gradient-to-r from-red-400 to-red-700",
    icon: OracleSQLIcon,
  },
  JDBC: {
    gradient: "bg-gradient-to-r from-orange-500 to-red-600",
    icon: JDBCIcon,
  },
  "Java Servlets": {
    gradient: "bg-gradient-to-r from-orange-500 to-red-600",
    icon: JavaServletsIcon,
  },

  // Other Tools
  Flutter: {
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-700",
    icon: FlutterIcon,
  },
  Astro: {
    gradient: "bg-gradient-to-r from-orange-700 to-orange-500",
    icon: AstroIcon,
  },
  Resend: {
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
    icon: ResendIcon,
  },
  Supabase: {
    gradient: "bg-gradient-to-r from-gray-800 to-gray-900",
    icon: SupabaseIcon,
  },
  Nuxt: {
    gradient: "bg-gradient-to-r from-emerald-400 to-green-600",
    icon: NuxtIcon,
  },
  MailerLite: {
    gradient: "bg-gradient-to-r from-green-400 to-green-600",
    icon: MailerLiteIcon,
  },
  Markdown: {
    gradient: "bg-gradient-to-r from-gray-600 to-gray-800",
    icon: MarkdownIcon,
  },
  Jira: {
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
    icon: JiraIcon,
  },
  Scraping: {
    gradient: "bg-gradient-to-r from-gray-600 to-gray-800",
    backgroundColor: "#4B5563",
  },

  // Default fallback
  default: {
    gradient: "bg-gradient-to-r from-gray-400 to-gray-600",
    backgroundColor: "#6B7280",
  },
};
