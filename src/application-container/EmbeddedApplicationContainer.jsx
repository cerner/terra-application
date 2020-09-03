import React from 'react';

import ApplicationContainer from './ApplicationContainer';
import useSkipToLinks from './useSkipToLinks';

const EmbeddedApplicationContainer = ({ children }) => {
  const { SkipToLinksProvider, SkipToLinks } = useSkipToLinks();

  return (
    <div
      style={{ height: '100%', overflow: 'hidden', position: 'relative' }}
    >
      <SkipToLinks />
      <SkipToLinksProvider>
        <ApplicationContainer>
          {children}
        </ApplicationContainer>
      </SkipToLinksProvider>
    </div>
  );
};

export default EmbeddedApplicationContainer;
