import React from 'react';
import Tabs from '../../../workspace/Tabs';
import TabPage from '../../../workspace/TabPage';

const propTypes = {};

const Workspace = ({
  id,
  onSizeChange,
  onPresentationStateChange,
  initialSize,
  initialIsOpen,
  initialActiveTabKey,
  children,

  isOpen,
  onRequestClose,
  size,
  sizeOptions,
  onRequestSizeChange,
}) => {
  const [activeTabKey, setActiveTabKey] = React.useState(initialActiveTabKey);

  React.useEffect(() => {
    if (onSizeChange && size !== undefined) {
      onSizeChange(size);
    }
  }, [size, onSizeChange]);

  React.useEffect(() => {
    if (onPresentationStateChange) {
      onPresentationStateChange(isOpen);
    }
  }, [isOpen, onPresentationStateChange]);

  return (
    <Tabs
      id={id || 'test-id'}
      activeTabKey={activeTabKey}
      onRequestActivate={metaData => setActiveTabKey(metaData.key)}
      title="work space" // TODO: need proper title setup
      currentSize={size}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
    >
      {React.Children.map(children, (child) => (
        <TabPage
          tabKey={child.props.tabKey}
          label={child.props.label}
          metaData={child.props.metaData}
          render={child.props.render}
        />
      ))}
    </Tabs>
  );
};

Workspace.propTypes = propTypes;

export default Workspace;
