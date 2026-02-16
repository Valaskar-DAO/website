export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'es', 'fr', 'pt', 'ru', 'ja', 'zh', 'ko'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  ru: 'Русский',
  ja: '日本語',
  zh: '简体中文',
  ko: '한국어',
};
