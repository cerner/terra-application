import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../common-page-styles.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const DemoPageContent = ({ children }) => (
  <div className={cx('page-body')}>
    {children}
    <p>Note: Page content utilizes placeholder styles and is built for demonstration purposes only.</p>
  </div>
);

DemoPageContent.propTypes = propTypes;

export default DemoPageContent;
