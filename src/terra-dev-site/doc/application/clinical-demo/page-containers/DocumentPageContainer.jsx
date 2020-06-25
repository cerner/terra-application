import React from 'react';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import SideNavigationPageContainer, { NavigationPage } from '../../../../../application-page/SideNavigationPageContainer';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const DocumentPageContainer = () => {
  const [activePageKey, setActivePageKey] = React.useState();

  return (
    <SideNavigationPageContainer
      activePageKey={activePageKey}
      onRequestActivatePage={(key) => { setActivePageKey(key); }}
    >
      <NavigationPage
        key="summary"
        description="Chart Review"
        cleanupRenderIfPossible
        render={() => (
          <ChartReviewPage />
        )}
      />
      <NavigationPage
        key="orders"
        description="Order Profile"
        render={() => (
          <OrderProfilePage />
        )}
      />
      <NavigationPage
        key="allergies"
        description="Allergy Profile"
      >
        <AllergyProfilePage />
      </NavigationPage>
      <NavigationPage
        key="inline-page"
        description="Inline Page"
        render={() => (
          <ApplicationPage title="Inline Page">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
    </SideNavigationPageContainer>
  );
};

export default DocumentPageContainer;
