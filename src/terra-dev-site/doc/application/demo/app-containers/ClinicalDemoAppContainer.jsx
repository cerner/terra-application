import React, { useState, useRef } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import NavigationApplicationContainer, { NavigationPageContainer } from '../../../../../application-container/NavigationApplicationContainer';

import ReviewPageContainer from '../page-containers/ReviewPageContainer';
import OrderPageContainer from '../page-containers/OrderPageContainer';
import DocumentPageContainer from '../page-containers/DocumentPageContainer';
import BillingPageContainer from '../page-containers/BillingPageContainer';
import PatientConceptProvider from '../shared/PatientConceptProvider';
import ApplicationModal from '../../../../../application-modal/ApplicationModal';
import useNavigationState from '../../../../../navigation/useNavigationState';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const ClinicalDemoAppContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['review', 'order', 'document', 'billing']);

  const [showPatientSearchModal, setShowPatientSearchModal] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

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
          titleConfig={{ title: '(Not) Powerchart Touch' }}
          userConfig={userConfig}
          activeNavigationItemKey={navigationState}
          onSelectNavigationItem={(key) => { setNavigationState(key); }}
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
            description="Review"
            render={() => <ReviewPageContainer />}
          />
          <NavigationPageContainer
            pageKey="order"
            description="Order"
            render={() => <OrderPageContainer />}
          />
          <NavigationPageContainer
            pageKey="document"
            description="Document"
            render={() => <DocumentPageContainer />}
          />
          <NavigationPageContainer
            pageKey="billing"
            description="Billing"
            render={() => <BillingPageContainer />}
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
