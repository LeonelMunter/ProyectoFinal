import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { selectLanguage } from "./app/languageSlice";
import { store } from "./app/store";

import en from "./language/en.json";
import es from "./language/es.json";
import ar from "./language/ar.json";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const currentLanguage = selectLanguage(store.getState());
    callback(currentLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, es: { translation: es }, ar: { translation: ar } },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
