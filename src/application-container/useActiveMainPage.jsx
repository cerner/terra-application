import React from 'react';

import NavigationItemContext from '../layouts/shared/NavigationItemContext';

import ActiveMainPageContext from './ActiveMainPageContext';

const useActiveMainPage = () => {
  const activeMainPage = React.useContext(ActiveMainPageContext);
  const navigationItem = React.useContext(NavigationItemContext);

  const [lastActiveMainPage, setLastActiveMainPage] = React.useState();

  if (!activeMainPage) {
    throw new Error('[terra-application] useActiveMainPage cannot be used outside of the ApplicationContainer');
  }

  React.useEffect(() => {
    const matchingNavigationKeyPath = navigationItem.navigationKeys.filter((hookKey, index) => (activeMainPage.parentNavigationKeys || [])[index] === hookKey);

    if (matchingNavigationKeyPath.length !== navigationItem.navigationKeys.length) {
      return;
    }

    setLastActiveMainPage(activeMainPage);
  }, [navigationItem.navigationKeys, activeMainPage, lastActiveMainPage]);

  return lastActiveMainPage;
};

export default useActiveMainPage;
