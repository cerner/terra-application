import React from 'react';

import HeaderContainer from '../../header-container/_HeaderContainer';
import PageHeader from '../_PageHeader';

const propTypes = {};

const MockWorkspace = () => (
  <HeaderContainer
    header={<PageHeader title="Workspace" />}
  >
    <div style={{ padding: '1rem' }}>
      Workspace goes here
    </div>
  </HeaderContainer>
);

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
