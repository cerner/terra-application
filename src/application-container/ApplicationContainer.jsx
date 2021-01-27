import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ApplicationIntlContext } from '../application-intl';
import { UnsavedChangesPromptCheckpoint } from '../unsaved-changes-prompt';
import ModalManager from '../modal-manager';
import LayerContainer from '../layers/LayerContainer';
import WindowManager from '../utils/window-manager/window-manager';

import useSkipToButtons from './private/skip-to/useSkipToButtons';
import ActiveMainPageProvider from './private/active-main-page/ActiveMainPageProvider';
import ApplicationContainerErrorBoundary from './ApplicationContainerErrorBoundary';
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
  const applicationIntl = React.useContext(ApplicationIntlContext);
  /**
   * The UnsavedChangesPrompts registered to the ApplicationContainer's checkpoint are stored
   * in this ref. This ref is then queried during the unload event to determine whether
   * UnsavedChangesPrompts are currently registered.
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

    const unregisterUnloadPromptTrigger = WindowManager.registerUnloadPromptTrigger(() => registeredPromptsRef.current && registeredPromptsRef.current.length);

    return () => {
      unregisterUnloadPromptTrigger();
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
        <UnsavedChangesPromptCheckpoint
          onPromptChange={(registeredPrompts) => {
            registeredPromptsRef.current = registeredPrompts;
          }}
        >
          <div className={cx('application-container')} aria-label="My Application Title"> {/* TODO:  re-evaluate label */}
            <LayerContainer>
              {!skipToLinksAreDisabled && <SkipToButtons />}
              <SkipToButtonsProvider>
                <ApplicationContainerErrorBoundary
                  errorViewButtonAttrs={[{
                    key: 'reload',
                    text: applicationIntl.formatMessage({ id: 'terraApplication.applicationContainerErrorBoundary.reload' }),
                    onClick: () => { WindowManager.forceLocationReload(); },
                  }]}
                >
                  <ModalManager>
                    {children}
                  </ModalManager>
                </ApplicationContainerErrorBoundary>
              </SkipToButtonsProvider>
            </LayerContainer>
          </div>
        </UnsavedChangesPromptCheckpoint>
      </ActiveMainPageProvider>
    </ApplicationContainerContext.Provider>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
