import React from 'react';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import NavigationPageContainer, { NavigationGroup, NavigationItem } from '../../../../page-container/NavigationPageContainer';
import useNavigationState from '../../../../navigation/useNavigationState';

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
      activeNavigationKey={navigationState}
      onSelectNavigationItem={(key) => { setNavigationState(key); }}
    >
      <NavigationGroup
        text="Group 1"
      >
        <NavigationItem
          navigationKey="billing-summary"
          text="Chart Review"
          render={() => <ChartReviewPage />}
        />
        <NavigationItem
          navigationKey="billing-orders"
          text="Order Profile"
          render={() => <OrderProfilePage />}
        />
      </NavigationGroup>
      <NavigationGroup
        text="Group 2"
      >
        <NavigationItem
          navigationKey="billing-allergies"
          text="Allergy Profile"
          render={() => <AllergyProfilePage />}
        />
        <NavigationItem
          navigationKey="billing-inline-page"
          text="Inline Page"
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
        text="Group 3"
      >
        <NavigationGroup
          text="Group 3`"
        >
          <NavigationGroup
            text="Group 3``"
          >
            <NavigationItem
              navigationKey="billing-inline-page-nested"
              text="Inline Page In Nested Group"
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
      <NavigationItem
        navigationKey="billing-inline-page-not-in-group"
        text="Inline Page Not In Group"
        render={() => (
          <ApplicationPage title="Inline Page Not In Group">
            <div style={{ padding: '1rem' }}>
              Page content here...
            </div>
          </ApplicationPage>
        )}
      />
      {/* {dynamicPages.map((index) => (
        <NavigationItem
          navigationKey={`dynamic-page-${index}`}
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

export default BillingPageContainer;
