import React from 'react';
import { PageContainer } from '@cerner/terra-dev-site/lib/terra-application-temporary/page';

import MyReusablePage from './MyReusablePage';

export default () => (
  <PageContainer>
    <MyReusablePage onRequestClose={() => {}} />
  </PageContainer>
);
