import React, { useState, useRef } from 'react';
import ContentContainer from 'terra-content-container';

import ApplicationNavigation from 'terra-application/lib/application-navigation';
import ApplicationConceptContext from 'terra-application/lib/application-concept/ApplicationConceptContext';

import ReviewLayout from '../layouts/ReviewLayout';
import OrderLayout from '../layouts/OrderLayout';
import DocumentLayout from '../layouts/DocumentLayout';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const ClinicalDemoNavigation = () => {
  const [activeNavItem, setActiveNavItem] = useState('page_0');
  const [loggedOut, setLoggedOut] = useState(false);

  const navigationItemsRef = useRef([{
    key: 'page_0',
    text: 'Review',
  }, {
    key: 'page_1',
    text: 'Order',
  }, {
    key: 'page_2',
    text: 'Document',
  }]);

  if (loggedOut) {
    return (
      <div>
        <p>Logged Out</p>
        <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
      </div>
    );
  }

  let pageContent;
  switch (activeNavItem) {
    case 'page_0':
      pageContent = <ReviewLayout />;
      break;
    case 'page_1':
      pageContent = <OrderLayout />;
      break;
    default:
      pageContent = <DocumentLayout />;
      break;
  }

  return (
    <ApplicationNavigation
      titleConfig={{
        title: 'Powerchart Touch',
        subline: '(Not Really)',
      }}
      userConfig={userConfig}
      navigationItems={navigationItemsRef.current}
      activeNavigationItemKey={activeNavItem}
      onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
      onSelectLogout={() => {
        setLoggedOut(true);
      }}
    >
      <ApplicationConceptContext.Consumer>
        {(applicationConcept) => (
          <ContentContainer
            header={applicationConcept.renderPageConceptView()}
            fill
          >
            {pageContent}
          </ContentContainer>
        )}
      </ApplicationConceptContext.Consumer>
    </ApplicationNavigation>
  );
};

export default ClinicalDemoNavigation;
