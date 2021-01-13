import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import {
  handleMoreButtonArrows,
} from './_TabUtils';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The index of the first hidden item in the dropdown.
   */
  hiddenIndex: PropTypes.number.isRequired,
  /**
   * Whether or not a hidden tab is active.
   */
  isActive: PropTypes.bool,
  /**
   * Whether or not the associated dropdown is open.
   */
  isActive: PropTypes.bool,
  /**
   * Blur callback function.
   */
  onBlur: PropTypes.func,
  /**
   * Selection callback function.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The z-index style to apply to the button based upon order and state.
   */
  zIndex: PropTypes.number,
};

const MoreButton = ({
  hiddenIndex,
  isActive,
  isOpen,
  onBlur,
  onSelect,
  refCallback,
  tabIds,
  zIndex,
}) => {
  const theme = React.useContext(ThemeContext);

  function onKeyDown(event) {
    handleMoreButtonArrows(event, hiddenIndex, tabIds);
  }

  const handleOnMouseDown = event => {
    event.currentTarget.setAttribute('tabindex', '-1');
  };

  const handleOnBlur = event => {
    event.currentTarget.removeAttribute('tabindex');
    if (onBlur) {
      onBlur(event);
    }
  };

  /* eslint-disable react/forbid-dom-props */
  return (
    <div
      aria-hidden
      role="button"
      ref={refCallback}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      onBlur={handleOnBlur}
      onMouseDown={handleOnMouseDown}
      className={cx('tab-menu', { 'is-active': isActive }, theme.className)}
      data-terra-tabs-menu
      style={{ zIndex: isOpen ? '100' : zIndex }}
    >
      <div className={cx('before')} />
      <div className={cx('inner')}>
        <IconCaretDown />
      </div>
      <div className={cx('after')} />
    </div>
  );
  /* eslint-disable react/forbid-dom-props */
};

MoreButton.propTypes = propTypes;

export default MoreButton;
