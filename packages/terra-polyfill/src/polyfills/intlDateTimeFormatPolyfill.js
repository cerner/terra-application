/* eslint-disable global-require, import/no-dynamic-require */
/**
 * Polyfill for [Intl.DateTimeFormat() Options parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 * `options` parameter of Date and Intl functions are not supported in IE10 hence adding this polyfill to provide support for `options` parameter in IE10. : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#browser_compatibility
 */
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';

/* `@formatjs/intl-datetimeformat/polyfill` requires `@formatjs/intl-getcanonicallocales` and `@formatjs/intl-locale/polyfil` https://formatjs.io/docs/polyfills/intl-datetimeformat */
function intlDateTimeFormatPolyfill(locale) {
  require('@formatjs/intl-datetimeformat/polyfill');
  require(`@formatjs/intl-datetimeformat/locale-data/${locale}`);
}

export default intlDateTimeFormatPolyfill;
