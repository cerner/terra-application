import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { UnsavedChangesPromptCheckpoint } from '../unsaved-changes-prompt';
import WindowManager from '../utils/window-manager';
import ActiveMainProvider from '../main-container/private/ActiveMainProvider';
import RootLayerContainer from '../layer-manager/RootLayerContainer';

import ApplicationContainerErrorBoundary from './private/ApplicationContainerErrorBoundary';
import useSkipToLinks from './private/skip-to-links/useSkipToLinks';

import styles from './ApplicationContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the ApplicationContainer.
   */
  children: PropTypes.node,
  /**
   * When true, the ApplicationContainer will not prompt the user during window
   * unload events when unsaved changes are present.
   */
  unloadPromptIsDisabled: PropTypes.bool,
};

/**
 * The ApplicationContainer component provides framework-dependent implementations
 * of global application concerns, like unsaved changes and render error handling.
 */
const ApplicationContainer = ({
  children, unloadPromptIsDisabled,
}) => {
  // The UnsavedChangesPrompts registered to the ApplicationContainer's checkpoint
  // are stored in this ref. This ref is then queried during the unload event to
  // determine whether UnsavedChangesPrompts are currently registered.
  const registeredPromptsRef = React.useRef();

  // Skip-to links are provided by the ApplicationContainer to ensure proper
  // positioning within the application tab-order.
  const { SkipToLinksProvider, SkipToLinks } = useSkipToLinks();

  React.useEffect(() => {
    if (unloadPromptIsDisabled) {
      return undefined;
    }

    const unregisterUnloadPromptSignal = WindowManager.registerUnloadPromptSignal(() => (
      !!(registeredPromptsRef.current && registeredPromptsRef.current.length)
    ));

    return () => {
      unregisterUnloadPromptSignal();
    };
  }, [unloadPromptIsDisabled]);

  return (
    <UnsavedChangesPromptCheckpoint
      onPromptChange={(registeredPrompts) => {
        registeredPromptsRef.current = registeredPrompts;
      }}
    >
      <div className={cx('application-container')} data-testid="application-container">
        <ActiveMainProvider>
          <ApplicationContainerErrorBoundary>
            <RootLayerContainer>
              <SkipToLinks />
              <SkipToLinksProvider>
                {children}
              </SkipToLinksProvider>
            </RootLayerContainer>
          </ApplicationContainerErrorBoundary>
        </ActiveMainProvider>
      </div>
    </UnsavedChangesPromptCheckpoint>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
