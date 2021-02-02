import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconGapChecking from 'terra-icon/lib/icon/IconGapChecking';
import IconDiamondSymbol from 'terra-icon/lib/icon/IconDiamondSymbol';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import { ApplicationIntlContext } from '../../application-intl';

import useElementSize from './useElementSize';

import styles from './NotificationBannerView.module.scss';

const cx = classNamesBind.bind(styles);

const NotificationTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  UNSATISFIED: 'unsatisfied',
  UNVERIFIED: 'unverified',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert to give the user an easy way
   * to accomplish a task to resolve the notification.
   */
  action: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for an alert of type custom. This will not be used for any other alert types.
   */
  customIcon: PropTypes.element,
  /**
   * Sets an author-defined class, to control the status bar color to be used for an alert of type custom.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/CSS?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  customColorClass: PropTypes.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified`, `advisory`,
   * `info`, `success`, or `custom`.
   */
  type: PropTypes.oneOf([
    NotificationTypes.ALERT,
    NotificationTypes.ERROR,
    NotificationTypes.WARNING,
    NotificationTypes.UNSATISFIED,
    NotificationTypes.UNVERIFIED,
    NotificationTypes.ADVISORY,
    NotificationTypes.INFO,
    NotificationTypes.SUCCESS,
    NotificationTypes.CUSTOM,
  ]),
};

const defaultProps = {
  customColorClass: 'custom-default-color',
  type: NotificationTypes.ALERT,
};

const getAlertIcon = (type, customIcon) => {
  switch (type) {
    case NotificationTypes.ALERT:
      return (<span className={cx('icon')}><IconAlert /></span>);
    case NotificationTypes.ERROR:
      return (<span className={cx('icon')}><IconError /></span>);
    case NotificationTypes.WARNING:
      return (<span className={cx('icon')}><IconWarning /></span>);
    case NotificationTypes.UNSATISFIED:
      return (<span className={cx('icon', 'unsatisfied-icon')}><IconGapChecking /></span>);
    case NotificationTypes.UNVERIFIED:
      return (<span className={cx('icon', 'unverified-icon')}><IconDiamondSymbol /></span>);
    case NotificationTypes.ADVISORY:
      return null;
    case NotificationTypes.INFO:
      return (<span className={cx('icon')}><IconInformation /></span>);
    case NotificationTypes.SUCCESS:
      return (<span className={cx('icon')}><IconSuccess /></span>);
    case NotificationTypes.CUSTOM:
      return (<span className={cx('icon')}>{customIcon}</span>);
    default:
      return null;
  }
};

const shouldUpdateFromElementSizeChange = (newSize, oldSize) => (newSize.activeBreakpoint !== oldSize.activeBreakpoint);

const getTitleStringIdForType = (type) => (type === NotificationTypes.CUSTOM ? undefined : `terraApplication.notificationBanner.${type}`);

const NotificationBannerView = ({
  action,
  children,
  customIcon,
  customColorClass,
  onDismiss,
  title,
  type,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const intl = React.useContext(ApplicationIntlContext);
  const containerRef = React.useRef();
  const { activeBreakpoint } = useElementSize(containerRef, shouldUpdateFromElementSizeChange);
  const [isNarrow, setIsNarrow] = useState();

  React.useLayoutEffect(() => {
    setIsNarrow(activeBreakpoint === 'tiny');
  }, [activeBreakpoint]);

  const defaultTitle = type === NotificationTypes.CUSTOM ? '' : intl.formatMessage({ id: getTitleStringIdForType(type) });
  const alertClassNames = classNames(
    cx(
      'notification-banner',
      type,
      { narrow: isNarrow },
      { wide: !isNarrow },
      theme.className,
    ),
    customProps.className,
    { [`${customColorClass}`]: customColorClass && type === NotificationTypes.CUSTOM },
  );

  const bodyClassNameForParent = cx(
    'body',
    { 'body-std': !isNarrow || (isNarrow && !onDismiss && !action) },
    { 'body-narrow': isNarrow && (onDismiss || action) },
  );

  let dismissButton;
  if (onDismiss) {
    dismissButton = <Button text={intl.formatMessage({ id: 'terraApplication.notificationBanner.dismiss' })} onClick={onDismiss} />;
  }

  let actionsSection;
  if (onDismiss || action) {
    const actionsClassName = cx('actions', { 'actions-custom': type === NotificationTypes.CUSTOM });
    actionsSection = (
      <div className={actionsClassName}>
        {action}
        {dismissButton}
      </div>
    );
  }

  const alertSectionClassName = cx('section', { 'section-custom': type === NotificationTypes.CUSTOM });
  const alertMessageContent = (
    <div className={alertSectionClassName}>
      {(title || defaultTitle) && <strong className={cx('title')}>{title || defaultTitle}</strong>}
      {children}
    </div>
  );

  return (
    <div {...customProps} className={alertClassNames} ref={containerRef}>
      <div className={bodyClassNameForParent}>
        {getAlertIcon(type, customIcon)}
        {alertMessageContent}
      </div>
      {actionsSection}
    </div>
  );
};

NotificationBannerView.propTypes = propTypes;
NotificationBannerView.defaultProps = defaultProps;

export default NotificationBannerView;
export { getTitleStringIdForType, NotificationTypes };
