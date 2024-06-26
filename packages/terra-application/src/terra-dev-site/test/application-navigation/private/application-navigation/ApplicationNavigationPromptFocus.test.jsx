import React, { useState } from 'react';
import {
  IconSearch,
  IconManufacturer,
  IconVisualization,
  IconScratchPad,
  IconSave,
  IconPrinter,
  IconBookmark,
  IconAttachment,
} from 'terra-icon';

import PageContent from '../common/PageContent';
import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';

const titleConfig = {
  title: 'My Application',
};

const userConfig = {
  name: 'My Name',
  initials: 'MN',
};

const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'search',
    text: 'Search',
    metaData: {
      test: 'search',
    },
  }, {
    icon: <IconManufacturer />,
    key: 'manufacturer',
    text: 'View Manufacturers',
    metaData: {
      test: 'manufacturers',
    },
  }, {
    icon: <IconVisualization />,
    key: 'trends',
    text: 'View Trends',
    metaData: {
      test: 'trends',
    },
  }, {
    icon: <IconScratchPad />,
    key: 'inbox',
    text: 'View Inbox',
    metaData: {
      test: 'inbox',
    },
  },
];

const navigationItems = [
  {
    key: '/home',
    text: 'Home',
    metaData: {
      display: 'Home',
    },
  }, {
    key: '/products',
    text: 'Products',
    metaData: {
      display: 'Products',
    },
  }, {
    key: '/management',
    text: 'Management',
    metaData: {
      display: 'Management',
    },
  }, {
    key: '/documentation',
    text: 'Documentation',
    metaData: {
      display: 'Documentation',
    },
  }, {
    key: '/continuing_education',
    text: 'Continuing Education',
    metaData: {
      display: 'Continuing Education',
    },
  }, {
    key: '/support',
    text: 'Support',
    metaData: {
      display: 'Support',
    },
  }, {
    key: '/resources',
    text: 'Resources',
    metaData: {
      display: 'Resources',
    },
  }, {
    key: '/archives',
    text: 'Archives',
    metaData: {
      display: 'Archives',
    },
  },
];

const utilityItems = [
  {
    icon: <IconSave />,
    key: 'save',
    text: 'Save',
    metaData: {
      test: 'save',
    },
  }, {
    icon: <IconPrinter />,
    key: 'print',
    text: 'Print',
    metaData: {
      test: 'print',
    },
  }, {
    icon: <IconBookmark />,
    key: 'bookmark',
    text: 'Bookmark',
    metaData: {
      test: 'bookmark',
    },
  }, {
    icon: <IconAttachment />,
    key: 'attachment',
    text: 'Add Attachment',
    metaData: {
      test: 'attachment',
    },
  },
];

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const ApplicationNavigationPromptFocus = () => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  /* eslint-disable no-alert */
  function ManageItemSelection(key) {
    // eslint-disable-next-line no-restricted-globals
    const Accept = confirm(`Do you wish to Navigate to ${key}`);
    if (Accept) { setActiveKey(key); }
  }
  /* eslint-enable no-alert */
  const [lastActionKey, setLastActionKey] = useState(null);

  function handleItemSelection(key) {
    setLastActionKey(`Current Action: ${key}`);
  }

  return (
    <ApplicationNavigation
      titleConfig={titleConfig}
      userConfig={userConfig}
      extensionItems={extensionItems}
      onSelectExtensionItem={handleItemSelection}
      navigationItems={navigationItems}
      activeNavigationItemKey={activeKey}
      onSelectNavigationItem={ManageItemSelection}
      utilityItems={utilityItems}
      onSelectUtilityItem={handleItemSelection}
      onSelectSettings={() => handleItemSelection('settings')}
      onSelectHelp={() => handleItemSelection('help')}
      onSelectLogout={() => handleItemSelection('logout')}
    >
      <PageContent title={activeKey} subtitle={lastActionKey} />
    </ApplicationNavigation>
  );
};

export default ApplicationNavigationPromptFocus;
