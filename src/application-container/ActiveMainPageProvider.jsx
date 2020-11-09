import React from 'react';
import PropTypes from 'prop-types';

import ActiveMainPageContext from './ActiveMainPageContext';

const propTypes = {
  children: PropTypes.node,
};

const ActiveMainPageProvider = ({ children }) => {
  const [activeMainPage, setActiveMainPage] = React.useState({});

  const activeMainPageContextValue = React.useMemo(() => ({
    setActiveMainPage: (pageKey, pageDescription, pageMetaData, parentNavigationKeys) => {
      if (pageKey === activeMainPage.pageKey && pageDescription === activeMainPage.pageDescription && pageMetaData === activeMainPage.pageMetaData && parentNavigationKeys === activeMainPage.parentNavigationKeys) {
        return;
      }

      setActiveMainPage({
        pageKey, pageDescription, pageMetaData, parentNavigationKeys,
      });
    },
    parentNavigationKeys: activeMainPage.parentNavigationKeys,
    pageKey: activeMainPage.pageKey,
    pageDescription: activeMainPage.pageDescription,
    pageMetaData: activeMainPage.pageMetaData,
  }), [activeMainPage.pageKey, activeMainPage.pageTitle, activeMainPage.pageMetaData, activeMainPage.parentNavigationKeys]);

  return (
    <ActiveMainPageContext.Provider value={activeMainPageContextValue}>
      {children}
    </ActiveMainPageContext.Provider>
  );
};

ActiveMainPageProvider.propTypes = propTypes;

export default ActiveMainPageProvider;
