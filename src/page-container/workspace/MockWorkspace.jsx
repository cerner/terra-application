import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import Menu from 'terra-menu';

import { ActiveBreakpointContext } from '../../breakpoints';
import HeaderContainer from '../../header-container/_HeaderContainer';

const propTypes = {};

const sizeBreakpoints = ['large', 'enormous'];
const typeBreakpoints = ['medium'];

const MockWorkspace = ({
  onDismiss, workspaceSize, workspaceCustomSize, onUpdateSize,
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const menuButtonRef = React.useRef();

  React.useEffect(() => {
    setMenuIsOpen(false);
  }, [workspaceCustomSize, workspaceSize]);

  let menuOptions;
  if (activeBreakpoint === 'large' || activeBreakpoint === 'huge' || activeBreakpoint === 'enormous') {
    menuOptions = (
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
    );
  } else if (activeBreakpoint === 'medium') {
    menuOptions = (
      <Menu.ItemGroup
        key="Group"
        onChange={(event, index) => {
          if (index === 0) {
            onUpdateSize('split');
          } else if (index === 1) {
            onUpdateSize('overlay');
          }
        }}
      >
        <Menu.Item text="Split" key="split" isSelected={workspaceSize === 'split'} />
        <Menu.Item text="Overlay" key="overlay" isSelected={workspaceSize === 'overlay'} />
      </Menu.ItemGroup>
    );
  }

  return (
    <HeaderContainer
      header={<ActionHeader title="Workspace" onClose={onDismiss} />}
    >
      <div style={{ padding: '1rem' }}>
        <p>Workspace goes here.</p>
        {menuOptions && (
          <>
            <p>
            Size:
              {' '}
              <Button text={workspaceCustomSize ? `${workspaceCustomSize}px` : `${workspaceSize?.[0].toUpperCase() + workspaceSize?.substring(1)}`} refCallback={(ref) => { menuButtonRef.current = ref; }} onClick={() => { setMenuIsOpen(true); }} />
            </p>
            <Menu
              isOpen={menuIsOpen}
              targetRef={() => menuButtonRef.current}
              onRequestClose={() => { setMenuIsOpen(false); }}
            >
              {menuOptions}
            </Menu>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
