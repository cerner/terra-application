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

const ActionMenuLink = ({
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
      role="none"
      className={cx('action-link', { 'is-disabled': isDisabled }, { 'indent': indentChildren })}
    >
      <a
        {...attrs}
        role="menuitem"
        data-action-menu-key={actionKey}
      >
        <div className={cx('icon')}>{icon}</div>
        <div className={cx('content')}>
          {label}
        </div>
      </a>
    </li>
  );
};

ActionMenuLink.propTypes = propTypes;

export default ActionMenuLink;
