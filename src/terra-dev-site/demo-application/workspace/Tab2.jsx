import React from 'react';
import Panel from '../../../workspace/Panel';

const Tab2 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'yellow', padding: '0.5rem', margin: '0' }}>Tab 2 Toolbar</p>}
  >
    <p>Tab 2 Content</p>
  </Panel>
);

Tab2.titleKey = 'derp2';

export default Tab2;
