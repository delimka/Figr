import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./languages/en.json";
import translationRU from "./languages/ru.json";
import translationEST from "./languages/est.json";

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
  const defaultLanguage = "est";
  const savedLanguage = localStorage.getItem("i18nextLng") || defaultLanguage;

  await i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    }
  });
};

initializeI18n().catch(() => {
  //dsadas
});

export default i18n;
