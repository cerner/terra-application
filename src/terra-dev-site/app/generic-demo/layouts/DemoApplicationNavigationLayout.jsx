import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '../../../../application-modal/ApplicationModal';
import PrimaryNavigationLayout, { NavigationItem } from '../../../../application-layouts/PrimaryNavigationLayout';
import PageContainer from '../../../../application-page/PageContainer';

import useNavigationState from '../../../../navigation/useNavigationState';

import { ConceptContext } from '../app-containers/ConceptProvider';
import { SessionContext } from '../app-containers/SessionProvider';

import Page1 from '../pages/Page1';
import NavBLayout from './NavBLayout';
import NavCLayout from './NavCLayout';
import NavDLayout from './NavDLayout';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const DemoApplicationNavigationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);
  const sessionContext = React.useContext(SessionContext);

  const [navigationState, setNavigationState] = useNavigationState(['nav-A', 'nav-B', 'nav-C', 'nav-D']);
  const [loggedOut, setLoggedOut] = useState(false);
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState(false);

  const primaryConceptView = React.useMemo(() => (conceptContext.data
    ? (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Concept
          {' '}
          {conceptContext.data}
          {' '}
          <Button text="Details" onClick={() => { setShowDetailsModal(true); }} />
        </div>
      </div>
    )
    : undefined), [conceptContext.data]);

  const modalConceptView = React.useMemo(() => (conceptContext.data
    ? (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'blue', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Concept
          {' '}
          {conceptContext.data}
          {' '}
          (Modal)
        </div>
      </div>
    )
    : undefined), [conceptContext.data]);

  if (loggedOut) {
    return (
      <div>
        <p>Logged Out</p>
        <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
      </div>
    );
  }

  function renderNavigationItems() {
    if (conceptContext.data) {
      return [(
        <NavigationItem
          key="nav-A"
          navigationKey="nav-A"
          text="Nav A"
          render={() => (
            <PageContainer>
              <Page1 />
            </PageContainer>
          )}
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
        activeNavigationKey={conceptContext.data ? navigationState : undefined}
        onSelectNavigationItem={(key) => { setNavigationState(key); }}
        primaryConceptBanner={primaryConceptView}
        modalConceptBanner={modalConceptView}
      >
        {renderNavigationItems()}
      </PrimaryNavigationLayout>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { conceptContext.updateData('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { conceptContext.updateData('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { conceptContext.updateData('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
      {showDetailsModal && (
      <ApplicationModal title="Concept Details" size="small" onRequestClose={() => { setShowDetailsModal(false); }}>
        <div style={{ padding: '1rem' }}>
          <p>Details go here.</p>
        </div>
      </ApplicationModal>
      )}
    </>
  );
};

export default DemoApplicationNavigationLayout;
