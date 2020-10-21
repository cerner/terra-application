import React from 'react';
import PropTypes from 'prop-types';

import LayerPortal from '../layers/LayerPortal';
import NavigationPrompt from '../navigation-prompt';

const propTypes = {
  /**
   * The string description for the overlay presentation.
   */
  description: PropTypes.string,
};

const ApplicationBlockingOverlay = ({ description }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <LayerPortal type="blocking-overlay">
      <div
        aria-label={description}
        tabIndex="-1"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: isVisible ? 'rgba(255,255,255,0.5)' : 'clear',
        }}
      />
      <NavigationPrompt description={description} />
    </LayerPortal>
  );
};

ApplicationBlockingOverlay.propTypes = propTypes;

export default ApplicationBlockingOverlay;
