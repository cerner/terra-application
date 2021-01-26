import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string used as an identifier for keyboard navigation.
   */
  actionKey: PropTypes.string.isRequired,
  /**
   * Optional icon to place with the item.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the item is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * The label text to display for the item.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for action element selection.
   * Returns the event e.e. onAction(event).
   */
  onAction: PropTypes.func,
  /**
   * @private
   * Whether or not indent children based on presence of a selectable item.
   */
  indentChildren: PropTypes.bool,
  /**
   * @private
   * Callback function for event.
   */
  onArrow: PropTypes.func,
  /**
   * @private
   * Callback function for event.
   */
  onChar: PropTypes.func,
};

const ActionMenuItem = ({
  actionKey,
  icon,
  isDisabled,
  label,
  onAction,
  onArrow,
  onChar,
  indentChildren,
}) => {
  const attrs = {};
  if (isDisabled) {
    attrs['aria-disabled'] = true;
  } else {
    attrs.tabIndex = '-1';
    attrs.onClick = onAction;
    attrs.onKeyDown = generateOnKeyDown(actionKey, onAction, onArrow, onChar);
    attrs.onBlur = enableFocusStyles;
    attrs.onMouseDown = disableFocusStyles;
    attrs['data-focus-styles-enabled'] = true;
  }

  return (
    <li
      {...attrs}
      className={cx('action-item', { 'is-disabled': isDisabled }, { 'is-actionable': !isDisabled }, { indent: indentChildren })}
      role="menuitem"
      data-action-menu-key={actionKey}
    >
      <div className={cx('icon')}>{icon}</div>
      <div className={cx('content')}>
        {label}
      </div>
    </li>
  );
};

ActionMenuItem.propTypes = propTypes;

export default ActionMenuItem;
