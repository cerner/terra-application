import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable no-unused-vars, react/no-unused-prop-types
const propTypes = {
  /**
   * Key to match with the activeItemKey to handle the display of selection.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * Text to be displayed on the item or as it's aria-label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onRequestActive.
   */
  metaData: PropTypes.object,
  /**
   * The render block for the workspace item
   */
  render: PropTypes.func,
};

const PrimaryNavigationWorkspaceItem = () => <div />;

PrimaryNavigationWorkspaceItem.propTypes = propTypes;

export default PrimaryNavigationWorkspaceItem;
