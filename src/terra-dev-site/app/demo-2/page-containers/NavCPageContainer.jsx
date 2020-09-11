import React from 'react';

import NavigationPageContainer, { NavigationItem } from '../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const NavCPageContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-C-1', 'nav-C-2', 'nav-C-3']);

  return (
    <NavigationPageContainer
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationItem
        navigationKey="nav-C-1"
        text="Nav C-1: Page 1"
        render={() => <Page1 />}
      />
      <NavigationItem
        navigationKey="nav-C-2"
        text="Nav C-2: Page 2"
        render={() => <Page2 />}
      />
      <NavigationItem
        navigationKey="nav-C-3"
        text="Nav C-3: Page 3"
        render={() => <Page3 />}
      />
    </NavigationPageContainer>
  );
};

export default NavCPageContainer;
