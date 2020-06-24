import React from 'react';

import SideNavigationPageContainer, { SideNavPage } from '../../../../../application-page/SideNavigationPageContainer';

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
      <SideNavPage
        key="summary"
        description="Chart Review"
        cleanupRenderIfPossible
        render={() => (
          <ChartReviewPage />
        )}
      />
      <SideNavPage
        key="orders"
        description="Order Profile"
        render={() => (
          <OrderProfilePage />
        )}
      />
      <SideNavPage
        key="allergies"
        description="Allergy Profile"
      >
        <AllergyProfilePage />
      </SideNavPage>
    </SideNavigationPageContainer>
  );
};

export default DocumentPageContainer;
