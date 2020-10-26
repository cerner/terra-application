/* eslint-disable import/no-unresolved, no-console */
import translationLoaders from 'translationsLoaders';

const loadFallbackLocale = (localeContext, callback) => {
  try {
    translationLoaders.en(callback);
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Translations were not supplied for the ${localeContext}. Using en as the fallback locale.`);
    }
  } catch (e) {
    throw new Error(`Translations were not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadTranslations = (locale, callback) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    translationLoaders[locale](callback);
  } catch (e) {
    if (fallbackLocale) {
      try {
        translationLoaders[fallbackLocale](callback);
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Translations were not supplied for the ${locale} locale. Using ${fallbackLocale} as the fallback locale.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackLocale(localeContext, callback);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackLocale(localeContext, callback);
    }
  }
};

export default loadTranslations;
/* eslint-enable import/no-unresolved, no-console */
