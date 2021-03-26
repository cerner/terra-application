import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

import ApplicationIntlContext from '../../application-intl/ApplicationIntlContext';
import ErrorBoundaryBase from '../../shared/ErrorBoundaryBase';

const propTypes = {
  /**
   * Components to render within the context of the error boundary. Exceptions
   * thrown by these components during their render lifecycle will be caught by
   * the error boundary and will result in an error view being rendered instead.
   */
  children: PropTypes.node,
};

/**
 * The ApplicationContainerErrorBoundary provides a render error boundary for
 * an entire application.
 *
 * It should not be used to provide error handling within page content.
 */
const ApplicationContainerErrorBoundary = ({ children }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const [caughtError, setCaughtError] = React.useState(false);

  if (caughtError) {
    return (
      <StatusView
        variant="error"
        message={applicationIntl.formatMessage({
          id: 'terraApplication.errorBoundary.defaultErrorMessage',
        }, {
          errorDetails: caughtError.message.toString(),
        })}
        role="alert"
        aria-live="assertive"
      />
    );
  }

  return (
    <ErrorBoundaryBase onCatchError={(error) => { setCaughtError(error); }}>
      {children}
    </ErrorBoundaryBase>
  );
};

ApplicationContainerErrorBoundary.propTypes = propTypes;

export default ApplicationContainerErrorBoundary;
