/* eslint-disable import/no-unresolved */
// we can use should polyfill as well but it breaks when used with multiple locales. documentation for adding dynamic imports https://formatjs.io/docs/polyfills/intl-datetimeformat#dynamic-import--capability-detection
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-datetimeformat/polyfill-force';
import '@formatjs/intl-datetimeformat/locale-data/fr';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/locale-data/de';
import '@formatjs/intl-datetimeformat/locale-data/en-GB';
import '@formatjs/intl-datetimeformat/locale-data/en-IE';
import '@formatjs/intl-datetimeformat/locale-data/es';
import '@formatjs/intl-datetimeformat/locale-data/nl';
import '@formatjs/intl-datetimeformat/locale-data/pt';
import '@formatjs/intl-datetimeformat/locale-data/sv';
