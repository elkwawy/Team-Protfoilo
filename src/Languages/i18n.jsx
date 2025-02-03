import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { English } from "./English";
import { Arabic } from "./Arabic";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English,
    },
    ar: {
      translation: Arabic,
    },
  },
  // lng: "ar", // اللغة الافتراضية
  // get it from localStorage and if it's null, set it to "ar"
  lng: localStorage.getItem("lng") || "ar",
  fallbackLng: "en", // اللغة الاحتياطية
  interpolation: {
    escapeValue: false, // React يقوم بعملية الهروب
  },
});

export default i18n;
