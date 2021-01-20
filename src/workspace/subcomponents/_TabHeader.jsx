import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './TabHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content to display within the title area
   */
  children: PropTypes.node,
};

const TabHeader = ({
  children,
}) => {
  const theme = React.useContext(ThemeContext);

  // tabIndex of -1 ensure a focus location for the dropdown to navigate to with a screen reader.
  return (
    <div className={cx('header', theme.className)} role="header" tabIndex="-1">
      <div className={cx('title')}>
        {children}
      </div>
    </div>
  );
};

TabHeader.propTypes = propTypes;

export default TabHeader;
