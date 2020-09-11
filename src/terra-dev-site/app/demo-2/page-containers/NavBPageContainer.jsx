import React from 'react';
import PageContainer from '../../../../page-container/PageContainer';
import Page2 from '../pages/Page1';

const propTypes = {};

const NavBPageContainer = () => (
  <PageContainer enableWorkspace>
    <Page2 />
  </PageContainer>
);

NavBPageContainer.propTypes = propTypes;

export default NavBPageContainer;
