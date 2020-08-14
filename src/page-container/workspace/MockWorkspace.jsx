import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';

import HeaderContainer from '../../header-container/_HeaderContainer';

const propTypes = {};

const MockWorkspace = ({ onDismiss }) => (
  <HeaderContainer
    header={<ActionHeader title="Workspace" />}
  >
    <div style={{ padding: '1rem' }}>
      <p>Workspace goes here.</p>
      <Button text="Close" onClick={onDismiss} />
    </div>
  </HeaderContainer>
);

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
