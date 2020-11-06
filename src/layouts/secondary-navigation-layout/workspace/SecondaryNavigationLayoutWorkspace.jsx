import React from 'react';
import Tabs from '../../../workspace/Tabs';
import TabPage from '../../../workspace/TabPage';

const propTypes = {};

const SecondaryNavigationLayoutWorkspace = ({
  id,
  onSizeChange,
  onPresentationStateChange,
  onActiveTabChange,
  initialSize,
  initialIsOpen,
  initialActiveTabKey,
  children,

  isOpen,
  onRequestClose,
  sizeScalar,
  activeSize,
  sizeOptions,
  onRequestSizeChange,
}) => {
  const [activeTabKey, setActiveTabKey] = React.useState(initialActiveTabKey); // TODO do we need to externalize this for manipulation

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
    if (onActiveTabChange) {
      onActiveTabChange(activeTabKey);
    }
  }, [activeTabKey, onActiveTabChange]);

  return (
    <Tabs
      id={id || 'test-id'}
      activeTabKey={activeTabKey}
      onRequestActivate={metaData => setActiveTabKey(metaData.key)}
      title="work space" // TODO: need proper title setup
      activeSize={activeSize}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
      metaData={{
        mean: 'hi mom',
      }}
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

SecondaryNavigationLayoutWorkspace.propTypes = propTypes;

export default SecondaryNavigationLayoutWorkspace;
