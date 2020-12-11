import React from 'react';
import { WorkspaceContent } from '../../../workspace/';
import MockContent from './MockContent';

const Tab4 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightgreen', padding: '0.5rem', margin: '0' }}>Tab 4 Toolbar</p>}
  >
    <MockContent title="Tab 4" />
  </Panel>
);

Tab4.titleKey = 'derp';

export default Tab4;
