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
          titleConfig={{ title: 'Primary Navigation Layout Test 1', subline: 'NavigationItem test' }}
          extensionItems={[{
            key: 'search',
            icon: <IconSearch />,
            text: 'Search',
          }]}
          onSelectExtensionItem={(itemKey) => {
            if (itemKey === 'search') {
              console.log('Search Extension Item selected');
            }
          }}
          utilityItems={[{
            key: 'custom-utility-item',
            text: 'Custom Utility Item',
          }]}
          onSelectUtilityItem={(itemKey) => {
            if (itemKey === 'custom-utility-item') {
              console.log('Custom Utility Item selected');
            }
          }}
          onSelectHelp={() => {
            console.log('Help selected');
          }}
          onSelectSettings={() => {
            console.log('Settings selected');
          }}
          onSelectLogout={() => {
            console.log('Logout selected');
          }}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          renderNavigationFallback={() => <div>404</div>}
          userConfig={{
            name: 'Demo User',
            detail: 'demouser',
          }}
        >
          <NavigationItem
            navigationKey="1"
            label="Nav 1"
          >
            <p>Nav 1 Content</p>
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
          >
            <p>Nav 2 Content</p>
          </NavigationItem>
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
          >
            <p>Nav 3 Content</p>
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout1;
