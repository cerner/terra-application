/* eslint-disable global-require, import/no-dynamic-require */
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';

/* `@formatjs/intl-datetimeformat/polyfill` requires `@formatjs/intl-getcanonicallocales` and `@formatjs/intl-locale/polyfil` https://formatjs.io/docs/polyfills/intl-datetimeformat */
function intlDateTimeFormatPolyfill(locale) {
  require('@formatjs/intl-datetimeformat/polyfill');
  require(`@formatjs/intl-datetimeformat/locale-data/${locale}`);
}

export default intlDateTimeFormatPolyfill;
