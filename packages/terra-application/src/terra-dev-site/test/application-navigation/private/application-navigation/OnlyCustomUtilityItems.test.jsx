import React from 'react';
import {
  IconLightbulb,
  IconPill,
  IconSearch,
  IconVisualization,
} from 'terra-icon';

import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';

const utilityItems = [
  {
    icon: <IconSearch />,
    key: 'item-a',
    text: 'Item A',
    metaData: {
      test: 'a',
    },
  }, {
    icon: <IconPill />,
    key: 'item-b',
    text: 'Item B',
    metaData: {
      test: 'b',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-c',
    text: 'Item C',
    metaData: {
      test: 'c',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-d',
    text: 'Item D',
    metaData: {
      test: 'd',
    },
  },
];

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const OnlyCustomUtilityItemsTest = () => (
  <ApplicationNavigation
    utilityItems={utilityItems}
    onSelectUtilityItem={handleItemSelection}
  />
);

export default OnlyCustomUtilityItemsTest;
