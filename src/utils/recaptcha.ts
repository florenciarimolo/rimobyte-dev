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
): Promise<{ success: boolean; score?: number; error?: string; details?: string }> {
  // Skip verification in development mode if SKIP_RECAPTCHA is set
  if (import.meta.env.MODE === 'development' && import.meta.env.SKIP_RECAPTCHA === 'true') {
    return { success: true, score: 1.0 };
  }

  const projectID = import.meta.env.GOOGLE_CLOUD_PROJECT_ID || import.meta.env.RECAPTCHA_PROJECT_ID;
  const recaptchaKey = import.meta.env.RECAPTCHA_SITE_KEY;

  if (!projectID) {
    if (import.meta.env.MODE === 'development') {
      console.error('GOOGLE_CLOUD_PROJECT_ID or RECAPTCHA_PROJECT_ID is not set in environment variables');
    }
    return { success: false, error: 'reCAPTCHA configuration error: Project ID missing' };
  }

  if (!recaptchaKey) {
    if (import.meta.env.MODE === 'development') {
      console.error('RECAPTCHA_SITE_KEY is not set in environment variables');
    }
    return { success: false, error: 'reCAPTCHA configuration error: Site Key missing' };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing' };
  }

  // Check for explicit credentials - if none are provided, we'll still try ADC
  // but we'll catch any errors properly
  const serviceAccountJson = import.meta.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const googleAppCreds = import.meta.env.GOOGLE_APPLICATION_CREDENTIALS || 
                         (typeof process !== 'undefined' ? process.env.GOOGLE_APPLICATION_CREDENTIALS : undefined);

  // Set up a temporary unhandled rejection handler to catch Google Cloud library internal promises
  let caughtRejection: Error | null = null;
  const rejectionHandler = (reason: any) => {
    // Only catch authentication-related rejections from Google Cloud
    if (reason?.message?.includes('credentials') || 
        reason?.message?.includes('authentication') ||
        reason?.message?.includes('Could not load the default credentials')) {
      caughtRejection = reason;
    }
  };

  // Add handler if process is available (Node.js environment)
  let handlerAdded = false;
  if (typeof process !== 'undefined' && process.on) {
    process.on('unhandledRejection', rejectionHandler);
    handlerAdded = true;
  }

  try {
    // Create the reCAPTCHA client with proper credential handling
    // Supports:
    // 1. GOOGLE_APPLICATION_CREDENTIALS env var pointing to service account key file
    // 2. GOOGLE_SERVICE_ACCOUNT_JSON env var with JSON string of credentials
    // 3. Application Default Credentials (for GCP environments)
    const clientOptions: any = {};
    
    // Check if credentials are provided as JSON string
    if (serviceAccountJson) {
      try {
        clientOptions.credentials = JSON.parse(serviceAccountJson);
      } catch (parseError) {
        if (import.meta.env.MODE === 'development') {
          console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON:', parseError);
        }
        // Remove handler before returning
        if (handlerAdded && typeof process !== 'undefined' && process.removeListener) {
          process.removeListener('unhandledRejection', rejectionHandler);
        }
        return { 
          success: false, 
          error: 'Invalid service account JSON format',
          details: import.meta.env.MODE === 'development' ? String(parseError) : undefined
        };
      }
    }
    
    const client = new RecaptchaEnterpriseServiceClient(clientOptions);
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

    // Create the assessment promise and ensure it's properly handled
    const [response] = await client.createAssessment(request);

    // Check if the token is valid
    if (!response.tokenProperties?.valid) {
      const reason = response.tokenProperties?.invalidReason || 'Unknown reason';
      return { success: false, error: `Invalid token: ${reason}` };
    }

    // Check if the expected action was executed
    if (response.tokenProperties.action === recaptchaAction) {
      // Get the risk score
      const score = response.riskAnalysis?.score || 0;

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
      return { success: false, error: 'Action mismatch' };
    }
  } catch (error: any) {
    if (import.meta.env.MODE === 'development') {
      console.error('reCAPTCHA verification error:', error);
    }
    
    // Use caught rejection if available (from unhandled rejection handler)
    const actualError = caughtRejection || error;
    
    // Provide more detailed error information
    let errorMessage = 'reCAPTCHA verification error';
    
    if (actualError?.message) {
      errorMessage = actualError.message;
    } else if (typeof actualError === 'string') {
      errorMessage = actualError;
    }
    
    // Check for common authentication errors
    if (errorMessage.includes('authentication') || 
        errorMessage.includes('credentials') || 
        errorMessage.includes('permission') ||
        errorMessage.includes('Could not load the default credentials')) {
      errorMessage = 'Google Cloud authentication error. Please configure credentials via GOOGLE_APPLICATION_CREDENTIALS (path to service account key file) or GOOGLE_SERVICE_ACCOUNT_JSON (JSON string of credentials).';
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: import.meta.env.MODE === 'development' ? String(actualError) : undefined
    };
  } finally {
    // Always remove the rejection handler
    if (handlerAdded && typeof process !== 'undefined' && process.removeListener) {
      process.removeListener('unhandledRejection', rejectionHandler);
    }
  }
}

