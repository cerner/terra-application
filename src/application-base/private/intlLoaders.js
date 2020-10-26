/* eslint-disable import/no-unresolved, compat/compat, no-console */
import intlLoaders from 'intlLoaders';
import hasIntlData from 'intl-locales-supported';

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

const loadFallbackIntl = (localeContext, polyfill) => {
  try {
    if (!hasIntlData(['en'], supportedIntlConstructors())) {
      intlLoaders.en[polyfill]();
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en data as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadIntl = (locale, polyfill) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    intlLoaders[locale][polyfill]();
  } catch (e) {
    if (fallbackLocale) {
      try {
        if (!hasIntlData([fallbackLocale], supportedIntlConstructors())) {
          intlLoaders[fallbackLocale][polyfill]();
        }

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data for ${polyfill} was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackIntl(localeContext, polyfill);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackIntl(localeContext, polyfill);
    }
  }
};

export default loadIntl;
/* eslint-enable import/no-unresolved, compat/compat, no-console */
