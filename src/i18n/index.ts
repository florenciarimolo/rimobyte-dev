import spanish from '@/i18n/es.json';
import english from '@/i18n/en.json';

export const LANG = {
	SPANISH: 'es',
	ENGLISH: 'en'
};

// HTML lang codes (RFC 5646 format)
export const LANG_CODES = {
	SPANISH: 'es-ES',
	ENGLISH: 'en-US'
} as const;

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return english;
	return spanish;
};

// Utility function to get nested translation values using dot notation
export const getTranslation = (translations: any, key: string): string => {
	return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
};