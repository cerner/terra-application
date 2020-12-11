import React, { useState } from 'react';
import { WorkspaceContent } from '../../../workspace/';
import MockContent from './MockContent';

const Tab1 = () => (
  <WorkspaceContent
    toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Tab 1 Toolbar</p>}
  >
    <MockContent title="Tab 1" />
  </WorkspaceContent>
);

Tab1.titleKey = 'derp';

export default Tab1;
