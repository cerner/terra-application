/* eslint-disable import/no-unresolved */
import { Logger } from '../../utils';

const loadTranslationsFile = (locale) => {
  switch (locale) {
    case 'en':
      return import(/* webpackChunkName: "en-translations" */ 'en.js');
    case 'en-AU':
      return import(/* webpackChunkName: "en-AU-translations" */ 'en-AU.js');
    case 'en-CA':
      return import(/* webpackChunkName: "en-CA-translations" */ 'en-CA.js');
    case 'en-US':
      return import(/* webpackChunkName: "en-US-translations" */ 'en-US.js');
    case 'en-GB':
      return import(/* webpackChunkName: "en-GB-translations" */ 'en-GB.js');
    case 'es':
      return import(/* webpackChunkName: "es-translations" */ 'es.js');
    case 'es-ES':
      return import(/* webpackChunkName: "es-ES-translations" */ 'es-ES.js');
    case 'de':
      return import(/* webpackChunkName: "de-translations" */ 'de.js');
    case 'fr':
      return import(/* webpackChunkName: "fr-translations" */ 'fr.js');
    case 'fr-FR':
      return import(/* webpackChunkName: "fr-FR-translations" */ 'fr-FR.js');
    case 'nl':
      return import(/* webpackChunkName: "nl-translations" */ 'nl.js');
    case 'nl-BE':
      return import(/* webpackChunkName: "nl-BE-translations" */ 'nl-BE.js');
    case 'pt':
      return import(/* webpackChunkName: "pt-translations" */ 'pt.js');
    case 'pt-BR':
      return import(/* webpackChunkName: "pt-BR-translations" */ 'pt-BR.js');
    case 'sv':
      return import(/* webpackChunkName: "sv-translations" */ 'sv.js');
    case 'sv-SE':
      return import(/* webpackChunkName: "sv-SE-translations" */ 'sv-SE.js');
    default:
      return Promise.reject(Error(`Translations were not supplied for the ${locale} locale.`));
  }
};

const loadTranslations = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;

  return loadTranslationsFile(locale).catch((error) => {
    Logger.warn(`${error.message} Using ${fallbackLocale} data as the fallback locale.`);

    if (fallbackLocale) {
      return loadTranslationsFile(fallbackLocale);
    }

    return Promise.reject(error);
  }).catch((error) => {
    Logger.warn(`${error.message} Using en as the fallback locale.`);

    return loadTranslationsFile('en');
  });
};

export default loadTranslations;
