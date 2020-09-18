import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from '../application-error-boundary';

import useSkipToLinks from './useSkipToLinks';
import ApplicationContainerContext from './private/ApplicationContainerContext';
import styles from './ApplicationContainer.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  disableParentFill: PropTypes.bool,
  hideSkipToLinks: PropTypes.bool,
};

const ApplicationContainerErrorView = ({ errorDetails }) => (
  <div aria-live="assertive">
    Error:
    {' '}
    {errorDetails}
  </div>
);

const ApplicationContainer = ({
  children, disableParentFill, hideSkipToLinks,
}) => {
  const { SkipToLinksProvider, SkipToLinks } = useSkipToLinks();

  const contextValue = React.useMemo(() => ({ disableParentFill }), [disableParentFill]);

  return (
    <ApplicationContainerContext.Provider value={contextValue}>
      <div id="terra-application-container" className={cx({ 'fill-parent': !disableParentFill })}>
        {!hideSkipToLinks && <SkipToLinks />}
        <SkipToLinksProvider>
          <ApplicationErrorBoundary renderErrorView={(errorDetails) => <ApplicationContainerErrorView errorDetails={errorDetails} />}>
            {children}
          </ApplicationErrorBoundary>
        </SkipToLinksProvider>
      </div>
    </ApplicationContainerContext.Provider>
  );
};

ApplicationContainer.propTypes = propTypes;

export default ApplicationContainer;
