/* eslint-disable import/no-unresolved */
import logger from '../../utils/logger';

const loadTranslationsFile = (locale) => {
  return import(`locales/${locale}.js`);
};

const loadTranslations = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;

  return loadTranslationsFile(locale).catch((error) => {
    logger.warn(`${error.message} Using ${fallbackLocale} data as the fallback locale.`);

    if (fallbackLocale) {
      return loadTranslationsFile(fallbackLocale);
    }

    return Promise.reject(error);
  }).catch((error) => {
    logger.warn(`${error.message} Using en as the fallback locale.`);

    return loadTranslationsFile('en');
  });
};

export default loadTranslations;
