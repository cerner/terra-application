import React from 'react';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Tab3 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightblue', padding: '0.5rem', margin: '0' }}>Tab 3 Toolbar</p>}
  >
    <MockContent title="Tab 3" />
  </Panel>
);

Tab3.titleKey = 'derp';

export default Tab3;
