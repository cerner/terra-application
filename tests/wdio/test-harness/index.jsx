import React from 'react';
import ReactDOM from 'react-dom';

import useForceUpdate from '../../../src/shared/useForceUpdate';

import Workspace from '../../../lib/terra-dev-site/test/workspace/Workspace.test';
import OverlayWorkspace from '../../../lib/terra-dev-site/test/workspace/OverlayWorkspace.test';
import PrimaryNavigationLayout1 from '../../../src/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout1.test';
import PrimaryNavigationLayout2 from '../../../src/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout2.test';
import DemoApplication from '../../../src/terra-dev-site/test/demo-application/DemoApplication';
import DemoApplicationLowlight from '../../../src/terra-dev-site/test/demo-application/DemoApplicationLowlight';
import DemoApplicationFusion from '../../../src/terra-dev-site/test/demo-application/DemoApplicationFusion';

const testMap = {
  '#/workspace': Workspace,
  '#/overlay-workspace': OverlayWorkspace,
  '#/primary-navigation-layout-1': PrimaryNavigationLayout1,
  '#/primary-navigation-layout-2': PrimaryNavigationLayout2,
  '#/demo': DemoApplication,
  '#/demo-lowlight': DemoApplicationLowlight,
  '#/demo-fusion': DemoApplicationFusion,
};

const Entry = () => {
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {
    const handlePopState = () => {
      forceUpdate();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [forceUpdate]);

  const Component = testMap[window.location.hash];
  if (Component) {
    return <Component />;
  }
  return (
    <div>
      <h1>Test Index</h1>
      {Object.keys(testMap).map((key) => (
        <p key={key}>
          <a href={`${window.location.pathname}${key}`}>{key}</a>
        </p>
      ))}
    </div>
  );
};

ReactDOM.render(<Entry />, document.getElementById('root'));
