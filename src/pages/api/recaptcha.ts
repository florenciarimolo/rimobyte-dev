import type { APIRoute } from "astro";
import { verifyRecaptcha } from "@/utils/recaptcha";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  if (!data.recaptcha) {
    return new Response(JSON.stringify({ success: false, error: 'reCAPTCHA token is missing' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const result = await verifyRecaptcha(data.recaptcha);

  return new Response(JSON.stringify(result), { 
    status: result.success ? 200 : 400,
    headers: { 'Content-Type': 'application/json' }
  });
};

