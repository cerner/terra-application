import React from 'react';

import SecondaryNavigationLayout, { NavigationItem } from '../../../../application-layouts/SecondaryNavigationLayout';
import useNavigationState from '../../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

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
        text="Nav C-4 Not A Page"
        render={() => (
          <h2>Not a Page</h2>
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavCLayout;
