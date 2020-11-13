import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './utils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  onAction: PropTypes.func,
  onArrow: PropTypes.func,
};

const ActionMenuLink = ({
  children,
  isDisabled,
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
      role="none"
      className={cx('action-link', 'is-disabled')}
    >
      <a
        {...attrs}
        role="menuitem"
        onClick={onAction}
        onKeyDown={generateOnKeyDown('derp', onAction, onArrow)}
        onBlur={enableFocusStyles}
        onMouseDown={disableFocusStyles}
        data-focus-styles-enabled
      >
        {children}
      </a>
    </li>
  );
};

ActionMenuLink.propTypes = propTypes;

export default ActionMenuLink;
