import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './TabHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const TabHeader = ({
  children,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('header', theme.className)}>
      <div className={cx('title')}>
        {children}
      </div>
    </div>
  );
};

TabHeader.propTypes = propTypes;

export default TabHeader;
