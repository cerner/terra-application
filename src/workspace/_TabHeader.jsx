import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import Menu from 'terra-menu';
import IconRollup from 'terra-icon/lib/icon/IconRollup';
import { actionsPropType } from './propTypes/propTypes';

import styles from './TabHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  actions: actionsPropType,
  children: PropTypes.node,
  // isLoading?
};

const createOptions = (options, onDismissMenu) => {
  return options.map(option => (
    <Menu.Item
      key={option.key}
      text={option.label}
      isSelected={option.isSelected}
      isSelectable
      isDisabled={option.isDisabled}
      onClick={() => { onDismissMenu(); option.onAction(); }}
    />
  ));
};

const TabHeader = ({ actions, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  return (
    <div className={cx('header-bar')}>
      <div className={cx('header')}>
        {children}
      </div>
      <div className={cx('actions')}>
        {actions && actions.length ? (
          <>
            <Button
              icon={<IconRollup />}
              text="Actions" // TODO INTL + Title?
              onClick={() => setIsOpen(true)}
              variant={'utility'}
              refCallback={node => buttonRef.current = node}
            />
            {isOpen ? (
              <Menu
                isOpen
                targetRef={() => buttonRef.current}
                onRequestClose={() => { setIsOpen(false); }}
                contentWidth="240"
              >
                {createOptions(actions, () => setIsOpen(false))}
              </Menu>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

TabHeader.propTypes = propTypes;

export default TabHeader;
