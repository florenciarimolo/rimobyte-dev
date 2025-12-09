import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactFormProps {
  currentLang: 'en' | 'es';
}

const ContactForm: React.FC<ContactFormProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  // Get reCAPTCHA site key from environment variable
  // For development, you can use a test key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
  const RECAPTCHA_SITE_KEY = import.meta.env.RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Listen for theme changes
    const handleThemeChange = () => checkTheme();
    window.addEventListener('themechange', handleThemeChange);
    
    // Also check periodically in case theme changes via other means
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const translations = {
    en: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      recaptchaError: 'Please complete the reCAPTCHA verification.',
      placeholder: {
        name: 'Your name',
        email: 'your.email@example.com',
        subject: 'Subject of your message',
        message: 'Your message here...'
      }
    },
    es: {
      name: 'Nombre',
      email: 'Correo',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado exitosamente!',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      recaptchaError: 'Por favor, completa la verificación reCAPTCHA.',
      placeholder: {
        name: 'Tu nombre',
        email: 'tu.correo@ejemplo.com',
        subject: 'Asunto de tu mensaje',
        message: 'Tu mensaje aquí...'
      }
    }
  };

  const t = translations[currentLang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecaptchaError(false);
    
    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setRecaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaValue
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset reCAPTCHA
        recaptchaRef.current?.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setRecaptchaError(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border dark:border-gray-700 border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.placeholder.name}
              required
              className="w-full px-4 py-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-200 rounded-lg dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.placeholder.email}
              required
              className="w-full px-4 py-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-200 rounded-lg dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
            {t.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.placeholder.subject}
            required
            className="w-full px-4 py-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-200 rounded-lg dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.placeholder.message}
            required
            rows={6}
            className="w-full px-4 py-3 dark:bg-gray-700 bg-gray-50 border dark:border-gray-600 border-gray-200 rounded-lg dark:text-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-300 border border-green-500 rounded-lg text-green-700 dark:text-green-700">
            {t.success}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-400 border border-red-500 rounded-lg text-red-900 dark:text-red-900">
            {t.error}
          </div>
        )}

        {/* reCAPTCHA */}
        <div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
            theme={isDark ? 'dark' : 'light'}
          />
          {recaptchaError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {t.recaptchaError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.sending}
            </div>
          ) : (
            t.send
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
