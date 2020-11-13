import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const ActionMenuGroup = ({
  children,
}) => {
  return (
    <li
      role="menuitem"
      className={cx('action-item')}
      tabIndex="0"
    >
      <ul
        className={cx('action-sub-menu')}
        role="menu"
      >
        {children}
      </ul>
    </li>
  );
};

ActionMenuGroup.propTypes = propTypes;

export default ActionMenuGroup;
