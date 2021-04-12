import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import ApplicationBase from '../../../application-base';
import ApplicationContainer from '../../../application-container';
import PrimaryNavigationLayout, { NavigationItem } from '../../../primary-navigation-layout';

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
            title: 'PrimaryNavigationLayout Test 1',
            subline: 'Dense Content w/ NavigationItems',
          }}
          extensionItems={[{
            key: 'extension-1',
            icon: <IconSearch />,
            text: 'Extension 1',
          }, {
            key: 'extension-2',
            icon: <IconSearch />,
            text: 'Extension 2',
          }, {
            key: 'extension-3',
            icon: <IconSearch />,
            text: 'Extension 3',
          }, {
            key: 'extension-4',
            icon: <IconSearch />,
            text: 'Extension 4',
          }, {
            key: 'extension-5',
            icon: <IconSearch />,
            text: 'Extension 5',
          }, {
            key: 'extension6',
            icon: <IconSearch />,
            text: 'Extension 6',
          }]}
          onSelectExtensionItem={() => {}}
          utilityItems={[{
            key: 'utility-1',
            text: 'Utility 1',
          }, {
            key: 'utility-2',
            text: 'Utility 2',
          }, {
            key: 'utility-3',
            text: 'Utility 3',
          }, {
            key: 'utility-4',
            text: 'Utility 4',
          }]}
          onSelectUtilityItem={() => {}}
          onSelectHelp={() => {}}
          onSelectSettings={() => {}}
          onSelectLogout={() => {}}
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
          >
            <main>
              <p>Nav 1 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
          >
            <main>
              <p>Nav 2 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
          >
            <main>
              <p>Nav 3 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="4"
            label="Nav 4"
          >
            <main>
              <p>Nav 4 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="5"
            label="Nav 5"
          >
            <main>
              <p>Nav 5 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="6"
            label="Nav 6"
          >
            <main>
              <p>Nav 6 Content</p>
            </main>
          </NavigationItem>
          <NavigationItem
            navigationKey="7"
            label="Nav 7"
          >
            <main>
              <p>Nav 7 Content</p>
            </main>
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout1;
