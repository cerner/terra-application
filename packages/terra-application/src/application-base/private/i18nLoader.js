/* eslint-disable global-require, import/no-named-as-default */
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';

const i18nLoader = (locale) => {
  if (global.IntlPolyfill) {
    /**
     * Intl polyfill attempts to cache and restore static RegExp properties before executing any regular expressions in order
     * to comply with ECMA-402. There are times this results in regex syntax error so we are disabling this feature.
     *
     * Reference: https://github.com/andyearnshaw/Intl.js#regexp-cache--restore
     */
    /* eslint-disable no-underscore-dangle */
    if (Intl.__disableRegExpRestore && typeof Intl.__disableRegExpRestore === 'function') {
      Intl.__disableRegExpRestore();
    }
    /* eslint-enable no-underscore-dangle */

    loadIntl(locale, 'intl');
  }

  if (global.Intl && Intl.RelativeTimeFormat && Intl.RelativeTimeFormat.polyfilled) {
    loadIntl(locale, 'relativetimeformat');
  }

  return loadTranslations(locale);
};

export default i18nLoader;
/* eslint-enable global-require */
