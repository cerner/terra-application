import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '../../../application-modal/ApplicationModal';
import HeadlessLayout from '../../../application-layouts/HeadlessLayout';
import ApplicationConceptBannerProvider from '../../../application-container/ApplicationConceptBannerProvider';

import { ConceptContext } from '../providers/ConceptProvider';
import { SessionContext } from '../providers/SessionProvider';

import Page1 from '../pages/Page1';
import NavBLayout from './NavBLayout';
import NavCLayout from './NavCLayout';
import NavDLayout from './NavDLayout';

import ConceptBanner from '../shared/ConceptBanner';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const HeadlessApplicationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);

  const [showDetailsModal, setShowDetailsModal] = React.useState(false);

  return (
    <>
      <ApplicationConceptBannerProvider
        layoutBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} onSelectDetails={() => { setShowDetailsModal(true); }} /> : undefined}
        modalBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} isModal /> : undefined}
      >
        <HeadlessLayout
          renderLayout={() => <NavDLayout />}
        />
        {showDetailsModal && (
          <ApplicationModal title="Concept Details" size="small" onRequestClose={() => { setShowDetailsModal(false); }}>
            <div style={{ padding: '1rem' }}>
              <p>Details go here.</p>
            </div>
          </ApplicationModal>
        )}
      </ApplicationConceptBannerProvider>
    </>
  );
};

export default HeadlessApplicationLayout;
