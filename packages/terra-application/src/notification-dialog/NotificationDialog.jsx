import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import Button from 'terra-button';
import ThemeContext from 'terra-theme-context';
import { tabbable } from 'tabbable';

import { ApplicationIntlContext } from '../application-intl';
import useLayerPortal from '../layer-manager/useLayerPortal';
import deferExecution from '../utils/defer-execution';

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
   * The variant of notification to be rendered. This renders the dialog with
   * the corresponding header and icon to the variant concept.
   */
  variant: PropTypes.oneOf(variants).isRequired,
  /**
   * The title to describe the high-level overview of why the notification
   * dialog is being displayed to the user. Use a title that relates directly to
   * the message/actions provided in the dialog.
   */
  dialogTitle: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at
   * the start of the notification dialog body. Don’t repeat the title verbatim.
   */
  startMessage: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at
   * the end of the notification dialog body. Don’t repeat the title verbatim.
   */
  endMessage: PropTypes.string,
  /**
   * The content to be inserted after `startMessage` and/or before `endMessage`
   * to provide more details to the user in the dialog body. Don’t repeat the
   * title verbatim.
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
   * Determines whether acceptAction, rejectAction or neither is emphasized.
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
     * The keyword used to represent & emphasis the intention of dialog message
     * that is being shown to the user.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as
     * the icon in the notification-dialog.
     */
    iconClassName: PropTypes.string,
  }),
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
    actionButtons.push((
      <Button
        key="accept"
        variant={emphasizedAction === 'accept' ? 'emphasis' : 'neutral'}
        text={acceptAction.text}
        onClick={acceptAction.onClick}
      />
    ));
  }

  if (rejectAction) {
    actionButtons.push((
      <Button
        key="reject"
        variant={emphasizedAction === 'reject' ? 'emphasis' : 'neutral'}
        text={rejectAction.text}
        onClick={rejectAction.onClick}
      />
    ));
  }

  return (
    <div className={cx('actions')}>
      {buttonOrder === 'acceptFirst' ? actionButtons : actionButtons.reverse()}
    </div>
  );
};

const useFocusTrap = (containerRef, initialFocusRef) => {
  React.useLayoutEffect(() => {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
      return;
    }

    const tabbableElements = tabbable(containerRef.current);
    if (tabbableElements.length) {
      deferExecution(() => tabbableElements[0].focus());
    }
  }, [containerRef, initialFocusRef]);

  React.useEffect(() => {
    const containerElement = containerRef.current;

    const handleFocusMovement = (event) => {
      if (event.keyCode === 9) {
        const tabbableElements = tabbable(containerElement);
        if (!tabbableElements.length) {
          return;
        }

        const indexOfActiveElement = tabbableElements.indexOf(document.activeElement);

        if (event.shiftKey) {
          if (indexOfActiveElement === -1) {
            tabbableElements[tabbableElements.length - 1].focus();
          } else {
            tabbableElements[indexOfActiveElement === 0 ? tabbableElements.length - 1 : indexOfActiveElement - 1].focus();
          }
        } else if (indexOfActiveElement === -1) {
          tabbableElements[0].focus();
        } else {
          tabbableElements[indexOfActiveElement === tabbableElements.length - 1 ? 0 : indexOfActiveElement + 1].focus();
        }

        event.preventDefault();
      }
    };

    containerElement.addEventListener('keydown', handleFocusMovement);

    return () => {
      containerElement.removeEventListener('keydown', handleFocusMovement);
    };
  }, [containerRef]);
};

const NotificationDialog = ({
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
}) => {
  const theme = React.useContext(ThemeContext);
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const { LayerPortal, layerId } = useLayerPortal({ layerType: 'notificationDialog' });
  const dialogContainerRef = React.useRef();

  useFocusTrap(dialogContainerRef);

  if (acceptAction === undefined && rejectAction === undefined) {
    throw new Error('Either the `acceptAction` or `rejectAction` props must be provided for Notification dialog');
  }

  if (variant === undefined) {
    throw new Error('The variant must be provided to the NotificationDialog');
  }

  const signalWord = variant === 'custom' ? custom.signalWord : applicationIntl.formatMessage({ id: `terraApplication.notificationDialog.${variant}` });

  const dialogClassNames = classNames(
    cx('notification-dialog', theme.className),
  );

  const signalWordElementId = `${layerId}-signal-word`;
  const titleElementId = `${layerId}-title`;

  return (
    <LayerPortal>
      <div className={cx('overlay')} />
      <div
        aria-labelledby={signalWordElementId}
        aria-describedby={dialogTitle ? titleElementId : signalWordElementId}
        role="alertdialog"
        className={dialogClassNames}
      >
        <div
          role="document"
          ref={dialogContainerRef}
        >
          <div className={cx('notification-dialog-inner-wrapper')}>
            <div className={cx('notification-dialog-container')}>
              <div className={cx('floating-header-background', variant)} />
              <div className={cx('header')}>
                <div className={cx('header-content')}>
                  <NotificationIcon variant={variant} iconClassName={custom.iconClassName} />
                  <div className={cx('header-container')}>
                    <div id={signalWordElementId} className={cx('signal-word')}>{signalWord}</div>
                    <div id={titleElementId} className={cx('title')}>{dialogTitle}</div>
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
        </div>
      </div>
    </LayerPortal>
  );
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;

export { ContentLayoutAsList };
export default NotificationDialog;
