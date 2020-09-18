import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from '../application-error-boundary';
import { NavigationPromptCheckpoint } from '../navigation-prompt';

import useSkipToLinks from './useSkipToLinks';
import ApplicationContainerContext from './private/ApplicationContainerContext';
import styles from './ApplicationContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  disableParentFill: PropTypes.bool,
  hideSkipToLinks: PropTypes.bool,
  unloadPromptIsDisabled: PropTypes.bool,
};

const ApplicationContainerErrorView = ({ errorDetails }) => (
  <div aria-live="assertive">
    Error:
    {' '}
    {errorDetails}
  </div>
);

const ApplicationContainer = ({
  children, disableParentFill, hideSkipToLinks, unloadPromptIsDisabled,
}) => {
  const registeredPromptsRef = React.useRef();
  const { SkipToLinksProvider, SkipToLinks } = useSkipToLinks();

  const contextValue = React.useMemo(() => ({ disableParentFill }), [disableParentFill]);

  React.useEffect(() => {
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
  }, [unloadPromptIsDisabled]);

  return (
    <ApplicationContainerContext.Provider value={contextValue}>
      <div id="terra-application-container" className={cx({ 'fill-parent': !disableParentFill })}>
        {!hideSkipToLinks && <SkipToLinks />}
        <SkipToLinksProvider>
          <NavigationPromptCheckpoint
            onPromptChange={(registeredPrompts) => {
              registeredPromptsRef.current = registeredPrompts;
            }}
          >
            <ApplicationErrorBoundary renderErrorView={(errorDetails) => <ApplicationContainerErrorView errorDetails={errorDetails} />}>
              {children}
            </ApplicationErrorBoundary>
          </NavigationPromptCheckpoint>
        </SkipToLinksProvider>
      </div>
    </ApplicationContainerContext.Provider>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
