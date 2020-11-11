import React from 'react';

import NavigationItemContext from '../layouts/shared/NavigationItemContext';

import ActiveMainPageContext from './private/active-main-page/ActiveMainPageContext';

const useActiveMainPage = () => {
  const activeMainPage = React.useContext(ActiveMainPageContext);
  const navigationItem = React.useContext(NavigationItemContext);

  const [lastActiveMainPage, setLastActiveMainPage] = React.useState();

  React.useEffect(() => {
    /**
     * Updates to the active page will only be communicated when the consumer of the hook is
     * part of an active navigation branch.
     */
    if (!navigationItem.isActive) {
      return;
    }

    if (!activeMainPage) {
      setLastActiveMainPage(undefined);
      return;
    }

    const matchingNavigationKeyPath = navigationItem.navigationKeys.filter((hookKey, index) => (activeMainPage?.parentNavigationKeys || [])[index] === hookKey);

    if (matchingNavigationKeyPath.length !== navigationItem.navigationKeys.length) {
      setLastActiveMainPage(undefined);
      return;
    }

    setLastActiveMainPage(activeMainPage);
  }, [navigationItem.isActive, navigationItem.navigationKeys, activeMainPage, lastActiveMainPage]);

  return lastActiveMainPage;
};

export default useActiveMainPage;
