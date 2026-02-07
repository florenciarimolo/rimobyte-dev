import type { APIRoute } from "astro";
import { verifyRecaptcha } from "@/utils/recaptcha";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.recaptcha) {
      return new Response(JSON.stringify({ success: false, error: 'reCAPTCHA token is missing' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const recaptchaAction = data.action || 'submit';
    
    // Call verifyRecaptcha with explicit error handling to catch all promise rejections
    const result = await Promise.resolve(verifyRecaptcha(data.recaptcha, recaptchaAction)).catch((error) => {
      // Catch any unhandled promise rejections from Google Cloud library
      if (import.meta.env.MODE === 'development') {
        console.error('Unhandled promise rejection in verifyRecaptcha:', error);
      }
      return {
        success: false,
        error: error?.message || 'reCAPTCHA verification failed',
        details: import.meta.env.MODE === 'development' ? String(error) : undefined
      };
    });
    
    return new Response(JSON.stringify(result), { 
      status: result.success ? 200 : 400,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    if (import.meta.env.MODE === 'development') {
      console.error('Error in recaptcha endpoint:', error);
    }
    return new Response(JSON.stringify({ 
      success: false, 
      error: error?.message || 'reCAPTCHA verification error',
      details: import.meta.env.MODE === 'development' ? String(error) : undefined
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

