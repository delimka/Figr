import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './languages/en.json';
import translationRU from './languages/ru.json';
import translationEST from './languages/est.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  est: {
    translation: translationEST,
  },
};

const initializeI18n = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'est', 
      interpolation: {
        escapeValue: false, 
      },
    });
    
};

initializeI18n().catch(() => {
  // Handle errors 
});

export default i18n;
