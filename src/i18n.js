import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from './locales/english/translation.json';
import translationHE from './locales/hebrew/translation.json';

const resources = {
  English: {
    translation: translationEN
  },
  Hebrew: {
    translation: translationHE
  },
};

i18n
  .use(detector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "Hebrew",
    fallbackLng: "Hebrew",
    keySeparator: false, 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;