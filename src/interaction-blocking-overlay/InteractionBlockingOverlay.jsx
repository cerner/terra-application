import React from 'react';
import PropTypes from 'prop-types';

import LayerPortal from '../layers/LayerPortal';
import UnsavedChangesPrompt from '../unsaved-changes-prompt';

const propTypes = {
  /**
   * The string description for the overlay presentation.
   */
  label: PropTypes.string,
};

const InteractionBlockingOverlay = ({ label }) => {
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
        aria-label={label}
        tabIndex="-1"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: isVisible ? 'rgba(255,255,255,0.5)' : 'clear',
        }}
      />
      <UnsavedChangesPrompt description={label} />
    </LayerPortal>
  );
};

InteractionBlockingOverlay.propTypes = propTypes;

export default InteractionBlockingOverlay;
