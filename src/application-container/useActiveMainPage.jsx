import React from 'react';

import NavigationItemContext from '../layouts/shared/NavigationItemContext';

import ActiveMainPageContext from './private/active-main-page/ActiveMainPageContext';

const useActiveMainPage = () => {
  const activeMainPage = React.useContext(ActiveMainPageContext);
  const [lastActiveMainPage, setLastActiveMainPage] = React.useState();

  React.useEffect(() => {
    setLastActiveMainPage(activeMainPage);
  }, [activeMainPage, lastActiveMainPage]);

  return lastActiveMainPage;
};

export default useActiveMainPage;
