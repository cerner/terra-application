import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';
import { injectIntl, intlShape } from 'react-intl';
import logger from '../utils/logger';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown
   * by these components during their render lifecycle will be caught by the ApplicationErrorBoundary.
   */
  children: PropTypes.node,
  errorViewActions: PropTypes.array,
  /**
   * @private
   * Intl object for translations.
   */
  intl: intlShape,
};

/**
 * The ApplicationErrorBoundary is designed to catch exceptions that are thrown
 * by its children during render lifecycle. In the event an exception is thrown,
 * a styled status component will be rendered to communicate the exception to the
 * user.
 *
 * Unlike a standard error boundary, the error is not persisted within the
 * ApplicationErrorBoundary's state. The ApplicationErrorBoundary will attempt to
 * render its children each time it is updated. Resetting the ApplicationErrorBoundary
 * by using a key is not necessary.
 */
class ApplicationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    logger.error(error);
  }

  render() {
    const { children, errorViewActions, intl } = this.props;
    const activeError = this.state.error;

    if (activeError) {
      const errorDetails = activeError.message.toString();

      const errorText = intl.formatMessage({ id: 'terraApplication.errorBoundary.defaultErrorMessage' }, { errorDetails });
      return (
        <StatusView
          variant="error"
          message={errorText}
          role="alert"
          buttonAttrs={errorViewActions}
        />
      );
    }

    return children;
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default injectIntl(ApplicationErrorBoundary);
