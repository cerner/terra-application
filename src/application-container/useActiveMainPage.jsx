import React from 'react';

import NavigationItemContext from '../layouts/shared/NavigationItemContext';

import ActiveMainPageContext from './private/active-main-page/ActiveMainPageContext';

const useActiveMainPage = () => {
  const activeMainPage = React.useContext(ActiveMainPageContext);
  
  return activeMainPage;
};

export default useActiveMainPage;
