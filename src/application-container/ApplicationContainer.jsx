import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from '../application-error-boundary';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import ModalManager from '../modal-manager';
import LayerContainer from '../layers/LayerContainer';

import useSkipToButtons from './private/skip-to/useSkipToButtons';
import ActiveMainPageProvider from './private/active-main-page/ActiveMainPageProvider';
import ApplicationContainerContext from './ApplicationContainerContext';

import styles from './ApplicationContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A string description for the application used for presentation purposes throughout the application.
   * Provided to the application's contents through the ApplicationContainerContext.
   */
  applicationName: PropTypes.string,
  /**
   * A string representing the current version of the application. Provided to the application's contents through
   * the ApplicationContainerContext.
   */
  applicationVersion: PropTypes.string,
  /**
   * An object containing unstructured data pertaining to the application. Provided to the application's
   * contents through the ApplicationContainerContext. This prop should be memoized or statically defined to
   * limit updates to consumers of the ApplicationContainerContext.
   */
  applicationMetaData: PropTypes.object,
  /**
   * The components to render within the ApplicationContainer.
   */
  children: PropTypes.node,
  /**
   * When true, the ApplicationContainer will not prompt the user during window unload
   * events when unsaved changes are present.
   */
  unloadPromptIsDisabled: PropTypes.bool,
  /**
   * When true, the ApplicationContainer will not render skip-to buttons.
   */
  skipToLinksAreDisabled: PropTypes.bool,
};

const ApplicationContainer = ({
  applicationName, applicationVersion, applicationMetaData, children, skipToLinksAreDisabled, unloadPromptIsDisabled,
}) => {
  /**
   * The NavigationPrompts registered to the ApplicationContainer's checkpoint are stored
   * in this ref. This ref is then queried during the unload event to determine whether
   * NavigationPrompts are currently registered.
   */
  const registeredPromptsRef = React.useRef();

  const containerContextValue = React.useMemo(() => ({
    applicationName,
    applicationVersion,
    applicationMetaData,
  }), [applicationName, applicationVersion, applicationMetaData]);

  React.useEffect(() => {
    if (unloadPromptIsDisabled) {
      return undefined;
    }

    function onBeforeUnload(event) {
      if (registeredPromptsRef.current && registeredPromptsRef.current.length) {
        event.preventDefault();

        /**
         * Chrome requires returnValue to be set to present the confirmation dialog
         */
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        /**
         * For this prompt, ApplicationBase is limited to browser-defaulted messaging.
         */
        return '';
      }

      return undefined;
    }

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [unloadPromptIsDisabled]);

  /**
   * useSkipToButtons is used to generate a provider and renderer
   * for this instance of the ApplicationContainer.
   */
  const { SkipToButtonsProvider, SkipToButtons } = useSkipToButtons();

  return (
    <ApplicationContainerContext.Provider value={containerContextValue}>
      <ActiveMainPageProvider>
        <NavigationPromptCheckpoint
          onPromptChange={(registeredPrompts) => {
            registeredPromptsRef.current = registeredPrompts;
          }}
        >
          <div className={cx('application-container')}>
            <LayerContainer>
              {!skipToLinksAreDisabled && <SkipToButtons />}
              <SkipToButtonsProvider>
                <ApplicationErrorBoundary
                  errorViewButtonAttrs={[{
                    key: 'reload',
                    text: 'Reload', // TODO intl
                    onClick: () => { window.location.reload(); },
                  }]}
                >
                  <ModalManager>
                    {children}
                  </ModalManager>
                </ApplicationErrorBoundary>
              </SkipToButtonsProvider>
            </LayerContainer>
          </div>
        </NavigationPromptCheckpoint>
      </ActiveMainPageProvider>
    </ApplicationContainerContext.Provider>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
