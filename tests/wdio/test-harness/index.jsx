import React from 'react';
import ReactDOM from 'react-dom';

import useForceUpdate from '../../../src/shared/useForceUpdate';

import Workspace from '../../../lib/terra-dev-site/test/workspace/Workspace.test';
import PrimaryNavigationLayout1 from '../../../src/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout1.test';
import PrimaryNavigationLayout2 from '../../../src/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout2.test';

const testMap = {
  '#/workspace': Workspace,
  '#/primary-navigation-layout-1': PrimaryNavigationLayout1,
  '#/primary-navigation-layout-2': PrimaryNavigationLayout2,
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
