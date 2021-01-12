/* global TERRA_THEME_CONFIG */

import React, {
  useRef, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import { IntlProvider } from 'react-intl';
import i18nLoader from './private/i18nLoader';
import { NavigationPromptCheckpoint } from '../navigation-prompt';

import getBrowserLocale from './private/getBrowserLocale';
import useTestOverrides from './private/useTestOverrides';

import './private/initializeInert';
import './baseStyles';

const browserLocale = getBrowserLocale();

// We only need to retrieve the root theme and root theme name once for the life of the application.
const themeConfig = (typeof (TERRA_THEME_CONFIG) !== 'undefined') ? TERRA_THEME_CONFIG : undefined;
const rootThemeName = themeConfig?.theme ? themeConfig.theme : 'terra-default-theme';

const propTypes = {
  /**
   * The components to render within ApplicationBase.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name to be used to load translated messages.
   * If the `locale` prop is not provided, the preferred language from the browser will be used.
   */
  locale: PropTypes.string,
  /**
   * The name of the theme to apply to the application using terra-theme-provider.
   */
  themeName: PropTypes.string,
  /**
   * By default, NavigationPrompts rendered within ApplicationBase will cause the user to be prompted during
   * the window's beforeUnload event. If `unloadPromptIsDisabled` is provided, the user will **not** be prompted
   * before continuing with the unload event, even if NavigationPrompts are present.
   */
  unloadPromptIsDisabled: PropTypes.bool,
};

const ApplicationBase = ({
  locale, themeName, children, unloadPromptIsDisabled,
}) => {
  const registeredPromptsRef = useRef();
  const [messages, setMessages] = useState();

  const { localeOverride } = useTestOverrides(); // Allows us to test deployed applications in different locales.

  const finalLocale = localeOverride || locale || browserLocale;

  useEffect(() => {
    if (finalLocale !== undefined) {
      i18nLoader(finalLocale).then(translationsModule => setMessages(translationsModule.default)).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
      });
    }
  }, [finalLocale]);

  const theme = useMemo(() => ({
    // If the theme class name is undefined or an empty string, that indicates we have the root theme and should apply the root theme name.
    name: themeName || rootThemeName,
    className: themeName,
  }), [themeName]);

  useEffect(() => {
    if (unloadPromptIsDisabled) {
      return undefined;
    }

    function onBeforeUnload(event) {
      if (registeredPromptsRef.current && registeredPromptsRef.current.length) {
        event.preventDefault();

        // Chrome requires returnValue to be set to present the confirmation dialog
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        // For this prompt, ApplicationBase is limited to browser-defaulted messaging.
        return '';
      }

      return undefined;
    }

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [unloadPromptIsDisabled, registeredPromptsRef]);

  if (messages === undefined) return null;

  return (
    <ThemeProvider themeName={themeName}>
      <ThemeContextProvider theme={theme}>
        <IntlProvider
          key={finalLocale}
          locale={finalLocale}
          messages={messages}
        >
          <ActiveBreakpointProvider>
            <NavigationPromptCheckpoint
              onPromptChange={(registeredPrompts) => {
                registeredPromptsRef.current = registeredPrompts;
              }}
            >
              {children}
            </NavigationPromptCheckpoint>
          </ActiveBreakpointProvider>
        </IntlProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
