import hasIntlData from 'intl-locales-supported';
import loadLocaleData from './loadLocaleData';
import logger from '../../utils/logger';

const supportedIntlConstructors = (polyfill) => {
  /**
   * Use try-catch to check if Intl is provided by the browser. In some instances checking Intl will throw an
   * error and crash the page with little information.
   *
   * Reference: https://github.com/cerner/terra-core/issues/2820
   */
  let constructors;
  try {
    if (polyfill === 'intl') {
      if (typeof (Intl) === 'object' && typeof (Intl.DateTimeFormat) === 'function' && typeof (Intl.NumberFormat) === 'function' && typeof (Intl.PluralRules) === 'function') {
        /**
         * intl-locales-supported accesses the 'supportedLocalesOf' property of each of these constructors.
         * When certain polyfills are used, the polyfill may not have the 'supportedLocalesOf' property.
         * For example, when using the date-time-format-timezone Intl.DateTimeFormat becomes Intl.DateTimeFormatPolyfill which does not support this property.
         *
         * Reference: https://github.com/cerner/terra-core/issues/2914
         */
        if (Object.prototype.hasOwnProperty.call(Intl.DateTimeFormat, 'supportedLocalesOf') && Object.prototype.hasOwnProperty.call(Intl.NumberFormat, 'supportedLocalesOf') && Object.prototype.hasOwnProperty.call(Intl.PluralRules, 'supportedLocalesOf')) {
          constructors = [
            Intl.DateTimeFormat,
            Intl.NumberFormat,
            Intl.PluralRules,
          ];
        } else {
          constructors = [];
        }
      }
    } else if (typeof (Intl) === 'object' && typeof (Intl.RelativeTimeFormate) === 'function') {
      if (Object.prototype.hasOwnProperty.call(Intl.RelativeTimeFormat, 'supportedLocalesOf')) {
        constructors = [
          Intl.RelativeTimeFormat,
        ];
      } else {
        constructors = [];
      }
    }
  } catch (error) {
    constructors = [];
  }

  return constructors;
};

const loadIntl = (locale, polyfill) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;

  if (!hasIntlData([locale], supportedIntlConstructors(polyfill))) {
    return loadLocaleData(locale, polyfill).catch((error) => {
      if (fallbackLocale) {
        logger.warn(`${error.message} Using ${fallbackLocale} data as the fallback locale data.`);
        if (!hasIntlData([fallbackLocale], supportedIntlConstructors(polyfill))) {
          return loadLocaleData(fallbackLocale, polyfill);
        }
      } else {
        return Promise.reject(error);
      }

      return Promise.resolve();
    }).catch((error) => {
      logger.warn(`${error.message} Using en data as the fallback locale data.`);

      if (!hasIntlData(['en'], supportedIntlConstructors(polyfill))) {
        return loadLocaleData('en', polyfill);
      }

      return Promise.resolve();
    });
  }

  return Promise.resolve();
};

export default loadIntl;
