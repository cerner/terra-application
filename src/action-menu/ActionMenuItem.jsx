import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actionKey: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onAction: PropTypes.func,
  onArrow: PropTypes.func,
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
      className={cx('action-checkbox', { 'is-disabled': isDisabled })}
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