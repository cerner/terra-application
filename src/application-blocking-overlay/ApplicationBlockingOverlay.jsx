import React from 'react';

import LayerPortal from '../layers/LayerPortal';
import NavigationPrompt from '../navigation-prompt';

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

export default ApplicationBlockingOverlay;
