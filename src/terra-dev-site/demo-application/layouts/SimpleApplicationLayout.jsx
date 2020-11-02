import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '../../../application-modal/ApplicationModal';
import PrimaryNavigationLayout from '../../../application-layouts/PrimaryNavigationLayout';
import ApplicationConceptBannerProvider from '../../../application-container/ApplicationConceptBannerProvider';
import MainContainer from '../../../main-container';

import { ConceptContext } from '../providers/ConceptProvider';
import { SessionContext } from '../providers/SessionProvider';

import Page1 from '../pages/Page1';

import ConceptBanner from '../shared/ConceptBanner';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const SimpleApplicationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);
  const sessionContext = React.useContext(SessionContext);

  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState(false);

  return (
    <>
      <ApplicationConceptBannerProvider
        layoutBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} onSelectDetails={() => { setShowDetailsModal(true); }} /> : undefined}
        modalBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} isModal /> : undefined}
      >
        <PrimaryNavigationLayout
          titleConfig={{ title: 'Demo Application' }}
          userConfig={userConfig}
          extensionItems={[{
            key: 'search',
            icon: <IconSearch />,
            text: 'Search',
          }]}
          onSelectExtensionItem={(itemKey) => {
            if (itemKey === 'search') {
              setShowSearchModal(true);
            }
          }}
          utilityItems={[{
            key: 'lock',
            text: 'Lock Session',
          }]}
          onSelectUtilityItem={(key) => {
            if (key === 'lock') {
              sessionContext.lock();
            }
          }}
          onSelectLogout={() => {
            sessionContext.logOut();
          }}
          onSelectSettings={() => {}}
          onSelectHelp={() => {}}
          renderPage={conceptContext.data ? () => <Page1 /> : undefined}
        >
          {!conceptContext.data ? (
            <MainContainer>
              <h1>No Context</h1>
              <p>Select a option from the Search modal.</p>
            </MainContainer>
          ) : undefined}
        </PrimaryNavigationLayout>
        {showDetailsModal && (
          <ApplicationModal title="Concept Details" size="small" onRequestClose={() => { setShowDetailsModal(false); }}>
            <div style={{ padding: '1rem' }}>
              <p>Details go here.</p>
            </div>
          </ApplicationModal>
        )}
      </ApplicationConceptBannerProvider>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { conceptContext.updateData('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { conceptContext.updateData('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { conceptContext.updateData('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default SimpleApplicationLayout;
