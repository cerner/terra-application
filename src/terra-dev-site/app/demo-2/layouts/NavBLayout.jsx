import React from 'react';
import SecondaryNavigationLayout from '../../../../application-layouts/SecondaryNavigationLayout';
import PageContainer from '../../../../page-container/PageContainer';
import Page2 from '../pages/Page1';

const propTypes = {};

const NavBLayout = () => (
  <SecondaryNavigationLayout enableWorkspace>
    <PageContainer>
      <Page2 />
    </PageContainer>
  </SecondaryNavigationLayout>
);

NavBLayout.propTypes = propTypes;

export default NavBLayout;
