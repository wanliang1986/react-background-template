import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them)
    // resources: {
    //   en: {
    //     translation: {
    //       'Welcome to React': 'Welcome to React and react-i18next'
    //     }
    //   },
    //   zh: {
    //     translation: {
    //       'Welcome to React': '欢迎使用 React 和 react-i18next'
    //     }
    //   }
    // },
    fallbackLng: 'en',
    debug: true,
    // keySeparator: false,

    react: {
        useSuspense: true,
    },

    ns: ['translation'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;