import React from 'react';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationItem } from '../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../navigation/useNavigationState';

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
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationItem
        navigationKey="document-summary"
        text="Chart Review"
        render={() => <ChartReviewPage />}
      />
      <NavigationItem
        navigationKey="document-orders"
        text="Order Profile"
        render={() => <OrderProfilePage />}
      />
      <NavigationItem
        navigationKey="document-allergies"
        text="Allergy Profile"
        render={() => <AllergyProfilePage />}
      />
      <NavigationItem
        navigationKey="document-inline-page"
        text="Inline Page"
        render={() => (
          <ApplicationPage title="Inline Page">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
      {/* {dynamicPages.map((index) => (
        <NavigationItem
          key={`document-dynamic-page-${index}`}
          navigationKey={`dynamic-page-${index}`}
          text={`Page ${index}`}
          render={() => (
            <ChartReviewPage key={index} />
          )}
        />
      ))} */}
    </NavigationPageContainer>
  );
};

export default DocumentPageContainer;
