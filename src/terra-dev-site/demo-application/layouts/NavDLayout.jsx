import React from 'react';

import ApplicationPage from '../../../application-page/ApplicationPage';
import SecondaryNavigationLayout, { NavigationGroup, NavigationItem } from '../../../application-layouts/SecondaryNavigationLayout';
import useNavigationState from '../../../navigation/useNavigationState';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

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
          renderPage={() => <Page1 />}
        />
        <NavigationItem
          navigationKey="nav-D-2"
          text="Nav D-2 Page 2"
          renderPage={() => <Page2 />}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 2"
      >
        <NavigationItem
          navigationKey="nav-D-3"
          text="Nav D-3 Page 3"
          renderPage={() => <Page3 />}
        />
        <NavigationItem
          navigationKey="nav-D-4"
          text="Nav D-4 Page 4"
          renderPage={() => <Page4 />}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 3"
      >
        <NavigationItem
          navigationKey="nav-D-5"
          text="Nav D-5 Page In Group"
          renderPage={() => (
            <ApplicationPage title="Page In Group">
              <div style={{ padding: '1rem' }}>
                Page content here...
              </div>
            </ApplicationPage>
          )}
        />
        <NavigationGroup
          text="Nested Group"
        >
          <NavigationItem
            navigationKey="nav-D-6"
            text="Nav D-6 Page In Nested Group"
            renderPage={() => (
              <ApplicationPage title="Page In Nested Group">
                <div style={{ padding: '1rem' }}>
                  Page content here...
                </div>
              </ApplicationPage>
            )}
          />
        </NavigationGroup>
      </NavigationGroup>
      <NavigationItem
        navigationKey="nav-D-7"
        text="Nav D-7 Page Not In Group"
        renderPage={() => (
          <ApplicationPage title="Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
    </SecondaryNavigationLayout>
  );
};

export default NavDLayout;
