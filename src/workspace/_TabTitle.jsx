import React from 'react';
import classNames from 'classnames/bind';

import styles from './TabTitle.module.scss';

const cx = classNames.bind(styles);

const TabTitle = ({ actions, children }) => {
  return (
    <div className={cx('title-bar')}>
      <div className={cx('title')}>
        {children}
      </div>
      <div className={cx('actions')}>
        {actions}
      </div>
    </div>
  );
};

export default TabTitle;
