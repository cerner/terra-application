import React from 'react';

import { SecondaryNavigationLayout, NavigationItem } from '../../../../layouts';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import NotAPage from '../shared/NotAPage';

const NavCLayout = () => {
  const [navigationState, setNavigationState] = React.useState('nav-C-1');

  React.useEffect(() => {
    function handleEventNavigation(event) {
      setNavigationState(event.detail);
    }

    window.addEventListener('terra-application-demo.nav-c.navigate', handleEventNavigation);

    return () => {
      window.removeEventListener('terra-application-demo.nav-c.navigate', handleEventNavigation);
    };
  });

  return (
    <SecondaryNavigationLayout
      id="nav-c-layout"
      label="Nav C"
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
      renderNavigationFallback={() => <div>404</div>}
    >
      <NavigationItem
        navigationKey="nav-C-1"
        label="Nav C-1 Page 1"
        renderPage={() => (<Page1 />)}
      />
      <NavigationItem
        navigationKey="nav-C-2"
        label="Nav C-2 Page 2"
        renderPage={() => (<Page2 />)}
      />
      <NavigationItem
        navigationKey="nav-C-3"
        label="Nav C-3 Page 3"
        renderPage={() => (<Page3 />)}
      />
      <NavigationItem
        navigationKey="nav-C-4"
        label="Nav C-4 Page 4"
        renderPage={() => <Page4 />}
      />
      <NavigationItem
        navigationKey="nav-C-5"
        label="Nav C-5 Page 5"
        renderPage={() => <Page5 />}
      />
      <NavigationItem
        navigationKey="nav-C-6"
        label="Nav C-6 Not A Page"
      >
        <NotAPage />
      </NavigationItem>
    </SecondaryNavigationLayout>
  );
};

export default NavCLayout;
