import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toolbar from 'terra-toolbar';

import styles from './PageToolbar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const PageToolbar = ({ children }) => (
  <Toolbar className={cx('page-toolbar')}>
    {children}
  </Toolbar>
);

PageToolbar.propTypes = propTypes;

export default PageToolbar;
