import React, { useContext, useState, useRef } from 'react';
import ContentContainer from 'terra-content-container';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import DemographicsBanner from 'terra-demographics-banner';

import ApplicationConceptContext from 'terra-application/lib/application-concept/ApplicationConceptContext';

import PageLayoutContainer from '../../../application-page/PageLayoutContainer';
import ChartSummaryPage from './clinical-demo/pages/ChartSummaryPage';
import OrdersPage from './clinical-demo/pages/OrdersPage';
import DocumentsLayout from './clinical-demo/layouts/DocumentsLayout';

window.TEST_APP_TIMEOUT = 3000;

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const ClinicalDemoAppNavigation = () => {
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
      pageContent = (
        <PageLayoutContainer>
          <ChartSummaryPage />
        </PageLayoutContainer>
      );
      break;
    case 'page_1':
      pageContent = (
        <PageLayoutContainer>
          <OrdersPage />
        </PageLayoutContainer>
      );
      break;
    default:
      pageContent = <DocumentsLayout />;
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

const ClinicalDemoAppIndex = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);
  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ApplicationConceptContext.Provider
        value={{
          renderPageConceptView: () => (
            <div style={{ borderTop: '1px solid #002238' }}>
              <DemographicsBanner
                age="25 Years"
                dateOfBirth="May 9, 1993"
                gender="Male"
                personName="Johnathon Doe"
                preferredFirstName="John"
              />
            </div>
          ),
          renderModalConceptView: () => (
            <DemographicsBanner
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName="Johnathon (Modal) Doe"
              preferredFirstName="John"
              deceasedDate="June 16, 2020"
            />
          ),
        }}
      >
        <ClinicalDemoAppNavigation />
      </ApplicationConceptContext.Provider>
    </ApplicationBase>
  );
};

export default ClinicalDemoAppIndex;
