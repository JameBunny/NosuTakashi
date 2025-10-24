import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import th from './th.json'
import jp from './jp.json'

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, th: { translation: th }, jp: { translation: jp } },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
