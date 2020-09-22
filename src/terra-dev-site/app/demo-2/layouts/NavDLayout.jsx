import React from 'react';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import PageContainer from '../../../../page-container/PageContainer';
import SecondaryNavigationLayout, { NavigationGroup, NavigationItem } from '../../../../application-layouts/SecondaryNavigationLayout';
import useNavigationState from '../../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const NavDLayout = () => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-D-1', 'nav-D-2', 'nav-D-3', 'nav-D-4', 'nav-D-5', 'nav-D-6']);

  return (
    <SecondaryNavigationLayout
      enableWorkspace
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationGroup
        text="Group 1"
      >
        <NavigationItem
          navigationKey="nav-D-1"
          text="Nav D-1 Page 1"
          render={() => (
            <PageContainer>
              <Page1 />
            </PageContainer>
          )}
        />
        <NavigationItem
          navigationKey="nav-D-2"
          text="Nav D-2 Page 2"
          render={() => (
            <PageContainer>
              <Page2 />
            </PageContainer>
          )}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 2"
      >
        <NavigationItem
          navigationKey="nav-D-3"
          text="Nav D-3 Page 3"
          render={() => (
            <PageContainer>
              <Page3 />
            </PageContainer>
          )}
        />
        <NavigationItem
          navigationKey="nav-D-4"
          text="Nav D-4 Inline Page"
          render={() => (
            <PageContainer>
              <ApplicationPage title="Inline Page">
                <div style={{ padding: '1rem' }}>
                  Page content here...
                </div>
              </ApplicationPage>
            </PageContainer>
          )}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 3"
      >
        <NavigationGroup
          text="Nested Group"
        >
          <NavigationItem
            navigationKey="nav-D-5"
            text="Nav D-5 Inline Page In Nested Group"
            render={() => (
              <PageContainer>
                <ApplicationPage title="Inline Page In Nested Group">
                  <div style={{ padding: '1rem' }}>
                    Page content here...
                  </div>
                </ApplicationPage>
              </PageContainer>
            )}
          />
        </NavigationGroup>
      </NavigationGroup>
      <NavigationItem
        navigationKey="nav-D-6"
        text="Nav D-6 Inline Page Not In Group"
        render={() => (
          <PageContainer>
            <ApplicationPage title="Inline Page Not In Group">
              <div style={{ padding: '1rem' }}>
                Page content here...
              </div>
            </ApplicationPage>
          </PageContainer>
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavDLayout;
