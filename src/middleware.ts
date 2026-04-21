import type { MiddlewareHandler } from 'astro';

/** En producción la raíz usa redirect 301 en vercel.json; en dev no aplica, así que redirigimos aquí. */
export const onRequest: MiddlewareHandler = (context, next) => {
  if (import.meta.env.DEV && context.url.pathname === '/') {
    return context.redirect('/es/', 307);
  }
  return next();
};
