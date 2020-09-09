import React from 'react';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationPage } from '../../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../../navigation/useNavigationState';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const DocumentPageContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['document-summary', 'document-orders', 'document-allergies', 'document-inline-page']);

  // const dynamicPages = [];
  // for (let i = 0; i < 0; i++) {
  //   dynamicPages.push(i);
  // }

  return (
    <NavigationPageContainer
      enableWorkspace
      activePageKey={navigationState}
      onRequestActivatePage={(key) => { setNavigationState(key); }}
    >
      <NavigationPage
        pageKey="document-summary"
        description="Chart Review"
        render={() => <ChartReviewPage />}
      />
      <NavigationPage
        pageKey="document-orders"
        description="Order Profile"
        render={() => <OrderProfilePage />}
      />
      <NavigationPage
        pageKey="document-allergies"
        description="Allergy Profile"
        render={() => <AllergyProfilePage />}
      />
      <NavigationPage
        pageKey="document-inline-page"
        description="Inline Page"
        render={() => (
          <ApplicationPage title="Inline Page">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
      {/* {dynamicPages.map((index) => (
        <NavigationPage
          preload
          key={`document-dynamic-page-${index}`}
          pageKey={`dynamic-page-${index}`}
          description={`Page ${index}`}
          render={() => (
            <ChartReviewPage key={index} />
          )}
        />
      ))} */}
    </NavigationPageContainer>
  );
};

export default DocumentPageContainer;
