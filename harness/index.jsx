import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationBaseTest from '../lib/terra-dev-site/test/application-base/ApplicationBaseTest.test';

const testMap = {
  '/raw/derp': ApplicationBaseTest,
};

const Entry = () => {
  const Component = testMap[window.location.pathname];
  return <Component />;
};

ReactDOM.render(<Entry />, document.getElementById('root'));
