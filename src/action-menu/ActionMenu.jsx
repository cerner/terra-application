import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import {
  generateOnKeyDown,
  itemByDirection,
  itemByChar,
  flattenActionItems,
} from './_ActionUtils';

import styles from './ActionMenu.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const ActionMenu = ({
  ariaLabel,
  children,
  ...customProps
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
    const item = itemByDirection(key, items, direction);
    if (item) {
      focusItem(item);
    }
  };

  const onChar = (key, char) => {
    const item = itemByChar(key, items, char);
    if (item) {
      focusItem(item);
    }
  };

  const theme = React.useContext(ThemeContext);
  const menuClassNames = classNames(
    cx(
      'action-menu',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <ul
      {...customProps}
      className={menuClassNames}
      role="menu"
      tabIndex="0"
      aria-label={ariaLabel}
      ref={menuRef}
      onKeyDown={generateOnKeyDown(null, null, onArrow, onChar)}
    >
      {React.Children.map(children, child => {
        if (!child) {
          return undefined;
        }
        return React.cloneElement(
          child,
          { onArrow, onChar },
        );
      })}
    </ul>
  );
};

ActionMenu.propTypes = propTypes;

export default ActionMenu;
