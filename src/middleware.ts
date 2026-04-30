import type { MiddlewareHandler } from 'astro';

/**
 * Mirrors vercel.json redirects locally (`vercel.json` only applies on Vercel).
 * - /es, /es/ → /
 * - /es/... → /... (strip prefix)
 * - /en, /en/, /en/... → /
 */
export const onRequest: MiddlewareHandler = (context, next) => {
  const path = context.url.pathname;

  if (path === '/es' || path === '/es/') {
    const to = new URL(context.url);
    to.pathname = '/';
    return context.redirect(to.pathname + to.search + to.hash, 301);
  }
  if (path.startsWith('/es/')) {
    const to = new URL(context.url);
    to.pathname = path.slice('/es'.length) || '/';
    return context.redirect(to.pathname + to.search + to.hash, 301);
  }

  if (path === '/en' || path === '/en/' || path.startsWith('/en/')) {
    const to = new URL(context.url);
    to.pathname = '/';
    return context.redirect(to.pathname + to.search + to.hash, 301);
  }

  return next();
};
