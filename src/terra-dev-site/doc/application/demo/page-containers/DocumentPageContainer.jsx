import React from 'react';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import SecondaryNavigationPageContainer, { NavigationPage } from '../../../../../application-page/SecondaryNavigationPageContainer';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const DocumentPageContainer = () => {
  const [activePageKey, setActivePageKey] = React.useState();

  const dynamicPages = [];

  for (let i = 0; i < 0; i++) {
    dynamicPages.push(i);
  }

  return (
    <SecondaryNavigationPageContainer
      enableWorkspace
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
      {dynamicPages.map((index) => (
        <NavigationPage
          preload
          key={`dynamic-page-${index}`}
          pageKey={`dynamic-page-${index}`}
          description={`Page ${index}`}
          render={() => (
            <ChartReviewPage key={index} />
          )}
        />
      ))}
    </SecondaryNavigationPageContainer>
  );
};

export default DocumentPageContainer;
