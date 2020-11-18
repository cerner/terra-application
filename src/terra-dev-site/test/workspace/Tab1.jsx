import React, { useState } from 'react';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Tab1 = () => {
  const [isReset, setIsReset] = useState(false);

  const actions = [
    {
      key: 'item-1',
      label: 'Item 1',
      isSelected: true,
      isDisabled: false,
      onAction: () => setIsReset(!isReset),
    },
    {
      key: 'item-2',
      label: 'Item 2',
      isSelected: false,
      isDisabled: true,
      onAction: () => setIsReset(!isReset),
    },
    {
      key: 'item-3',
      label: 'Item 3',
      isSelected: false,
      onAction: () => setIsReset(!isReset),
    },
  ];

  return (
    <>
      <Panel
        key={isReset ? 'derp1' : 'derp2'}
        toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Tab 1 Toolbar</p>}
        actions={actions}
      >
        <MockContent title="Tab 1" />
      </Panel>
    </>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
