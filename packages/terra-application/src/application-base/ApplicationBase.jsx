/* global TERRA_THEME_CONFIG */

import React, { useRef, useEffect, Suspense, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
import i18nLoader from './private/i18nLoader';

import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationIntlProvider } from '../application-intl';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import getBrowserLocale from './private/getBrowserLocale';
import useTestOverrides from './private/useTestOverrides';
import Logger from '../utils/logger';

import './private/initializeInert';
import './baseStyles';

import styles from './ApplicationBase.module.scss';

const cx = classNames.bind(styles);

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
   * By default, the elements rendered by ApplicationBase are fit to the Application's parent using 100% height.
   * If `fitToParentIsDisabled` is provided, the Application will render at its intrinsic content height and
   * potentially overflow its parent.
   */
  fitToParentIsDisabled: PropTypes.bool,
  /**
   * By default, NavigationPrompts rendered within ApplicationBase will cause the user to be prompted during
   * the window's beforeUnload event. If `unloadPromptIsDisabled` is provided, the user will **not** be prompted
   * before continuing with the unload event, even if NavigationPrompts are present.
   */
  unloadPromptIsDisabled: PropTypes.bool,
  /**
   * @private
   * When set to true scroll will be disabled. internal prop to be used by Mpages for terra-tabs in  Powerchart.
   */
  noScroll: PropTypes.bool,
};

const ApplicationBase = ({
  locale, themeName, fitToParentIsDisabled, children, unloadPromptIsDisabled, noScroll,
}) => {
  const registeredPromptsRef = useRef();
  const [messages, setMessages] = useState();

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

  const { localeOverride, themeOverride } = useTestOverrides(); // Allows us to test deployed applications in different locales.

  const finalLocale = localeOverride || locale || browserLocale;

  useEffect(() => {
    if (finalLocale !== undefined) {
      i18nLoader(finalLocale).then(translationsModule => setMessages(translationsModule.default)).catch((error) => {
        // eslint-disable-next-line no-console
        Logger.error(error);
        throw error;
      });
    }
  }, [finalLocale]);

  const theme = useMemo(() => ({
    // If the theme class name is undefined or an empty string, that indicates we have the root theme and should apply the root theme name.
    name: themeOverride || themeName || rootThemeName,
    className: themeOverride || themeName,
  }), [themeOverride, themeName]);

  if (messages === undefined) return null;

  return (
    <div data-terra-application-base className={cx('application-base', { fill: !fitToParentIsDisabled })}>
      <ThemeProvider themeName={themeName}>
        <ThemeContextProvider theme={theme}>
          <IntlProvider
            key={finalLocale}
            locale={finalLocale}
            messages={messages}
          >
            <ApplicationErrorBoundary>
              <ApplicationIntlProvider>
                <ActiveBreakpointProvider>
                  <NavigationPromptCheckpoint
                    onPromptChange={(registeredPrompts) => {
                      registeredPromptsRef.current = registeredPrompts;
                    }}
                  >
                    <ApplicationLoadingOverlayProvider noScroll={noScroll}>
                      <ApplicationStatusOverlayProvider noScroll={noScroll}>
                        <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
                          {children}
                        </Suspense>
                      </ApplicationStatusOverlayProvider>
                    </ApplicationLoadingOverlayProvider>
                  </NavigationPromptCheckpoint>
                </ActiveBreakpointProvider>
              </ApplicationIntlProvider>
            </ApplicationErrorBoundary>
          </IntlProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </div>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
