import React from 'react';
import Workspace from '../../../workspace/Workspace';
import WorkspaceItem from '../../../workspace/WorkspaceItem';

const propTypes = {};

const SecondaryNavigationLayoutWorkspace = ({
  // consumer props
  onSizeChange,
  onPresentationStateChange,
  onActiveItemChange,
  initialActiveItemKey,
  children,

  // private injected props
  id,
  isOpen,
  onRequestClose,
  isPresentedAsOverlay,
  sizeScalar,
  activeSize,
  sizeOptions,
  onRequestSizeChange,
}) => {
  const [activeItemKey, setActiveItemKey] = React.useState(initialActiveItemKey); // TODO do we need to externalize this for manipulation

  React.useEffect(() => {
    if (onSizeChange && sizeScalar !== undefined) {
      onSizeChange(sizeScalar);
    }
  }, [sizeScalar, onSizeChange]);

  React.useEffect(() => {
    if (onPresentationStateChange) {
      onPresentationStateChange(isOpen);
    }
  }, [isOpen, onPresentationStateChange]);

  React.useEffect(() => {
    if (onActiveItemChange) {
      onActiveItemChange(activeItemKey);
    }
  }, [activeItemKey, onActiveItemChange]);

  return (
    <Workspace
      id={id || 'test-id'}
      activeItemKey={activeItemKey}
      onRequestActivate={(itemKey, metaData) => {
        setActiveItemKey(itemKey);
      }}
      activeSize={activeSize}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
      dismissButtonIsVisible={isPresentedAsOverlay}
    >
      {React.Children.map(children, (child) => (
        <WorkspaceItem
          itemKey={child.props.itemKey}
          label={child.props.label}
          metaData={child.props.metaData}
          render={child.props.render}
        />
      ))}
    </Workspace>
  );
};

SecondaryNavigationLayoutWorkspace.propTypes = propTypes;

export default SecondaryNavigationLayoutWorkspace;
