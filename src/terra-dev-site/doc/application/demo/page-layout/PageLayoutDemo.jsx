import React from 'react';

import PageLayoutContainer from '../../../../../application-page/PageLayoutContainer';

import ExamplePage from './shared/ExamplePage';

const PageLayoutDemo = () => (
  <PageLayoutContainer>
    <ExamplePage prefix="Item 1" index={0} />
  </PageLayoutContainer>
);

export default PageLayoutDemo;
