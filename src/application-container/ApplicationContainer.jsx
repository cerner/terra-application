import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { NavigationPromptCheckpoint } from '../navigation-prompt';
import WindowManager from '../utils/window-manager';

import ApplicationContainerErrorBoundary from './private/ApplicationContainerErrorBoundary';

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
  // The NavigationPrompts registered to the ApplicationContainer's checkpoint
  // are stored in this ref. This ref is then queried during the unload event to
  // determine whether NavigationPrompts are currently registered.
  const registeredPromptsRef = React.useRef();

  React.useEffect(() => {
    if (unloadPromptIsDisabled) {
      return undefined;
    }

    const unregisterUnloadPromptSignal = WindowManager.registerUnloadPromptSignal(() => (
      registeredPromptsRef.current && registeredPromptsRef.current.length
    ));

    return () => {
      unregisterUnloadPromptSignal();
    };
  }, [unloadPromptIsDisabled]);

  return (
    <NavigationPromptCheckpoint
      onPromptChange={(registeredPrompts) => {
        registeredPromptsRef.current = registeredPrompts;
      }}
    >
      <div className={cx('application-container')} data-testid="application-container">
        <ApplicationContainerErrorBoundary>
          {children}
        </ApplicationContainerErrorBoundary>
      </div>
    </NavigationPromptCheckpoint>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
