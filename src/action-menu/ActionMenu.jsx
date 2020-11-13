import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const ActionMenu = ({
  children,
}) => {
  return (
    <ul
      className={cx('action-menu')}
      role="menu"
    >
      {children}
    </ul>
  );
};

ActionMenu.propTypes = propTypes;
ActionMenu.defaultProps = defaultProps;

export default ActionMenu;
