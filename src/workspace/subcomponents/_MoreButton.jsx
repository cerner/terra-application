import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import {
  enableFocusStyles,
  disableFocusStyles,
} from './_TabUtils';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not a hidden tab is active.
   */
  isActive: PropTypes.bool,
  /**
   * Selection callback function.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape.isRequired,
  /**
   * The z-index style to apply to the button based upon order and state.
   */
  zIndex: PropTypes.number,
};

const MoreButton = ({
  intl,
  isActive,
  onSelect,
  refCallback,
  zIndex,
}) => {
  const theme = React.useContext(ThemeContext);
  const menuToggleText = 'More Tabs'; // TODO: translate

  const handleOnClick = (event) => {
    onSelect(event);
  };

  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      onSelect(event);
    }
  };

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <div
      aria-hidden
      role="button"
      ref={refCallback}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      className={cx('tab-menu', { 'is-active': isActive }, theme.className)}
      data-focus-styles-enabled
      data-terra-tabs-menu
      style={{ zIndex }}
    >
      <div className={cx('before')} />
      <div className={cx('inner')}>
        <IconCaretDown />
      </div>
      <div className={cx('after')} />
    </div>
    /* eslint-enable jsx-ally/no-static-element-interactions */
  );
};

MoreButton.propTypes = propTypes;

export default injectIntl(MoreButton);
