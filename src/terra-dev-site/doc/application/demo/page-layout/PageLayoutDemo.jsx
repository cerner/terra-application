import React from 'react';

import PageLayout from '../../../../../application-page/PageLayout';
import PageLayoutContainer from '../../../../../application-page/PageLayoutContainer';

import ExamplePage from './shared/ExamplePage';

const PageLayoutDemo = () => (
  <PageLayoutContainer>
    <PageLayout
      pageTitle="Item 1 - Page 0"
    >
      <ExamplePage prefix="Item 1" index={0} />
    </PageLayout>
  </PageLayoutContainer>
);

export default PageLayoutDemo;
