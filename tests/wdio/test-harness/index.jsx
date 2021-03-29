import React from 'react';
import ReactDOM from 'react-dom';

import Workspace from '../../../lib/terra-dev-site/test/workspace/Workspace.test';
import PrimaryNavigationLayout1 from '../../../src/terra-dev-site/test/primary-navigation-layout/PrimaryNavigationLayout1.test';

const testMap = {
  '#/workspace': Workspace,
  '#/primary-navigation-layout-1': PrimaryNavigationLayout1,
};

const Entry = () => {
  const Component = testMap[window.location.hash];
  if (Component) {
    return <Component />;
  }
  return <div>{window.location.hash}</div>;
};

ReactDOM.render(<Entry />, document.getElementById('root'));
