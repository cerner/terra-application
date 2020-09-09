import React from 'react';

import ApplicationPage from '../../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationGroup, NavigationPage } from '../../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../../navigation/useNavigationState';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const BillingPageContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['billing-summary', 'billing-orders', 'billing-allergies', 'billing-inline-page', 'billing-inline-page-nested', 'billing-inline-page-not-in-group']);

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
      <NavigationGroup
        description="Group 1"
      >
        <NavigationPage
          pageKey="billing-summary"
          description="Chart Review"
          render={() => <ChartReviewPage />}
        />
        <NavigationPage
          pageKey="billing-orders"
          description="Order Profile"
          render={() => <OrderProfilePage />}
        />
      </NavigationGroup>
      <NavigationGroup
        description="Group 2"
      >
        <NavigationPage
          pageKey="billing-allergies"
          description="Allergy Profile"
          render={() => <AllergyProfilePage />}
        />
        <NavigationPage
          pageKey="billing-inline-page"
          description="Inline Page"
          render={() => (
            <ApplicationPage title="Inline Page">
              <div style={{ padding: '1rem' }}>
              Page content here...
              </div>
            </ApplicationPage>
          )}
        />
      </NavigationGroup>
      <NavigationGroup
        description="Group 3"
      >
        <NavigationGroup
          description="Group 3`"
        >
          <NavigationGroup
            description="Group 3``"
          >
            <NavigationPage
              pageKey="billing-inline-page-nested"
              description="Inline Page In Nested Group"
              render={() => (
                <ApplicationPage title="Inline Page In Nested Group">
                  <div style={{ padding: '1rem' }}>
                    Page content here...
                  </div>
                </ApplicationPage>
              )}
            />
          </NavigationGroup>
        </NavigationGroup>
      </NavigationGroup>
      <NavigationPage
        pageKey="billing-inline-page-not-in-group"
        description="Inline Page Not In Group"
        render={() => (
          <ApplicationPage title="Inline Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
      {/* {dynamicPages.map((index) => (
        <NavigationPage
          preload
          key={`dynamic-page-${index}`}
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

export default BillingPageContainer;
