import React from 'react';

import PageLayout from '../../../../../application-page/PageLayout';

import ExamplePage from './shared/ExamplePage';

const PageLayoutDemo = () => (
  <PageLayout
    pageTitle="Item 1 - Page 0"
  >
    <ExamplePage prefix="Item 1" index={0} />
  </PageLayout>
);

export default PageLayoutDemo;
