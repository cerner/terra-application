import React from 'react';

import SideNavLayout, { SideNavPage } from '../../../../../application-page/SideNavLayout';

import ChartReviewPage from '../pages/ChartReviewPage';
import OrderProfilePage from '../pages/OrderProfilePage';
import AllergyProfilePage from '../pages/AllergyProfilePage';

const DocumentLayout = () => {
  const [activePageKey, setActivePageKey] = React.useState();

  return (
    <SideNavLayout
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
    </SideNavLayout>
  );
};

export default DocumentLayout;
