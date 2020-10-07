/* eslint-disable global-require, import/no-named-as-default */
import { shouldPolyfill as shouldPolyfillGetCanonicalLocales } from '@formatjs/intl-getcanonicallocales/should-polyfill';
import { shouldPolyfill as shouldPolyfillPluralRules } from '@formatjs/intl-pluralrules/should-polyfill';
import { shouldPolyfill as shouldPolyfillRelativeTimeFormat } from '@formatjs/intl-relativetimeformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillNumberFormat } from '@formatjs/intl-numberformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillDateTimeFormat } from '@formatjs/intl-datetimeformat/should-polyfill';
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';

const permitParams = (callback) => {
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
};

const i18nLoader = async (locale, callback) => {
  permitParams(callback);

  const polyfills = {
    getcanonicallocales: {
      shouldPolyfill: shouldPolyfillGetCanonicalLocales,
      shouldLoadLocaleData: false, // getCononicalLocales does not have locale data
    },
    pluralrules: {
      shouldPolyfill: shouldPolyfillPluralRules,
      shouldLoadLocaleData: Intl.PluralRules.polyfilled,
    },
    relativetimeformat: {
      shouldPolyfill: shouldPolyfillRelativeTimeFormat,
      shouldLoadLocaleData: Intl.RelativeTimeFormat.polyfilled,
    },
    numberformat: {
      shouldPolyfill: shouldPolyfillNumberFormat,
      shouldLoadLocaleData: Intl.NumberFormat.polyfilled,
    },
    datetimeformat: {
      shouldPolyfill: shouldPolyfillDateTimeFormat,
      shouldLoadLocaleData: Intl.DateTimeFormat.polyfilled,
    },
  };

  Object.keys(polyfills).map(async key => {
    try {
      if (polyfills[key].shouldPolyfill()) {
        const polyfill = `@formatjs/intl-${key}/polyfill`;
        await import(polyfill);
      }
    } catch (error) {
      const polyfill = `@formatjs/intl-${key}/polyfill`;
      await import(polyfill);
    }

    if (polyfills[key].shouldLoadLocaleData) {
      loadIntl(locale, key);
    }
  });

  loadTranslations(locale, callback);
};

export default i18nLoader;
/* eslint-enable global-require */
