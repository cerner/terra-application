/* eslint-disable import/no-unresolved, compat/compat, no-console */
import intlLoaders from 'intlLoaders';

const loadFallbackIntl = async (localeContext, key) => {
  try {
    intlLoaders.en[key]();

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en data as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadIntl = async (locale, key) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    if (key === 'datetimeformat') {
      await import('@formatjs/intl-datetimeformat/add-all-tz');
    }
    intlLoaders[locale][key]();
  } catch (e) {
    if (fallbackLocale) {
      try {
        intlLoaders[fallbackLocale][key]();

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data for ${key} was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackIntl(localeContext, key);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackIntl(localeContext, key);
    }
  }
};

export default loadIntl;
/* eslint-enable import/no-unresolved, compat/compat, no-console */
