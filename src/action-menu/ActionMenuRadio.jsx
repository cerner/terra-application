import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './utils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onAction: PropTypes.func,
  onArrow: PropTypes.func,
};

const ActionMenu = ({
  children,
  isDisabled,
  isChecked,
  onAction,
  onArrow,
}) => {
  const attrs = {};
  if (isDisabled) {
    attrs['aria-disabled'] = true;
  } else {
    attrs.tabIndex = '-1';
    attrs.onClick = onAction;
    attrs.onKeyDown = generateOnKeyDown('derp', onAction, onArrow);
    attrs.onBlur = enableFocusStyles;
    attrs.onMouseDown = disableFocusStyles;
    attrs['data-focus-styles-enabled'] = true;
  }

  return (
    <li
      {...attrs}
      className={cx('action-radio', 'is-checked', 'is-disabled')}
      role="menuitemradio"
      aria-checked={isChecked}
      onClick={onSelect}
      onKeyDown={generateKeyDownSelection(onSelect)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      data-focus-styles-enabled
    >
      <div className={cx('checkbox')} />
      <div className={cx('content')}>
        {children}
      </div>
    </li>
  );
};

ActionMenu.propTypes = propTypes;

export default ActionMenu;
