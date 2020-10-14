import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';


import styles from './TabTitle.module.scss';

const cx = classNames.bind(styles);

const TabTitle = ({ actions, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  const createList = (list, isRoot) => {
    return (
      <>
        {!isRoot ? <hr aria-hidden="true" />: null}
        <ul className={cx('list')} key={list.key}>
          {list.items.map((item, index) => (
            <li
              className={cx('item', { 'is-actionable' : item.onAction && !item.items })}
              key={item.key}
              onClick={item.onAction}
            >
              {!isRoot ? <span style={{ opacity: !item.isSelected ? 0 : 1, marginRight: '5px' }}><IconCheckmark /></span> : null}
              {item.items && item.items.length ? createList(item) : item.title}
            </li>
          ))}
        </ul>
      </>
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
              {createList({ key: 'list-key', items: actions }, true)}
            </Popup>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TabTitle;
