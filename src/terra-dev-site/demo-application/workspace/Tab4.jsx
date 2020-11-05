import React from 'react';
import Panel from '../../../workspace/Panel';

const Tab4 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightgreen', padding: '0.5rem', margin: '0' }}>Tab 4 Toolbar</p>}
  >
    <p>Tab 4 Content</p>
  </Panel>
);

Tab4.titleKey = 'derp';

export default Tab4;
