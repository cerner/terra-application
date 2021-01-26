import React from 'react';
import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const ActionMenuDivider = () => (
  <li
    className={cx('action-divider')}
    role="none"
  >
    <div className={cx('line')} />
  </li>
);

export default ActionMenuDivider;
