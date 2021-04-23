/* global TERRA_THEME_CONFIG */

import React, {
  useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ActiveBreakpointProvider } from 'terra-breakpoints';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';

import { ApplicationIntlProvider } from '../application-intl';
import logger from '../utils/logger';

import i18nLoader from './private/i18nLoader';
import getBrowserLocale from './private/getBrowserLocale';
import useTestOverrides from './private/useTestOverrides';
import './private/initializeInert';
import './baseStyles';

const browserLocale = getBrowserLocale();

// We only need to retrieve the root theme and root theme name once for the life
// of the application.
const themeConfig = (typeof (TERRA_THEME_CONFIG) !== 'undefined') ? TERRA_THEME_CONFIG : {};
const rootThemeName = themeConfig.theme || 'terra-default-theme';

const propTypes = {
  /**
   * The components to render within ApplicationBase.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name to be used to load translated messages.
   * If the `locale` prop is not provided, the preferred language from the
   * browser will be used.
   */
  locale: PropTypes.string,
  /**
   * The name of the theme to apply to the application.
   */
  themeName: PropTypes.string,
};

const ApplicationBase = ({
  locale, themeName, children,
}) => {
  const [messages, setMessages] = useState();

  // Allows us to test deployed applications in different locales.
  const { localeOverride } = useTestOverrides();

  const finalLocale = localeOverride || locale || browserLocale;

  useEffect(() => {
    if (finalLocale !== undefined) {
      i18nLoader(finalLocale).then(translationsModule => {
        setMessages(translationsModule.default);
      }).catch((error) => {
        logger.error(error);
      });
    }
  }, [finalLocale]);

  const theme = useMemo(() => ({
    // An undefined or an empty className indicates that we have the root theme
    // and should apply the root theme name.
    name: themeName || rootThemeName,
    className: themeName,
  }), [themeName]);

  useEffect(() => {
    if (themeName) {
      document.documentElement.classList.add(themeName);
    }

    return () => {
      if (themeName) {
        document.documentElement.classList.remove(themeName);
      }
    };
  }, [themeName]);

  if (messages === undefined) return null;

  return (
    <ThemeContextProvider theme={theme}>
      <IntlProvider
        key={finalLocale}
        locale={finalLocale}
        messages={messages}
      >
        <ApplicationIntlProvider>
          <ActiveBreakpointProvider>
            {children}
          </ActiveBreakpointProvider>
        </ApplicationIntlProvider>
      </IntlProvider>
    </ThemeContextProvider>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
