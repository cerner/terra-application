import React, { useState, useRef } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import ApplicationNavigation from '../../../../../application-navigation';

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
  const [activeNavItem, setActiveNavItem] = useState('page_0');
  const [showPatientSearchModal, setShowPatientSearchModal] = useState(false);

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

  return (
    <>
      {showPatientSearchModal && (
        <ApplicationModal title="Patient Search" size="large" onRequestClose={() => { setShowPatientSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            Patient Search goes here...
          </div>
        </ApplicationModal>
      )}
      <PatientConceptProvider>
        <ApplicationNavigation
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
          {(() => {
            let pageContent;
            switch (activeNavItem) {
              case 'page_0':
                pageContent = <ReviewPageContainer />;
                break;
              case 'page_1':
                pageContent = <OrderPageContainer />;
                break;
              default:
                pageContent = <DocumentPageContainer />;
                break;
            }
            return pageContent;
          })()}
        </ApplicationNavigation>
      </PatientConceptProvider>
    </>
  );
};

export default ClinicalDemoAppContainer;
