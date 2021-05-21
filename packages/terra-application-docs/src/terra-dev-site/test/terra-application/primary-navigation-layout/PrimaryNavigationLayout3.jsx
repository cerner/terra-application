import React from 'react';

import ApplicationBase from '@cerner/terra-application/lib/application-base';
import ApplicationContainer from '@cerner/terra-application/lib/application-container';
import PrimaryNavigationLayout from '@cerner/terra-application/lib/primary-navigation-layout';

import TestPage from '../shared/TestPage';

const PrimaryNavigationLayout3 = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <PrimaryNavigationLayout
        id="primary-nav-test-3"
        titleConfig={{
          title: 'PrimaryNavigationLayout Test 3',
          subline: 'renderPage content',
        }}
        renderPage={() => (
          <TestPage index={0} testLabel="Test Page" />
        )}
      />
    </ApplicationContainer>
  </ApplicationBase>
);

export default PrimaryNavigationLayout3;
