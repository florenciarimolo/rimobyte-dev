import spanish from '@/i18n/es.json';

export const LANG = {
	SPANISH: 'es',
} as const;

// HTML lang code (RFC 5646 format)
export const LANG_CODES = {
	SPANISH: 'es-ES',
} as const;

export const getI18N = (_args?: { currentLocale?: string }) => spanish;

// Utility function to get nested translation values using dot notation
export const getTranslation = (translations: unknown, key: string): string => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return key.split('.').reduce((obj: any, k) => obj?.[k], translations) || key;
};
