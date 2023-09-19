
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "error": "Error",
          "please_fill_all_fields": "Please fill all fields.",
        }
      },
      pt: {
        translation: {
          "error": "Erro",
          "please_fill_all_fields": "Por favor, preencha todos os campos.",
        }
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
