import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

/**
 * Verifies a reCAPTCHA Enterprise token using Google Cloud SDK
 * Following official Google Cloud documentation
 * @param token - The reCAPTCHA token to verify
 * @param recaptchaAction - The action name that corresponds to the token
 * @returns Promise with verification result and score
 */
export async function verifyRecaptcha(
  token: string,
  recaptchaAction: string = 'submit'
): Promise<{ success: boolean; score?: number; error?: string }> {
  const projectID = import.meta.env.GOOGLE_CLOUD_PROJECT_ID || import.meta.env.RECAPTCHA_PROJECT_ID;
  const recaptchaKey = import.meta.env.RECAPTCHA_SITE_KEY;

  if (!projectID) {
    console.error('GOOGLE_CLOUD_PROJECT_ID or RECAPTCHA_PROJECT_ID is not set in environment variables');
    return { success: false, error: 'reCAPTCHA configuration error: Project ID missing' };
  }

  if (!recaptchaKey) {
    console.error('RECAPTCHA_SITE_KEY is not set in environment variables');
    return { success: false, error: 'reCAPTCHA configuration error: Site Key missing' };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  try {
    // Create the reCAPTCHA client
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(projectID);

    // Create the assessment request
    const request = {
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey,
        },
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);

    // Check if the token is valid
    if (!response.tokenProperties?.valid) {
      const reason = response.tokenProperties?.invalidReason || 'Unknown reason';
      console.log(`The CreateAssessment call failed because the token was: ${reason}`);
      return { success: false, error: `Invalid token: ${reason}` };
    }

    // Check if the expected action was executed
    if (response.tokenProperties.action === recaptchaAction) {
      // Get the risk score
      const score = response.riskAnalysis?.score || 0;
      
      // Log reasons if available
      if (response.riskAnalysis?.reasons) {
        response.riskAnalysis.reasons.forEach((reason) => {
          console.log('Risk reason:', reason);
        });
      }

      // Score ranges from 0.0 to 1.0
      // 1.0 = very likely legitimate, 0.0 = very likely bot
      // Typically, scores above 0.5 are considered legitimate
      const isSuccess = score >= 0.5;

      return {
        success: isSuccess,
        score: score,
        error: isSuccess ? undefined : `Low reCAPTCHA score: ${score}`
      };
    } else {
      console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
      return { success: false, error: 'Action mismatch' };
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, error: 'reCAPTCHA verification error' };
  }
}

