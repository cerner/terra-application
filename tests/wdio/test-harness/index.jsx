import React from 'react';
import ReactDOM from 'react-dom';

import Workspace from '../../../lib/terra-dev-site/test/workspace/Workspace.test';

const testMap = {
  '/raw/tests/terra-application/workspace/workspace': Workspace,
};

const Entry = () => {
  const Component = testMap[window.location.pathname];
  return <Component />;
};

ReactDOM.render(<Entry />, document.getElementById('root'));
