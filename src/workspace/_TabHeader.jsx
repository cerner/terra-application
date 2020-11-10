import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { actionsPropType} from './propTypes/propTypes';

import styles from './TabHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actions: actionsPropType,
  children: PropTypes.node,
};

const TabHeader = ({ actions, children }) => {
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
              {item.items && item.items.length ? createList(item) : item.label}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className={cx('header-bar')}>
      <div className={cx('header')}>
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

TabHeader.propTypes = propTypes;

export default TabHeader;
