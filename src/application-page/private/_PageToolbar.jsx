import React from 'react';
import classNames from 'classnames/bind';

import styles from './PageToolbar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {};

const PageToolbar = ({
  title,
  children,
}) => (
  <div className={cx('page-toolbar')}>
    <div>{title}</div>
    {React.Children.map(children, (child) => (
      <div className={cx('toolbar-item')}>
        {child}
      </div>
    ))}
  </div>
);

PageToolbar.propTypes = propTypes;

export default PageToolbar;
