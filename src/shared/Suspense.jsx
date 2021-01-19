import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary';

class FallbackWithCallbacks extends React.Component {
  componentDidMount() {
    if (this.props.onLoadStart) {
      this.props.onLoadStart();
    }
  }

  componentWillUnmount() {
    if (this.props.onLoadEnd) {
      this.props.onLoadEnd();
    }
  }

  render() {
    return this.props.children;
  }
}

FallbackWithCallbacks.propTypes = {
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
  children: PropTypes.node,
};

const Suspense = ({
  onLoadStart, onLoadEnd, onError, fallback, children,
}) => (
  <ErrorBoundary
    onCatchError={(caughtError) => {
      if (onError) {
        onError(caughtError);
      }
    }}
  >
    <React.Suspense
      fallback={(
        <FallbackWithCallbacks onLoadStart={onLoadStart} onLoadEnd={onLoadEnd}>
          {fallback}
        </FallbackWithCallbacks>
        )}
    >
      {children}
    </React.Suspense>
  </ErrorBoundary>
);

export default Suspense;
