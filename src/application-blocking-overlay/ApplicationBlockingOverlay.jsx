import React from 'react';
import Overlay from 'terra-overlay';

import NavigationPrompt from '../navigation-prompt';

const ApplicationBlockingOverlay = () => {
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
    <>
      <Overlay
        backgroundStyle={isVisible ? 'dark' : 'clear'}
        zIndex="9000"
        isOpen
      />
      <NavigationPrompt description="Order Profile" />
    </>
  );
};

export default ApplicationBlockingOverlay;
