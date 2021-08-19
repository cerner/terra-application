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
            renderPage={() => {
              console.log('render nav item 1');
              return <TestPage index={1} testLabel="Nav 1 Test Page" unique="1" />;
            }}
          />
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
            renderPage={() => {
              console.log('render nav item 2');
              return <TestPage index={1} testLabel="Nav 2 Test Page" unique="2" />;
            }}
          />
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
            renderPage={() => {
              console.log('render nav item 3');
              return <TestPage index={1} testLabel="Nav 3 Test Page" unique="3" />;
            }}
          />
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout1;
