const loadFallbackIntl = async (localeContext, key) => {
  try {
    const fallbackData = `@formatjs/intl-${key}/locale-data/en`;
    await import(fallbackData);

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
    const localeImport = `@formatjs/intl-${key}/locale-data/${locale}`;
    await import(localeImport);
  } catch (e) {
    if (fallbackLocale) {
      try {
        const fallbackData = `@formatjs/intl-${key}/locale-data/${fallbackLocale}`;
        await import(fallbackData);

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data for ${key} was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackIntl(localeContext);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackIntl(localeContext, key);
    }
  }
};

export default loadIntl;
/* eslint-enable import/no-unresolved, compat/compat, no-console */
