import React, { useState } from 'react';
import Panel from '../../../workspace/Panel';

const Tab1 = () => {
  const [isReset, setIsReset] = useState(false);

  const actions = [
    {
      key: 'item-1',
      title: 'Item 1',
      isSelected: true,
      onAction: () => setIsReset(!isReset),
    },
    {
      key: 'item-2',
      title: 'Item 2',
      isSelected: true,
      onAction: () => setIsReset(!isReset),
    },
    {
      key: 'item-3',
      title: 'Item 3',
      isSelected: true,
      onAction: () => setIsReset(!isReset),
      items: [
        {
          key: 'item-4',
          title: 'Item 4',
          onAction: () => setIsReset(!isReset),
        },
        {
          key: 'item-5',
          title: 'Item 5',
          isSelected: true,
          onAction: () => setIsReset(!isReset),
        },
      ],
    },
  ];

  return (
    <>
      <Panel
        key={isReset ? 'derp1' : 'derp2'}
        toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Tab 1 Toolbar</p>}
        actions={actions}
      >
        <p>Tab 1 Content</p>
      </Panel>
    </>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
