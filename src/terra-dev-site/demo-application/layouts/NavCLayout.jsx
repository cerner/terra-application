import React from 'react';

import { SecondaryNavigationLayout, NavigationItem } from '../../../layouts';
import useNavigationState from '../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import NotAPage from '../shared/NotAPage';

const NavCLayout = () => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-C-1', 'nav-C-2', 'nav-C-3']);

  return (
    <SecondaryNavigationLayout
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationItem
        navigationKey="nav-C-1"
        text="Nav C-1 Page 1"
        renderPage={() => (<Page1 />)}
      />
      <NavigationItem
        navigationKey="nav-C-2"
        text="Nav C-2 Page 2"
        renderPage={() => (<Page2 />)}
      />
      <NavigationItem
        navigationKey="nav-C-3"
        text="Nav C-3 Page 3"
        renderPage={() => (<Page3 />)}
      />
      <NavigationItem
        navigationKey="nav-C-4"
        text="Nav C-4 Page 4"
        renderPage={() => <Page4 />}
      />
      <NavigationItem
        navigationKey="nav-C-5"
        text="Nav C-5 Not A Page"
        render={() => (
          <NotAPage />
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavCLayout;
