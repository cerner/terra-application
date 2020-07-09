import React from 'react';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationPage } from '../../../../../application-page/NavigationPageContainer';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const DocumentPageContainer = () => {
  const [activePageKey, setActivePageKey] = React.useState();

  return (
    <NavigationPageContainer
      activePageKey={activePageKey}
      onRequestActivatePage={(key) => { setActivePageKey(key); }}
    >
      <NavigationPage
        pageKey="summary"
        description="Chart Review"
        render={() => <ChartReviewPage />}
      />
      <NavigationPage
        pageKey="orders"
        description="Order Profile"
        render={() => <OrderProfilePage />}
      />
      <NavigationPage
        pageKey="allergies"
        description="Allergy Profile"
        render={() => <AllergyProfilePage />}
      />
      <NavigationPage
        pageKey="inline-page"
        description="Inline Page"
        render={() => (
          <ApplicationPage title="Inline Page">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
    </NavigationPageContainer>
  );
};

export default DocumentPageContainer;
