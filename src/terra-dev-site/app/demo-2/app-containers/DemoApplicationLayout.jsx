import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';

import ApplicationNavigationLayout, { NavigationItem } from '../../../../application-layouts/ApplicationNavigationLayout';
import useNavigationState from '../../../../navigation/useNavigationState';

import NavAPageContainer from '../page-containers/NavAPageContainer';
import NavBPageContainer from '../page-containers/NavBPageContainer';
import NavCPageContainer from '../page-containers/NavCPageContainer';
import NavDPageContainer from '../page-containers/NavDPageContainer';

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const DemoApplicationLayout = ({ onSearch }) => {
  const [navigationState, setNavigationState] = useNavigationState(['nav-A', 'nav-B', 'nav-C', 'nav-D']);

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
      <ApplicationNavigationLayout
        titleConfig={{ title: 'Demo Application' }}
        userConfig={userConfig}
        extensionItems={[{
          key: 'search',
          icon: <IconSearch />,
          text: 'Search',
        }]}
        onSelectExtensionItem={(itemKey) => {
          if (itemKey === 'search') {
            onSearch();
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
      </ApplicationNavigationLayout>
    </>
  );
};

export default DemoApplicationLayout;
