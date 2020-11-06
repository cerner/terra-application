import React from 'react';

import NavigationItemContext from '../layouts/shared/NavigationItemContext';
import EventEmitter from '../utils/event-emitter';

const useActiveMainPage = () => {
  const navigationItem = React.useContext(NavigationItemContext);

  const [activePageData, setActivePageData] = React.useState({});

  React.useEffect(() => {
    if (!navigationItem.isActive) {
      return undefined;
    }

    const recordActivatedPage = (pageData) => {
      if (pageData.pageKey !== activePageData.pageKey || pageData.pageDescription !== activePageData.pageDescription || pageData.pageMetaData !== activePageData.pageMetaData) {
        setActivePageData({
          pageKey: pageData.pageKey,
          pageDescription: pageData.pageDescription,
          pageMetaData: pageData.pageMetaData,
        });
      }
    };

    EventEmitter.on('terra-application.main-page-activated', recordActivatedPage);

    return () => {
      EventEmitter.off('terra-application.main-page-activated', recordActivatedPage);
    };
  }, [activePageData, navigationItem.isActive]);

  return activePageData;
};

export default useActiveMainPage;
