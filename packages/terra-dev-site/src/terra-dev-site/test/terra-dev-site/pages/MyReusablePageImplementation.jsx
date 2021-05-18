import React from 'react';
import { PageContainer } from '../../../../terra-application-temporary/page';

import MyReusablePage from './MyReusablePage';

export default () => (
  <PageContainer>
    <MyReusablePage onRequestClose={() => {}} />
  </PageContainer>
);
