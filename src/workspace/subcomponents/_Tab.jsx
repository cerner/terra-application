import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function triggering on selection.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The z-index style to apply to the tab based upon order and state.
   */
  zIndex: PropTypes.number,
};

const defaultProps = {
  isSelected: false,
};

const Tab = ({
  id,
  associatedPanelId,
  index,
  isSelected,
  label,
  metaData,
  onBlur,
  onFocus,
  onSelect,
  tabIds,
  zIndex,
  ...customProps
}) => {
  const attributes = {};
  const tabClassNames = cx([
    'tab',
    { 'is-active': isSelected },
    attributes.className,
  ]);

  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(event, metaData);
    } else {
      handleArrows(event, index, tabIds);
    }
  }

  function onClick(event) {
    onSelect(event, metaData);
  }

  if (onSelect) {
    attributes.tabIndex = isSelected ? 0 : -1;
    attributes.onClick = onClick;
    attributes.onKeyDown = onKeyDown;
  }
  attributes['aria-selected'] = isSelected;
  attributes.style = { zIndex };

  return (
    <div
      {...customProps}
      {...attributes}
      id={id}
      aria-controls={associatedPanelId}
      role="tab"
      className={tabClassNames}
      title={label}
    >
      <div className={cx('inner')}>
        <span className={cx('label')}>{label}</span>
      </div>
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
