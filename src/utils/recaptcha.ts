/**
 * Verifies a reCAPTCHA token with Google's API
 * @param token - The reCAPTCHA token to verify
 * @returns Promise with verification result
 */
export async function verifyRecaptcha(token: string): Promise<{ success: boolean; error?: string }> {
  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
  const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set in environment variables');
    return { success: false, error: 'reCAPTCHA configuration error' };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  try {
    const requestBody = new URLSearchParams({
      secret: secretKey,
      response: token
    });

    const response = await fetch(recaptchaURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestBody.toString()
    });

    const data = await response.json();

    return {
      success: data.success === true,
      error: data.success === false ? 'reCAPTCHA verification failed' : undefined
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'reCAPTCHA verification error' };
  }
}

