import React from 'react';
import Panel from '../../../workspace/Panel';

const Tab3 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightblue', padding: '0.5rem', margin: '0' }}>Tab 3 Toolbar</p>}
  >
    <p>Tab 3 Content</p>
  </Panel>
);

Tab3.titleKey = 'derp';

export default Tab3;
