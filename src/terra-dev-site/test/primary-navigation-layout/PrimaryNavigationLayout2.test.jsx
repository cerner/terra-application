import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import ApplicationBase from '../../../application-base';
import ApplicationContainer from '../../../application-container';
import PrimaryNavigationLayout from '../../../primary-navigation-layout';

const PrimaryNavigationLayout2 = () => {
  const [
    activeNavigationItemKey,
    setActiveNavigationItemKey,
  ] = React.useState('1');

  return (
    <ApplicationBase locale="en-US">
      <ApplicationContainer>
        <PrimaryNavigationLayout
          id="primary-nav-test-2"
          titleConfig={{ title: 'Primary Navigation Layout Test 2', subline: 'renderLayout test' }}
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
          onSelectHelp={() => {}}
          activeNavigationKey={activeNavigationItemKey}
          onSelectNavigationItem={(key) => { setActiveNavigationItemKey(key); }}
          renderLayout={() => <p>Layout Content (rendered with `renderLayout` prop)</p>}
        />
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default PrimaryNavigationLayout2;
