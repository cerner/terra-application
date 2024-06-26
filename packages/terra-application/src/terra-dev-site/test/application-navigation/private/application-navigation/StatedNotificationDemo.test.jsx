import React, { useState } from 'react';
import {
  IconAttachment,
  IconBookmark,
  IconManufacturer,
  IconPrinter,
  IconSave,
  IconScratchPad,
  IconSearch,
  IconVisualization,
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

const notifications = [
  {
    '/products': 5,
    manufacturer: 10,
    '/archives': 4,
  },
  {
    '/products': 8,
    manufacturer: 12,
    '/archives': 999,
    inbox: 1,
  },
];

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const StatedNotificationDemo = () => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [lastActionKey, setLastActionKey] = useState(null);

  function handleItemSelection(key) {
    if (key === 'search') {
      setNotificationIndex(notificationIndex ? 0 : 1);
    }
    setLastActionKey(`Current Action: ${key}`);
  }

  return (
    <ApplicationNavigation
      titleConfig={titleConfig}
      userConfig={userConfig}
      notifications={notifications[notificationIndex]}
      extensionItems={extensionItems}
      onSelectExtensionItem={handleItemSelection}
      navigationItems={navigationItems}
      activeNavigationItemKey={activeKey}
      onSelectNavigationItem={key => setActiveKey(key)}
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

export default StatedNotificationDemo;
