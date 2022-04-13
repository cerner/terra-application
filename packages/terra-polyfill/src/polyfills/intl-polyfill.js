/* eslint-disable global-require, import/no-named-as-default */
import { shouldPolyfill } from '@formatjs/intl-relativetimeformat/should-polyfill';

/**
   * Use try-catch to check if Intl is provided by the browser. In some instances checking Intl will throw an
   * error and crash the page with little information.
   *
   * Reference: https://github.com/cerner/terra-core/issues/2820
   */
let hasIntl;
try {
  hasIntl = typeof (Intl) === 'object' && typeof (Intl.DateTimeFormat) === 'function' && typeof (Intl.NumberFormat) === 'function' && typeof (Intl.PluralRules) === 'function';
} catch (error) {
  hasIntl = false;
}

if (!hasIntl) {
  require('intl');
}

if (shouldPolyfill()) {
  require('@formatjs/intl-relativetimeformat/polyfill');
}

/* eslint-enable global-require */
