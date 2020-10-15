import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '../../../../application-modal/ApplicationModal';
import PrimaryNavigationLayout, { NavigationItem } from '../../../../application-layouts/PrimaryNavigationLayout';
import ApplicationConceptBannerProvider from '../../../../application-container/ApplicationConceptBannerProvider';
import useNavigationState from '../../../../navigation/useNavigationState';
import SessionActionsContext from '../../../../session/SessionActionsContext';
import SessionUserContext from '../../../../session/SessionUserContext';

import ModalManager from '../../../../modal-manager';
import { ConceptContext } from '../providers/ConceptProvider';

import Page1 from '../pages/Page1';
import Page4 from '../pages/Page4';
import NavBLayout from './NavBLayout';
import NavCLayout from './NavCLayout';
import NavDLayout from './NavDLayout';

import ConceptBanner from '../shared/ConceptBanner';

const DemoApplicationNavigationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);

  const sessionUser = React.useContext(SessionUserContext);
  const sessionActions = React.useContext(SessionActionsContext);

  const [navigationState, setNavigationState] = useNavigationState(['nav-A', 'nav-B', 'nav-C', 'nav-D', 'nav-E', 'nav-F']);
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState(false);

  function renderNavigationItems() {
    if (conceptContext.data) {
      return [(
        <NavigationItem
          key="nav-A"
          navigationKey="nav-A"
          text="Nav A"
          renderPage={() => <Page1 />}
        />
      ), (
        <NavigationItem
          key="nav-B"
          navigationKey="nav-B"
          text="Nav B"
          render={() => <NavBLayout />}
        />
      ), (
        <NavigationItem
          key="nav-C"
          navigationKey="nav-C"
          text="Nav C"
          render={() => <NavCLayout />}
        />
      ), (
        <NavigationItem
          key="nav-D"
          navigationKey="nav-D"
          text="Nav D"
          render={() => <NavDLayout />}
        />
      ), (
        <NavigationItem
          key="nav-E"
          navigationKey="nav-E"
          text="Nav E"
          render={() => <h2>Not a Page</h2>}
        />
      ), (
        <NavigationItem
          key="nav-F"
          navigationKey="nav-F"
          text="Nav F"
          renderPage={() => <Page4 />}
        />
      )];
    }

    return (
      <main style={{ padding: '0 1.5rem' }}>
        <h1>No Context</h1>
        <p>Select a option from the Search modal.</p>
      </main>
    );
  }

  return (
    <>
      <ApplicationConceptBannerProvider
        layoutBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} onSelectDetails={() => { setShowDetailsModal(true); }} /> : undefined}
        modalBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} isModal /> : undefined}
      >
        <ModalManager>
          <PrimaryNavigationLayout
            titleConfig={{ title: 'Demo Application' }}
            userConfig={{
              name: `${sessionUser.firstName} ${sessionUser.lastName}`,
              initials: `${sessionUser.firstName[0]?.toUpperCase()}${sessionUser.lastName[0]?.toUpperCase()}`,
            }}
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
                sessionActions.lock();
              }
            }}
            onSelectLogout={() => {
              sessionActions.logOut();
            }}
            onSelectSettings={() => {}}
            onSelectHelp={() => {}}
            activeNavigationKey={conceptContext.data ? navigationState : undefined}
            onSelectNavigationItem={(key) => { setNavigationState(key); }}
          >
            {renderNavigationItems()}
          </PrimaryNavigationLayout>
        </ModalManager>
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

export default DemoApplicationNavigationLayout;
