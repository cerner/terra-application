import React from 'react';

import SecondaryNavigationLayout, { NavigationItem } from '../../../../application-layouts/SecondaryNavigationLayout';
import PageContainer from '../../../../application-page/PageContainer';
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
        render={() => (
          <PageContainer>
            <Page1 />
          </PageContainer>
        )}
      />
      <NavigationItem
        navigationKey="nav-C-2"
        text="Nav C-2 Page 2"
        render={() => (
          <PageContainer>
            <Page2 />
          </PageContainer>
        )}
      />
      <NavigationItem
        navigationKey="nav-C-3"
        text="Nav C-3 Page 3"
        render={() => (
          <PageContainer>
            <Page3 />
          </PageContainer>
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavCLayout;
