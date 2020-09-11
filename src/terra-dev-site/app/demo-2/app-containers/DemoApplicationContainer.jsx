import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import NavigationApplicationContainer, { NavigationItem } from '../../../../application-container/NavigationApplicationContainer';
import ApplicationModal from '../../../../application-modal/ApplicationModal';
import useNavigationState from '../../../../navigation/useNavigationState';

import NavAPageContainer from '../page-containers/NavAPageContainer';
import NavBPageContainer from '../page-containers/NavBPageContainer';
import NavCPageContainer from '../page-containers/NavCPageContainer';
import NavDPageContainer from '../page-containers/NavDPageContainer';

import DemoApplicationConceptProvider from '../shared/DemoApplicationConceptProvider';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const DemoApplicationContainer = () => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-A', 'nav-B', 'nav-C', 'nav-D']);

  const [showSearchModal, setShowSearchModal] = useState(false);
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
      <DemoApplicationConceptProvider>
        <NavigationApplicationContainer
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
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
          onSelectSettings={() => {}}
          onSelectHelp={() => {}}
          activeNavigationKey={navigationState}
          onSelectNavigationItem={(key) => { setNavigationState(key); }}
        >
          <NavigationItem
            navigationKey="nav-A"
            text="Nav A"
            render={() => <NavAPageContainer />}
          />
          <NavigationItem
            navigationKey="nav-B"
            text="Nav B"
            render={() => <NavBPageContainer />}
          />
          <NavigationItem
            navigationKey="nav-C"
            text="Nav C"
            render={() => <NavCPageContainer />}
          />
          <NavigationItem
            navigationKey="nav-D"
            text="Nav D"
            render={() => <NavDPageContainer />}
          />
        </NavigationApplicationContainer>
      </DemoApplicationConceptProvider>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            Search goes here...
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default DemoApplicationContainer;
