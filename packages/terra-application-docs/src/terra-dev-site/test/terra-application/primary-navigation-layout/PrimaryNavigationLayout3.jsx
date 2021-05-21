import React from 'react';
import IconPanelRight from 'terra-icon/lib/icon/IconPanelRight';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import ApplicationContainer from '@cerner/terra-application/lib/application-container';
import PrimaryNavigationLayout from '@cerner/terra-application/lib/primary-navigation-layout';
import LayoutActionsContext from '@cerner/terra-application/lib/shared/LayoutActionsContext';

import TestPage from '../shared/TestPage';

const PrimaryNavigationLayout3 = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <LayoutActionsContext.Provider
        value={{
          actions: [{
            key: '1',
            label: 'Layout Action 1',
            onSelect: () => { console.log('layout action 1'); },
            icon: <IconPanelRight />,
          }],
        }}
      >
        <PrimaryNavigationLayout
          id="primary-nav-test-3"
          titleConfig={{
            title: 'PrimaryNavigationLayout Test 3',
            subline: 'renderPage content',
          }}
          renderPage={() => (
            <TestPage index={1} testLabel="Test Page" />
          )}
        />
      </LayoutActionsContext.Provider>
    </ApplicationContainer>
  </ApplicationBase>
);

export default PrimaryNavigationLayout3;
