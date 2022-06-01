/* eslint-disable global-require, import/no-dynamic-require */
import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';

function intlDateTimePolyfill(locales) {
  require('@formatjs/intl-datetimeformat/polyfill');
  locales.forEach(locale => {
    require(`@formatjs/intl-datetimeformat/locale-data/${locale}`);
  });
}

export default intlDateTimePolyfill;
