import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import Menu from 'terra-menu';

import HeaderContainer from '../../header-container/_HeaderContainer';

const propTypes = {};

const MockWorkspace = ({ onDismiss, workspaceSize, onUpdateSize }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const menuButtonRef = React.useRef();

  React.useEffect(() => {
    setMenuIsOpen(false);
  }, [workspaceSize]);

  return (
    <HeaderContainer
      header={<ActionHeader title="Workspace" onClose={onDismiss} />}
    >
      <div style={{ padding: '1rem' }}>
        <p>Workspace goes here.</p>
        <p>
          Size:
          {' '}
          <Button text={`${workspaceSize[0].toUpperCase() + workspaceSize.substring(1)}`} refCallback={(ref) => { menuButtonRef.current = ref; }} onClick={() => { setMenuIsOpen(true); }} />
        </p>
        <Menu
          isOpen={menuIsOpen}
          targetRef={() => menuButtonRef.current}
          onRequestClose={() => { setMenuIsOpen(false); }}
        >
          <Menu.ItemGroup
            key="Group"
            onChange={(event, index) => {
              if (index === 0) {
                onUpdateSize('small');
              } else if (index === 1) {
                onUpdateSize('medium');
              } else if (index === 2) {
                onUpdateSize('large');
              }
            }}
          >
            <Menu.Item text="Small" key="small" isSelected={workspaceSize === 'small'} />
            <Menu.Item text="Medium" key="medium" isSelected={workspaceSize === 'medium'} />
            <Menu.Item text="Large" key="large" isSelected={workspaceSize === 'large'} />
          </Menu.ItemGroup>
        </Menu>
      </div>
    </HeaderContainer>
  );
};

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
