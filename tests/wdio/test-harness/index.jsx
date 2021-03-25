import React from 'react';
import ReactDOM from 'react-dom';

import Workspace from '../../../lib/terra-dev-site/test/workspace/Workspace.test';

const testMap = {
  '#/workspace': Workspace,
};

const Entry = () => {
  const Component = testMap[window.location.hash];
  if (Component) {
    return <Component />;
  }
  return <div>{window.location.hash}</div>;
};

ReactDOM.render(<Entry />, document.getElementById('root'));
