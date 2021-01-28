import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import ApplicationIntlContext from './ApplicationIntlContext';

const propTypes = {
  /**
   * The components to render within the context of the ApplicationIntlProvider.
   */
  children: PropTypes.node,
  /**
   * @private
   * React-intl no longer exports the intl shape.
   * See [doc](https://formatjs.io/docs/intl#the-intl-object) for most complete and up to date intl shape.
   */
  intl: PropTypes.shape({
    /**
     * Current locale that the app should be rendered in.
     */
    locale: PropTypes.string,
    /**
     * Object defining messages.
     */
    messages: PropTypes.shape({}),
    /**
     * Default locale for when a message is not translated.
     */
    defaultLocale: PropTypes.string,
    /**
     * Message formatting.
     */
    formatMessage: PropTypes.func,
    /**
     * This function will return a formatted number string.
     */
    formatNumber: PropTypes.func,
    /**
     * This function will return a plural category string: "zero", "one", "two", "few", "many", or "other".
     */
    formatPlural: PropTypes.func,
    /**
     * This function will return a formatted date string.
     */
    formatDate: PropTypes.func,
    /**
     * This function will return a formatted date string.
     */
    formatTime: PropTypes.func,
    /**
     * This function will return a formatted relative time string.
     */
    formateRelativeTime: PropTypes.func,
  }),
};

const ApplicationIntlProvider = injectIntl(({ children, intl }) => (
  <ApplicationIntlContext.Provider value={intl}>
    {children}
  </ApplicationIntlContext.Provider>
));

ApplicationIntlProvider.propTypes = propTypes;

export default ApplicationIntlProvider;
