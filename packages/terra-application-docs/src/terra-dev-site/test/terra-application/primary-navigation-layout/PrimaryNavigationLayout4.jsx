import React from 'react';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import ApplicationContainer from '@cerner/terra-application/lib/application-container';
import PrimaryNavigationLayout, { NavigationItem } from '@cerner/terra-application/lib/primary-navigation-layout';

import TestPage from '../shared/TestPage';

const PrimaryNavigationLayout1 = () => {
  const [
    activeNavigationItemKey,
    setActiveNavigationItemKey,
  ] = React.useState('1');

  return (
    <ApplicationBase locale="en-US">
      <ApplicationContainer>
        <PrimaryNavigationLayout
          id="primary-nav-test-1"
          titleConfig={{
            title: 'PrimaryNavigationLayout Test 4',
            subline: 'NavigationItems w/ Pages',
          }}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          renderNavigationFallback={() => <div>Navigation Fallback</div>}
          userConfig={{
            name: 'Demo User',
            detail: 'demouser',
          }}
        >
          <NavigationItem
            navigationKey="1"
            label="Nav 1"
            renderPage={() => (
              <TestPage index={0} testLabel="Nav 1 Test Page" />
            )}
          />
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
            renderPage={() => (
              <TestPage index={0} testLabel="Nav 2 Test Page" />
            )}
          />
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
            renderPage={() => (
              <TestPage index={0} testLabel="Nav 3 Test Page" />
            )}
          />
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout1;
