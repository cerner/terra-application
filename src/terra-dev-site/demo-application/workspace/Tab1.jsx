import React from 'react';
import WorkspaceContent from '../../../workspace/WorkspaceContent';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import MockContent from './MockContent';

const Tab1 = () => {
  return (
    <WorkspaceContent
      toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Tab 1 Toolbar</p>}
    >
      <MockContent title="Tab 1" />
      <ApplicationLoadingOverlay backgroundStyle="dark" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
