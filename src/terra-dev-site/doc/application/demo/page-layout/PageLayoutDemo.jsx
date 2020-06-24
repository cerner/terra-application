import React from 'react';

import ApplicationPageContainer from '../../../../../application-page/ApplicationPageContainer';

import ExamplePage from './shared/ExamplePage';

const PageLayoutDemo = () => (
  <ApplicationPageContainer>
    <ExamplePage prefix="Item 1" index={0} />
  </ApplicationPageContainer>
);

export default PageLayoutDemo;
