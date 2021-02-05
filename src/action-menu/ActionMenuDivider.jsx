import React from 'react';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const ActionMenuDivider = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <li
      className={cx('action-divider', theme.className)}
      aria-hidden
    >
      <div className={cx('line')} />
    </li>
  );
};

export default ActionMenuDivider;
