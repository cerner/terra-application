import React from 'react';

import NavigationItemContext from '../navigation-item/NavigationItemContext';

import ActiveMainContext from '../main-container/ActiveMainContext';

/**
 * A custom hook used to retrieve data related to the current active main page.
 * @returns The data related to the current active page within an application,
 * scoped to the current navigation branch.
 */
const useActiveMainPage = () => {
  const activeMain = React.useContext(ActiveMainContext);
  const navigationItem = React.useContext(NavigationItemContext);

  const [lastActiveMainPage, setLastActiveMainPage] = React.useState();

  React.useEffect(() => {
    // We compare the set of navigation keys present where this hook is currently
    // rendered against the set of navigation keys related to the active page.
    //
    // If a subset of keys match, we know that the active main page is within
    // the same navigation branch as this hook's implementer and thus notify them
    // of the change through our state update.
    //
    // If the key sets do not match, the active main page must be in a
    // separate navigation branch, so the implementer of this hook does not get
    // notified of this change.
    const matchingNavigationKeyPath = navigationItem.navigationKeys.filter((hookKey, index) => (
      activeMain && activeMain.parentNavigationKeys[index] === hookKey
    ));

    if (matchingNavigationKeyPath.length === navigationItem.navigationKeys.length) {
      setLastActiveMainPage(activeMain);
    }
  }, [navigationItem.navigationKeys, activeMain]);

  return lastActiveMainPage;
};

export default useActiveMainPage;
