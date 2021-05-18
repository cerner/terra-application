import React from 'react';
import ReactDOM from 'react-dom';

import useForceUpdate from '../../../packages/terra-application/src/shared/useForceUpdate';

import Workspace from '../../../packages/terra-application/lib/terra-dev-site/test/workspace/Workspace.test';
import OverlayWorkspace from '../../../packages/terra-application/lib/terra-dev-site/test/workspace/OverlayWorkspace.test';
import PrimaryNavigationLayout1 from '../../../packages/terra-application/lib/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout1.test';
import PrimaryNavigationLayout2 from '../../../packages/terra-application/lib/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout2.test';
import PrimaryNavigationLayout3 from '../../../packages/terra-application/lib/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout3.test';
import PrimaryNavigationLayout4 from '../../../packages/terra-application/lib/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout4.test';
import PrimaryNavigationLayout5 from '../../../packages/terra-application/lib/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout5.test';
import SkipToLinks from '../../../packages/terra-application/lib/terra-dev-site/test/application-container/SkipToLinks.test';
import MainContainerSimple from '../../../packages/terra-application/lib/terra-dev-site/test/main-container/MainContainerSimple.test';
import MainContainerNavigation from '../../../packages/terra-application/lib/terra-dev-site/test/main-container/MainContainerNavigation.test';

const testMap = {
  '#/workspace': Workspace,
  '#/overlay-workspace': OverlayWorkspace,
  '#/primary-navigation-layout-1': PrimaryNavigationLayout1,
  '#/primary-navigation-layout-2': PrimaryNavigationLayout2,
  '#/primary-navigation-layout-3': PrimaryNavigationLayout3,
  '#/primary-navigation-layout-4': PrimaryNavigationLayout4,
  '#/primary-navigation-layout-5': PrimaryNavigationLayout5,
  '#/skip-to-links': SkipToLinks,
  '#/main-container/simple': MainContainerSimple,
  '#/main-container/navigation': MainContainerNavigation,
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
