import React from 'react';
import PropTypes from 'prop-types';
import Workspace, { WorkspaceItem } from '../../workspace';
import PrimaryNavigationWorkspaceitem from './PrimaryNavigationWorkspaceItem';

const propTypes = {
  /**
   * Callback function triggering when the workspace size changes.
   */
  onSizeChange: PropTypes.func,
  /**
   * Callback function triggering when the presentation state changes.
   */
  onPresentationStateChange: PropTypes.func,
  /**
   * Callback function triggering when the active.
   */
  onActiveItemChange: PropTypes.func,
  /**
   * The string key linked to the action workspace.
   */
  initialActiveItemKey: PropTypes.string.isRequired,
  /**
   * Child content to be placed within the main content region.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the workspace should initially display as open.
   */
  initialIsOpen: PropTypes.bool,
  /**
   * The size string value matching the active size option.
   */
  initialSize: PropTypes.object,
  /**
   * @private
   * Id string to apply to the workspace
   */
  id: PropTypes.string.isRequired,
  /**
   * @private
   * Whether or not the workspace is open
   */
  isOpen: PropTypes.bool,
  /**
   * @private
   * Function callback i.e. `onRequest(event)`
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * Whether or not the workspace is present as an overlay
   */
  isPresentedAsOverlay: PropTypes.bool,
  /**
   * @private
   * Numeric scale value ranging from `0.0 - 1.0` as the minimum to maximum size for the workspace
   */
  sizeScalar: PropTypes.number,
  /**
   * @private
   * The string representation of the workspace size
   */
  activeSize: PropTypes.string,
  /**
   * @private
   * Array of objects containing key/text pairs for the available size options
   */
  sizeOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * @private
   * Function callback i.e. `onRequestSizeChange(size)`
   */
  onRequestSizeChange: PropTypes.func,
};

const PrimaryNavigationWorkspace = ({
  // consumer props
  onSizeChange,
  onPresentationStateChange,
  onActiveItemChange,
  initialActiveItemKey,
  children,
  // These props are read by the parent to determine the controlled values to pass down.
  initialIsOpen, // eslint-disable-line no-unused-vars, react/no-unused-prop-types
  initialSize, // eslint-disable-line no-unused-vars, react/no-unused-prop-types

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
  const [activeItemKey, setActiveItemKey] = React.useState(initialActiveItemKey);

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
      id={id}
      activeItemKey={activeItemKey}
      onRequestActivate={itemKey => {
        setActiveItemKey(itemKey);
      }}
      activeSize={activeSize}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
      dismissButtonIsVisible={isPresentedAsOverlay}
      isPresentedAsOverlay={isPresentedAsOverlay}
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

PrimaryNavigationWorkspace.propTypes = propTypes;
PrimaryNavigationWorkspace.Item = PrimaryNavigationWorkspaceitem;

export default PrimaryNavigationWorkspace;
