import React, { useState, useRef } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import NavigationApplicationContainer, { NavigationPageContainer } from '../../../../../application-container/NavigationApplicationContainer';

import ReviewPageContainer from '../page-containers/ReviewPageContainer';
import OrderPageContainer from '../page-containers/OrderPageContainer';
import DocumentPageContainer from '../page-containers/DocumentPageContainer';
import PatientConceptProvider from '../shared/PatientConceptProvider';
import ApplicationModal from '../../../../../application-modal/ApplicationModal';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const ClinicalDemoAppContainer = () => {
  const [activeNavItem, setActiveNavItem] = useState('review');
  const [showPatientSearchModal, setShowPatientSearchModal] = useState(false);

  const [loggedOut, setLoggedOut] = useState(false);

  const navigationItemsRef = useRef([{
    key: 'review',
    text: 'Review',
  }, {
    key: 'order',
    text: 'Order',
  }, {
    key: 'document',
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

  return (
    <>
      <PatientConceptProvider>
        <NavigationApplicationContainer
          titleConfig={{
            title: '(Not) Powerchart Touch',
          }}
          userConfig={userConfig}
          navigationItems={navigationItemsRef.current}
          activeNavigationItemKey={activeNavItem}
          onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
          extensionItems={[{
            key: 'patient-search',
            icon: <IconSearch />,
            text: 'Patient Search',
          }]}
          onSelectExtensionItem={(itemKey) => {
            if (itemKey === 'patient-search') {
              setShowPatientSearchModal(true);
            }
          }}
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
        >
          <NavigationPageContainer
            pageKey="review"
            render={() => <ReviewPageContainer />}
          />
          <NavigationPageContainer
            pageKey="order"
            render={() => <OrderPageContainer />}
          />
          <NavigationPageContainer
            pageKey="document"
            render={() => <DocumentPageContainer />}
          />
        </NavigationApplicationContainer>
      </PatientConceptProvider>
      {showPatientSearchModal && (
        <ApplicationModal title="Patient Search" size="large" onRequestClose={() => { setShowPatientSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            Patient Search goes here...
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default ClinicalDemoAppContainer;
