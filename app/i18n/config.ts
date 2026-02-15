export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'de', 'es', 'fr', 'pt', 'ja', 'zh', 'ko'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  ja: '日本語',
  zh: '简体中文',
  ko: '한국어',
};
