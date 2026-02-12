import React from 'react';
import ContactForm from './ContactForm';
import { getTranslation, LANG } from '@/i18n';
import { MailIcon, WhatsAppIcon, GithubIcon, LinkedInIcon } from '@/components/icons';

interface ContactSectionProps {
  translations: any;
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
  recaptchaSiteKey?: string;
  isLanding?: boolean;
  landingType?: 'wordpress' | 'migration';
}

const ContactSection: React.FC<ContactSectionProps> = ({ translations, currentLang, recaptchaSiteKey, isLanding = false, landingType }) => {
  // Determine button text based on landing type
  let buttonText: string | undefined;
  if (isLanding) {
    if (landingType === 'migration' && translations?.migrationLanding?.contactForm?.button) {
      buttonText = translations.migrationLanding.contactForm.button;
    } else if (landingType === 'wordpress' && translations?.wordpressLanding?.cta?.button) {
      buttonText = translations.wordpressLanding.cta.button;
    } else if (!landingType) {
      // Fallback: check if it's migration landing by checking if migrationLanding.contactForm exists
      if (translations?.migrationLanding?.contactForm?.button) {
        buttonText = translations.migrationLanding.contactForm.button;
      } else if (translations?.wordpressLanding?.cta?.button) {
        buttonText = translations.wordpressLanding.cta.button;
      }
    }
  }

  return (
    <section id="contact" className={isLanding ? "py-20" : "py-20 bg-gray-50 dark:bg-gray-900"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'sections.contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {getTranslation(translations, 'sections.contact.subtitle')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {getTranslation(translations, 'sections.contact.description')}
              </p>
            </div>
            
            <address className="space-y-6 not-italic">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {getTranslation(translations, 'sections.contact.contactInfo.email')}
                  </h4>
                  <a href="mailto:info@rimobyte.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    info@rimobyte.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {getTranslation(translations, 'sections.contact.contactInfo.whatsapp')}
                  </h4>
                  <a
                    href="https://wa.me/34684713743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    +34 684 713 743
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <GithubIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {getTranslation(translations, 'sections.contact.contactInfo.github')}
                  </h4>
                  <a href="https://github.com/florenciarimolo" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    github.com/florenciarimolo
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <LinkedInIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {getTranslation(translations, 'sections.contact.contactInfo.linkedin')}
                  </h4>
                  <a href="https://www.linkedin.com/in/florencia-rimolofigueira/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    linkedin.com/in/florencia-rimolofigueira
                  </a>
                </div>
              </div>
            </address>
          </div>
          
          <ContactForm currentLang={currentLang} recaptchaSiteKey={recaptchaSiteKey} isLanding={isLanding} buttonText={buttonText} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

