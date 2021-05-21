import React from 'react';
import PageContainer from '@cerner/terra-application/lib/page-container';

import MyReusablePage from './MyReusablePage';

export default () => (
  <PageContainer>
    <MyReusablePage onRequestClose={() => {}} />
  </PageContainer>
);
