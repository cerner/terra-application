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
  /**
   * An array of Button attribute objects defining Buttons to render within the presented error view.
   */
  errorViewButtonAttrs: PropTypes.array,
  /**
   * @private
   * Intl object for translations.
   */
  intl: intlShape,
};

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
    const { children, errorViewButtonAttrs, intl } = this.props;
    const { error } = this.state;

    if (error) {
      const errorDetails = error.message.toString();

      return (
        <StatusView
          variant="error"
          message={intl.formatMessage({ id: 'terraApplication.errorBoundary.defaultErrorMessage' }, { errorDetails })} // TODO intl
          buttonAttrs={errorViewButtonAttrs}
          role="alert"
          aria-live="assertive"
        />
      );
    }

    return children;
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default injectIntl(ApplicationErrorBoundary);
