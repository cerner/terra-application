import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
  itemFromArrowKey,
  itemFromChar,
  flattenActionItems,
} from './_ActionUtils';

import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  ariaLabel: PropTypes.string,isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const ActionMenu = ({
  children,
}) => {
  const menuRef = useRef();
  const items = flattenActionItems(children);

  const focusItem = item => {
    if (!item || !menuRef.current) {
      return;
    }

    const element = menuRef.current.querySelector(`[data-action-menu-key="${item.actionKey}"]`);
    if (element) {
      element.focus();
    }
  };

  const onArrow = (key, direction) => {
    const item = itemFromArrowKey(key, items, direction);
    if (item) {
      focusItem(item);
    }
  };
  
  const onChar = (key, char) => {
    const item = itemFromChar(key, items, char);
    if (item) {
      focusItem(item);
    }
  };

  return (
    <ul
      className={cx('action-menu')}
      role="menu"
      tabIndex="0"
      aria-label={ariaLabel}
      ref={menuRef}
    >
      {React.Children.map(children, child => React.cloneElement(
        child,
        { onArrow, onChar }
      ))}
    </ul>
  );
};

ActionMenu.propTypes = propTypes;
ActionMenu.defaultProps = defaultProps;

export default ActionMenu;
