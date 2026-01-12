import { Resend } from 'resend';
import type { APIRoute } from "astro";
import { EMAIL, NO_REPLY_EMAIL } from "@/constants";

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    // Get the form data from the body
    // Note: recaptchaToken is included but not verified here
    // because it's already verified in /api/recaptcha before this endpoint is called
    const { email, name, subject, message } = body;
    let errorCall = false;

    // Validate required fields
    if (!email || !name || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`;
    
    try {
        // Sending email
        const { error } = await resend.emails.send({
            from: NO_REPLY_EMAIL,
            to: [EMAIL],
            subject: `Contact form message from ${name}`,
            text: emailBody,
        });

        if (error) {
            errorCall = true;
            if (import.meta.env.MODE === 'development') {
                console.error('Resend error:', error);
            }
        }

    } catch (error) {
        errorCall = true;
        if (import.meta.env.MODE === 'development') {
            console.error('Error sending email:', error);
        }
    }

    if (errorCall) {
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify({ success: true }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
