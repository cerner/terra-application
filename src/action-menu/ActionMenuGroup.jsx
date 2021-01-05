import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  /**
   * @private
   * Callback function for event.
   */
  onArrow: PropTypes.func,
  /**
   * @private
   * Callback function for event.
   */
  onChar: PropTypes.func,
};

const ActionMenuGroup = ({
  children,
  onArrow,
  onChar,
}) => {
  return (
    <li
      role="menuitem"
    >
      <ul
        className={cx('action-sub-menu')}
        role="menu"
      >
        {React.Children.map(children, child => {
          if (!child) {
            return;
          }
          return React.cloneElement(
            child,
            { onArrow, onChar }
          );
        })}
      </ul>
    </li>
  );
};

ActionMenuGroup.propTypes = propTypes;

export default ActionMenuGroup;
