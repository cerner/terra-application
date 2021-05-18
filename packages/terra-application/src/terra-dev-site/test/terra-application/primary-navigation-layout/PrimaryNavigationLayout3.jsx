import React from 'react';

import ApplicationBase from '../../../../application-base';
import ApplicationContainer from '../../../../application-container';
import PrimaryNavigationLayout from '../../../../primary-navigation-layout';

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
