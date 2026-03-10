import React from 'react';
import ContactForm from './ContactForm';
import { getTranslation, LANG } from '@/i18n';
import { MailIcon, WhatsAppIcon } from '@/components/icons';

interface ContactSectionProps {
  translations: any;
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
  recaptchaSiteKey?: string;
  isLanding?: boolean;
  landingType?: 'wordpress' | 'migration';
}

const ContactSection: React.FC<ContactSectionProps> = ({ translations, currentLang, recaptchaSiteKey, isLanding = false, landingType }) => {
  let buttonText: string | undefined;
  if (isLanding) {
    if (landingType === 'migration' && translations?.migrationLanding?.contactForm?.button) {
      buttonText = translations.migrationLanding.contactForm.button;
    } else if (landingType === 'wordpress' && translations?.wordpressLanding?.cta?.button) {
      buttonText = translations.wordpressLanding.cta.button;
    } else if (!landingType) {
      if (translations?.migrationLanding?.contactForm?.button) {
        buttonText = translations.migrationLanding.contactForm.button;
      } else if (translations?.wordpressLanding?.cta?.button) {
        buttonText = translations.wordpressLanding.cta.button;
      }
    }
  }

  return (
    <section id="contact" className={isLanding ? "py-20" : "py-20 bg-white dark:bg-gray-800"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
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

            {/* WhatsApp prominent CTA */}
            <a
              href="https://wa.me/34684713743"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-green-500/30 bg-green-500/5 dark:bg-green-500/10 hover:bg-green-500/10 dark:hover:bg-green-500/15 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-base font-semibold text-gray-900 dark:text-white">
                  {getTranslation(translations, 'sections.contact.whatsappCta') || getTranslation(translations, 'sections.contact.contactInfo.whatsapp')}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">+34 684 713 743</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>

            <address className="space-y-4 not-italic">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <MailIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {getTranslation(translations, 'sections.contact.contactInfo.email')}
                  </h4>
                  <a href="mailto:info@rimobyte.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    info@rimobyte.com
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
