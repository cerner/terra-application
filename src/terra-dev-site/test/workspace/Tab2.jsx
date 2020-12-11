import React from 'react';
import { WorkspaceContent } from '../../../workspace/';
import MockContent from './MockContent';

const Tab2 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'yellow', padding: '0.5rem', margin: '0' }}>Tab 2 Toolbar</p>}
  >
    <MockContent title="Tab 2" />
  </Panel>
);

Tab2.titleKey = 'derp2';

export default Tab2;
