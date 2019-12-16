import React, {
  useRef, useContext, useState,
} from 'react';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';

import ApplicationNavigation from 'terra-application/lib/application-navigation';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';

import { ModalContent } from './ModalPresenter';

const Page1Content = React.lazy(() => import('./Page1Content'));
const Page2Content = React.lazy(() => import('./Page2Content'));
const Page3Content = React.lazy(() => import('./Page3Content'));

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const DemoAppNavigation = () => {
  const disclosureManager = useContext(DisclosureManagerContext);
  const [activeNavItem, setActiveNavItem] = useState('page_1');
  const [loggedOut, setLoggedOut] = useState(false);
  const disclosureDismissRef = useRef();

  const navigationItemsRef = useRef([{
    key: 'page_1',
    text: 'Page 1',
  }, {
    key: 'page_2',
    text: 'Page 2',
  }, {
    key: 'page_3',
    text: 'Page 3',
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
    case 'page_1':
      pageContent = <Page1Content />;
      break;
    case 'page_2':
      pageContent = <Page2Content />;
      break;
    case 'page_3':
      pageContent = <Page3Content />;
      break;
    default:
      pageContent = null;
      break;
  }

  return (
    <ApplicationNavigation
      titleConfig={{
        title: 'Terra Application Demo',
      }}
      userConfig={userConfig}
      navigationItems={navigationItemsRef.current}
      activeNavigationItemKey={activeNavItem}
      onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
      extensionItems={[{
        key: 'extension_1',
        icon: <IconLightbulb />,
        text: 'Extension 1',
      }]}
      onSelectExtensionItem={(key) => {
        if (key === 'extension_1') {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'large',
            content: {
              key: 'extension_1_modal',
              component: (
                <ModalContent
                  name="Extension Modal"
                  onSubmit={() => {
                    if (disclosureDismissRef.current) {
                      disclosureDismissRef.current();
                      disclosureDismissRef.current = undefined;
                    }
                  }}
                />
              ),
            },
          }).then(({ dismissDisclosure }) => {
            disclosureDismissRef.current = dismissDisclosure;
          });
        }
      }}
      utilityItems={[{
        key: 'utility_1',
        text: 'Utility Item 1',
      }]}
      onSelectUtilityItem={(utilityItemKey) => {
        if (utilityItemKey === 'utility_1') {
          disclosureManager.disclose({
            preferredType: 'modal',
            size: 'large',
            content: {
              key: 'utility_1_modal',
              component: (
                <ModalContent
                  name="Utility Modal"
                  onSubmit={() => {
                    if (disclosureDismissRef.current) {
                      disclosureDismissRef.current();
                      disclosureDismissRef.current = undefined;
                    }
                  }}
                />
              ),
            },
          }).then(({ dismissDisclosure }) => {
            disclosureDismissRef.current = dismissDisclosure;
          });
        }
      }}
      onSelectLogout={() => {
        setLoggedOut(true);
      }}
    >
      {pageContent}
    </ApplicationNavigation>
  );
};

export default DemoAppNavigation;
