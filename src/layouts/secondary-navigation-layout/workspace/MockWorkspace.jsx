import React from 'react';
import { ActiveBreakpointContext } from '../../../breakpoints';
import WorkspaceImplementation from './mock/TempImplement'; // Per Nav Workspace Component

const propTypes = {};

const getOptions = breakpoint => {
  let menuOptions;
  if (breakpoint === 'large' || breakpoint === 'huge' || breakpoint === 'enormous') {
    menuOptions = [
      { key: 'small', text: 'Small' },
      { key: 'medium', text: 'Medium' },
      { key: 'large', text: 'Large' },
    ];
  } else if (breakpoint === 'medium') {
    menuOptions = [
      { key: 'split', text: 'Split' },
      { key: 'overlay', text: 'Overlay' },
    ];
  }
  return menuOptions;
};

const MockWorkspace = ({
  onDismiss, onUpdateSize, workspaceSize, // workspaceCustomSize
}) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const onRequestSizeChange = key => onUpdateSize(key);
  const sizeOptions = getOptions(activeBreakpoint);

  // TODO: Clone props?
  return (
    <WorkspaceImplementation
      currentSize={workspaceSize}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onDismiss}
    />
  );
};

MockWorkspace.propTypes = propTypes;

export default MockWorkspace;
