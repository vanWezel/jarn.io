import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'nl',
        fallbackLng: 'nl',
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;