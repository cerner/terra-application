import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toolbar from 'terra-toolbar';

import styles from './PageToolbar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content alignment. Align to start, end, or center.
   */
  align: PropTypes.oneOf(['start', 'end', 'center']),
  /**
   * The elements to render within the toolbar.
   */
  children: PropTypes.node,
};

/**
 * PageToolbar adds Page-specific styling to the default Terra toolbar.
 */
const PageToolbar = ({ align, children }) => (
  <Toolbar className={cx('page-toolbar')} align={align}>
    {children}
  </Toolbar>
);

PageToolbar.propTypes = propTypes;

export default PageToolbar;
