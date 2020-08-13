import React from 'react';
import Button from 'terra-button';

import HeaderContainer from '../../header-container/_HeaderContainer';
import PageHeader from '../_PageHeader';

const propTypes = {};

const MockWorkspace = ({ onDismiss }) => (
  <HeaderContainer
    header={<PageHeader title="Workspace" />}
  >
    <div style={{ padding: '1rem' }}>
      <p>Workspace goes here.</p>
      <Button text="Close" onClick={onDismiss} />
    </div>
  </HeaderContainer>
);

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
