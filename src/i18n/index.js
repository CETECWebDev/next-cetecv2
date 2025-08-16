import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import en from './en';
import fa from './fa'; // اگر زبان فارسی هم داری

i18n
  .use(initReactI18next)
  .init({
    resources: {
    //   en: { translation: en },
      fa: { translation: fa },
    },
    lng: 'fa', // زبان پیش‌فرض
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
