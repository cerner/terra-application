import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

import ApplicationIntlContext from '../application-intl/ApplicationIntlContext';
import ErrorBoundary from '../shared/ErrorBoundary';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationContainerErrorBoundary. Exceptions thrown
   * by these components during their render lifecycle will be caught by the ApplicationContainerErrorBoundary.
   */
  children: PropTypes.node,
  /**
   * An array of Button attribute objects defining Buttons to render within the presented error view.
   */
  errorViewButtonAttrs: PropTypes.array,
};

const ApplicationContainerErrorBoundary = ({ children, errorViewButtonAttrs }) => {
  const [error, setError] = React.useState(false);
  const applicationIntl = React.useContext(ApplicationIntlContext);

  if (error) {
    return (
      <StatusView
        variant="error"
        message={applicationIntl.formatMessage({ id: 'terraApplication.errorBoundary.defaultErrorMessage' }, { errorDetails: error.message.toString() })}
        buttonAttrs={errorViewButtonAttrs}
        role="alert"
        aria-live="assertive"
      />
    );
  }

  return (
    <ErrorBoundary onCatchError={(caughtError) => { setError(caughtError); }}>
      {children}
    </ErrorBoundary>
  );
};

ApplicationContainerErrorBoundary.propTypes = propTypes;

export default ApplicationContainerErrorBoundary;
