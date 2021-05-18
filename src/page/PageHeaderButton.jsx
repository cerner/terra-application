import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { KEY_RETURN, KEY_SPACE } from 'keycode-js';

import styles from './PageHeaderButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text for the button's aria-label and title attributes.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The icon to display for the associated action.
   */
  icon: PropTypes.element.isRequired,
  /**
   * Callback function for the selection of the button. If no function is
   * provided, the button will render as disabled.
   */
  onSelect: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Identifier for use during tests
   */
  testId: PropTypes.string,
};

const PageHeaderButton = ({
  ariaLabel,
  icon,
  onSelect,
  refCallback,
  testId,
}) => {
  const theme = React.useContext(ThemeContext);
  const buttonClassNames = cx(
    'page-header-button',
    theme.className,
  );

  return (
    <button
      type="button"
      className={buttonClassNames}
      onClick={onSelect ? (event) => {
        event.preventDefault();
        onSelect();
      } : undefined}
      onBlur={(event) => {
        event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
      }}
      onMouseDown={(event) => {
        event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
      }}
      data-focus-styles-enabled
      aria-label={ariaLabel}
      ref={refCallback}
      data-testid={testId}
      disabled={!onSelect}
    >
      <div aria-hidden className={cx('button-inner')}>
        <div
          className={cx('button-image')}
          title={ariaLabel}
        >
          {icon}
        </div>
      </div>
    </button>
  );
};

PageHeaderButton.propTypes = propTypes;

export default PageHeaderButton;
