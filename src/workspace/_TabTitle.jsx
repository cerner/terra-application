import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';

import styles from './TabTitle.module.scss';

const cx = classNames.bind(styles);

const TabTitle = ({ actions, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  const createList = items => {
    return (
      <ul className={cx('list')}>
        {items.map((item, index) => (
          <li
            className={cx('item', { 'is-actionable' : item.onAction && !item.items })}
            key={item.key}
            onClick={item.onAction}
          >
            {item.items && item.items.length ? createList(item.items) : item.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={cx('title-bar')}>
      <div className={cx('title')}>
        {children}
      </div>
      <div className={cx('actions')}>
        {actions && actions.length ? (
          <>
            <button onClick={() => setIsOpen(!isOpen)} ref={buttonRef} key="lobster">Actions</button>
            <Popup
              isOpen={isOpen}
              targetRef={() => buttonRef.current}
              onRequestClose={() => setIsOpen(false)}
              contentHeight="auto"
              contentWidth="auto"
            >
              {createList(actions)}
            </Popup>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TabTitle;
