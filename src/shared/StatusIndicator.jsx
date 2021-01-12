import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';
import Divider from 'terra-divider';

import StatusIndicatorButton from './StatusIndicatorButton';

import styles from './StatusIndicator.module.scss';

const cx = classNamesBind.bind(styles);

const StatusViewVariants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
};

const propTypes = {
  /**
   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,
  /**
   * The actions to render within the StatusIndicator.
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

const StatusIndicator = ({
  message,
  variant,
  children,
}) => {
  const theme = React.useContext(ThemeContext);

  let glyphSection;
  if (variant) {
    glyphSection = (
      <div className={cx('glyph')}>
        <div className={cx(variant, 'glyph-icon')} />
      </div>
    );
  }

  let defaultTitle;
  if (variant) {
    defaultTitle = <FormattedMessage id={`Terra.status-view.${variant}`} />;
  }

  // Custom title takes precedence
  let titleSection;
  if (defaultTitle) {
    titleSection = (
      <p className={cx('title')}>
        {defaultTitle}
      </p>
    );
  }

  let messageSection;
  if (message) {
    messageSection = (
      <p className={cx('message')}>
        {message}
      </p>
    );
  }

  let actionSection;
  if (children) {
    actionSection = (
      <div className={cx('actions')}>
        {React.Children.map(children, (child) => {
          if (child.type !== StatusIndicatorButton) {
            throw new Error('[terra-application] Unsupported child type detected. Only ');
          }

          return child;
        })}
      </div>
    );
  }

  let dividerSection;
  if (titleSection && (messageSection || actionSection)) {
    dividerSection = (
      <div className={cx('divider')}>
        <Divider />
      </div>
    );
  }

  return (
    <div className={cx('outer-view', theme.className)}>
      <div className={cx('top-space')} />
      <div className={cx('inner-view')}>
        {glyphSection}
        {titleSection}
        {dividerSection}
        {messageSection}
        {actionSection}
      </div>
      <div className={cx('bottom-space')} />
    </div>
  );
};

StatusIndicator.propTypes = propTypes;
export default StatusIndicator;
export { StatusViewVariants };
