import React from 'react';

import ApplicationBase from '../../../../application-base';
import ApplicationContainer from '../../../../application-container';
import PrimaryNavigationLayout from '../../../../primary-navigation-layout';

const PrimaryNavigationLayout2 = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContainer>
      <PrimaryNavigationLayout
        id="primary-nav-test-2"
        titleConfig={{
          title: 'PrimaryNavigationLayout Test 2',
          subline: 'renderLayout content',
        }}
        renderLayout={() => (
          <main>
            <p>renderLayout content</p>
          </main>
        )}
      />
    </ApplicationContainer>
  </ApplicationBase>
);

export default PrimaryNavigationLayout2;
