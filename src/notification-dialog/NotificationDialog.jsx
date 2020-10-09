import React from 'react';
import PropTypes from 'prop-types';
// import AbstractModal from 'terra-abstract-modal';
// import FocusTrap from 'focus-trap-react';
import Button from 'terra-button';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import LayerPortal from '../layers/LayerPortal';
import ModalOverlay from '../application-modal/_ModalOverlay';
import NotificationIcon from './_NotificationIcon';
import ContentLayoutAsList from './_ContentLayoutAsList';

import styles from './NotificationDialog.module.scss';

const cx = classNamesBind.bind(styles);

const variants = [
  'hazard-high',
  'hazard-medium',
  'hazard-low',
  'error',
  'custom',
];

const propTypes = {
  /**
   * The variant of notification to be rendered. This renders the dialog with the corresponding header and icon to the
   * variant concept.
   */
  variant: PropTypes.oneOf(variants).isRequired,
  /**
   * The title to describe the high-level overview of why the notification-dialog is being displayed to the user. Use a title that relates directly to the
   * message/actions provided in the dialog.
   */
  dialogTitle: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the start of the notification dialog body. Don’t repeat the title verbatim.
   */
  startMessage: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the end of the notification dialog body. Don’t repeat the title verbatim.
   */
  endMessage: PropTypes.string,
  /**
   *  The content to be inserted after `startMessage` and/or before `endMessage` to provide more details to the user in the dialog body. Don’t repeat the title verbatim.
   */
  content: PropTypes.node,
  /**
   * The button text and onclick values of the accept button.
   */
  acceptAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The button text and onclick values of the reject button.
   */
  rejectAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * Determines the order of notification action buttons.
   */
  buttonOrder: PropTypes.oneOf([
    'acceptFirst',
    'rejectFirst',
  ]),
  /**
   * Determines whether acceptAction, rejectAction or neither is emphasizedAction
   */
  emphasizedAction: PropTypes.oneOf([
    'none',
    'accept',
    'reject',
  ]),
  /**
   * The pieces to populate a notification-dialog when `variant="custom"`.
   */
  custom: PropTypes.shape({
    /**
     * The keyword used to represent & emphasis the intention of dialog message that is being shown to the user.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the notification-dialog.
     */
    iconClassName: PropTypes.string,
  }),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape,
};

const defaultProps = {
  buttonOrder: 'acceptFirst',
  emphasizedAction: 'none',
  custom: {},
};

const actionSection = (acceptAction, rejectAction, buttonOrder, emphasizedAction) => {
  if (!acceptAction && !rejectAction) {
    return null;
  }

  const actionButtons = [];

  if (acceptAction) {
    const buttonVariant = emphasizedAction === 'accept' ? { variant: 'emphasis' } : {};
    actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="accept" key="accept" text={acceptAction.text} onClick={acceptAction.onClick} />);
  }

  if (rejectAction) {
    const buttonVariant = emphasizedAction === 'reject' ? { variant: 'emphasis' } : {};
    actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="reject" key="reject" text={rejectAction.text} onClick={rejectAction.onClick} />);
  }

  return (
    <div className={cx('actions')}>
      {buttonOrder === 'acceptFirst' ? actionButtons : actionButtons.reverse()}
    </div>
  );
};

const NotificationDialog = (props) => {
  const theme = React.useContext(ThemeContext);
  const modalContainerRef = React.useRef();
  const {
    dialogTitle,
    startMessage,
    endMessage,
    content,
    acceptAction,
    rejectAction,
    variant,
    buttonOrder,
    emphasizedAction,
    custom,
    intl,
  } = props;

  React.useEffect(() => {
    setTimeout(() => {
      // Handle focus shift for VoiceOver on iOS
      if ('ontouchstart' in window) {
        modalContainerRef.current.querySelector('[data-terra-abstract-modal-begin]').focus();
      } else {
        // Shift focus to modal dialog
        modalContainerRef.current.focus();
      }
    }, 0);
  }, []);

  if (acceptAction === undefined && rejectAction === undefined) {
    throw new Error('Either the `acceptAction` or `rejectAction` props must be provided for Notification dialog');
  }

  if (variant === undefined) {
    throw new Error('The variant must be provided to the Notification dialog');
  }

  const signalWord = variant === 'custom' ? custom.signalWord : intl.formatMessage({ id: `Terra.notification.dialog.${variant}` });

  const dialogClassNames = classNames(
    cx('notification-dialog', theme.className),
  );

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <LayerPortal type="notification-dialog">
      <>
        <div
          aria-label={signalWord}
          aria-labelledby="notification-dialog-signal-word"
          aria-describedby={dialogTitle ? 'notification-dialog-title' : 'notification-dialog-signal-word'}
          role="alertdialog"
          className={dialogClassNames}
          style={{ zIndex: '2' }}
          tabIndex={platformIsiOS ? '-1' : '0'}
          ref={modalContainerRef}
        >
          <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
            {text => (
              <VisuallyHiddenText data-terra-abstract-modal-begin tabIndex="-1" text={text} />
            )}
          </FormattedMessage>
          <div className={cx('notification-dialog-inner-wrapper')}>
            <div className={cx('notification-dialog-container')} tabIndex="0" data-terra-notification-dialog>
              <div className={cx(['floating-header-background', variant])} />
              <div className={cx(['header'])}>
                <div className={cx(['header-content'])}>
                  <NotificationIcon variant={variant} iconClassName={custom.iconClassName} />
                  <div className={cx('header-container')}>
                    <div id="notification-dialog-signal-word" className={cx('signal-word')}>{signalWord}</div>
                    <div id="notification-dialog-title" className={cx('title')}>{dialogTitle}</div>
                  </div>
                </div>
              </div>
              <div className={cx('body')}>
                {(startMessage)
                && <div className={cx('message')}>{(startMessage)}</div>}
                {content
                && <div className={cx('message')}>{content}</div>}
                {endMessage
                && <div className={cx('message')}>{endMessage}</div>}
              </div>
              <div className={cx('footer')}>
                {actionSection(
                  acceptAction,
                  rejectAction,
                  buttonOrder,
                  emphasizedAction,
                )}
              </div>
            </div>
          </div>
          <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
            {text => (
              <VisuallyHiddenText text={text} />
            )}
          </FormattedMessage>
        </div>
      </>
    </LayerPortal>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;

export { ContentLayoutAsList };
export default injectIntl(NotificationDialog);
