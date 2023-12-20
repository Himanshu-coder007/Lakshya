import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import hiTranslations from './locales/hi.json';
import mrTranslations from './locales/mr.json';
import bnTranslations from './locales/bn.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
      hi: {
        translation: hiTranslations,
      },
      mr: {
        translation: mrTranslations,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
  });

export default i18n;
