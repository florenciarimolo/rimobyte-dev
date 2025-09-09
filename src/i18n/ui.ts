import {LANG} from '@/i18n/index';
import SpainFlag from '@/components/flags/Spain';
import UnitedKingdomFlag from '@/components/flags/UnitedKingdom';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag, isoCode: string }
> = {
	en: {
		code: LANG.ENGLISH,
		name: 'English',
		flag: UnitedKingdomFlag,
		isoCode: 'en_GB'
	},
	es: {
		code: LANG.SPANISH,
		name: 'Español',
		flag: SpainFlag,
		isoCode: 'es_ES'
	},
};

export const defaultLang = LANG.SPANISH;
export const showDefaultLang = false;

export const routes = {
	es: {
		'': '',
	},
	en: {
		'': '',
	},
};