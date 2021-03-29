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
          titleConfig={{ title: 'Primary Navigation Layout Test 1' }}
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
            onSelect: () => {
              console.log('Custom Utility Item selected');
            },
          }]}
          onSelectUtilityItem={(itemKey) => {
            if (itemKey === 'custom-utility-item') {
              console.log('Custom Utility Item selected');
            }
          }}
          onSelectHelp={() => {}}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          renderNavigationFallback={() => <div>404</div>}
        >
          <NavigationItem
            navigationKey="1"
            label="Nav 1"
          >
            <p>Content 1</p>
          </NavigationItem>
          <NavigationItem
            navigationKey="2"
            label="Nav 2"
          >
            <p>Content 2</p>
          </NavigationItem>
          <NavigationItem
            navigationKey="3"
            label="Nav 3"
          >
            <p>Content 3</p>
          </NavigationItem>
        </PrimaryNavigationLayout>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout1;
