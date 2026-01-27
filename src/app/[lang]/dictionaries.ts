import 'server-only';

export const dictionaries = {
    pl: () => import('@/locales/pl/menu.json').then((m) => m.default),
    en: () => import('@/locales/en/menu.json').then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
