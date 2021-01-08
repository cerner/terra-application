import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actionKey: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
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

const ActionMenuRadio = ({
  actionKey,
  icon,
  isDisabled,
  isChecked,
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

  /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
  return (
    <li
      {...attrs}
      className={cx('action-radio', { 'is-checked': isChecked }, { 'is-disabled': isDisabled })}
      role="menuitemradio"
      aria-checked={isChecked}
      data-action-menu-key={actionKey}
    >
      <span className={cx('checkbox')}>{isChecked ? <IconCheckmark /> : null}</span>
      <div className={cx('icon')}>{icon}</div>
      <div className={cx('content')}>
        {label}
      </div>
    </li>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */
};

ActionMenuRadio.propTypes = propTypes;
ActionMenuRadio.interactiveType = true;

export default ActionMenuRadio;
