import React from 'react';

import PagePortalContext from '../private/PagePortalContext';
import PageContainerPortalManager from '../private/_PageContainerPortalManager';

const BasePageContainer = ({
  children, isMain,
}) => {
  const pageLayoutContainerRef = React.useRef();

  const [isInitialized, setIsInitialized] = React.useState();

  const pagePortalContextValue = React.useMemo(() => ({
    nodeManager: new PageContainerPortalManager(pageLayoutContainerRef),
    isMain,
  }), [isMain]);

  React.useLayoutEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <div
      ref={pageLayoutContainerRef}
      style={{
        height: '100%', width: '100%', position: 'relative', overflow: 'auto',
      }}
    >
      <PagePortalContext.Provider value={pagePortalContextValue}>
        {isInitialized && children}
      </PagePortalContext.Provider>
    </div>
  );
};

export default BasePageContainer;
