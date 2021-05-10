import React from 'react';
import PropTypes from 'prop-types';

import logger from '../utils/logger';

const propTypes = {
  /**
   * Callback function that will be executed when an error is caught by the
   * error boundary. The caught error will be provided as a function parameter.
   * Ex. onCatchError(caughtError)
   */
  onCatchError: PropTypes.func.isRequired,
  /**
   * Components to render within the context of the error boundary. Exceptions
   * thrown by these components during their render lifecycle will be caught by
   * the error boundary.
   *
   * If an error is caught by the error boundary, the provided children will not
   * be rendered.
   */
  children: PropTypes.node,
};

/**
 * The ErrorBoundaryBase component provides a basic error boundary
 * implementation with callback props allowing for customized error handling
 * workflows.
 */
class ErrorBoundaryBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    logger.error(error);

    const { onCatchError } = this.props;

    if (onCatchError) {
      onCatchError(error);
      return;
    }

    // The callback is a required prop, but if no callback is provided, the
    // error is re-thrown so that it can be caught elsewhere.
    throw error;
  }

  render() {
    if (this.state.error) {
      return null;
    }

    return this.props.children;
  }
}

ErrorBoundaryBase.propTypes = propTypes;

export default ErrorBoundaryBase;
