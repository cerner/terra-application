import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  ariaLabel: PropTypes.string,isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const unpackKeys = children => {
  const newKeys = [];
  const newData = {};
  React.Children.forEach(children, child => {
    if (child.props.actionKey) {
      newData[child.props.actionKey] = newKeys.length;
      newKeys.push({
        actionKey: child.props.actionKey,
        isDisabled: child.props.isDisabled,
      });
    } else if (child.props.children)  {
      newKeys.push(...getKeys(child.props.children));
    }
  });
  return { keys: newKeys, keyData: newData };
}

// const getNextKey = (key, direction) => {
//   const currentKey = keys[data[key]];
// };

const ActionMenu = ({
  children,
}) => {
  const menuRef = useRef();
  const { keys, keyData } = unpackKeys(children);

  const getNextKey = (key, direction) => {
    const currentKey = keys[keyData[key]];
  };

  const onArrow = (key, direction) => {
    const nextKey = getNextKey(key, direction);
    const element = menuRef.current ? menuRef.current.getElementById(nextKey) : undefined;
    if (element) {
      element.focus();
    }
  };
  
  const onChar = (key, char) => {
    //
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
