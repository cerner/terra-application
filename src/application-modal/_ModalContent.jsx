import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer';
import Scroll from 'terra-scroll';

import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import ApplicationConceptBannerContext from '../application-container/private/ApplicationConceptBannerContext';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

import ModalHeader from './_ModalHeader';
import styles from './ModalContent.module.scss';

const cx = classNamesBind.bind(styles);

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

const propTypes = {
  title: PropTypes.string,
  toolbar: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.node,
  refCallback: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    PropTypes.shape({
      height: PropTypes.oneOf([240, 420, 600, 870, 960]),
      width: PropTypes.oneOf([320, 640, 960, 1280, 1600]),
    }),
  ]),
};

const defaultProps = {
  size: 'small',
};

const ModalContent = (props) => {
  const {
    title,
    toolbar,
    footer,
    size,
    children,
    onRequestClose,
    refCallback,
    ...customProps
  } = props;

  const conceptBannerContext = React.useContext(ApplicationConceptBannerContext);
  const theme = React.useContext(ThemeContext);

  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  let modalHeight;
  let modalWidth;
  if (typeof size === 'string') {
    modalHeight = heightFromSize[size] || 420;
    modalWidth = widthFromSize[size] || 640;
  } else if (typeof size === 'object') {
    modalHeight = size.height || 420;
    modalWidth = size.width || 640;
  } else {
    modalHeight = 420;
    modalWidth = 640;
  }

  const modalClassNames = cx('modal-container', `height-${modalHeight}`, `width-${modalWidth}`, theme.className);

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <div
      {...customProps}
      tabIndex={platformIsiOS ? '-1' : '0'}
      aria-modal="true"
      aria-label={title}
      className={modalClassNames}
      role="dialog"
      ref={(ref) => { if (refCallback) { refCallback(ref); } }}
    >
      <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
        {text => (
          <VisuallyHiddenText data-terra-abstract-modal-begin tabIndex="-1" text={text} />
        )}
      </FormattedMessage>
      <div className={cx('modal-layout')}>
        <div className={cx('header')}>
          <ModalHeader
            title={title}
            onClose={onRequestClose}
          />
          {toolbar}
          {conceptBannerContext?.modalBanner}
          <NotificationBanners />
        </div>
        <div className={cx('content')}>
          <NotificationBannerProvider>
            <ApplicationLoadingOverlayProvider>
              <ApplicationStatusOverlayProvider>
                <Scroll>
                  {children}
                </Scroll>
              </ApplicationStatusOverlayProvider>
            </ApplicationLoadingOverlayProvider>
          </NotificationBannerProvider>
        </div>
        <div className={cx('footer')}>
          {footer || <ActionFooter end={<Button text="Close" onClick={() => { onRequestClose(); }} />} />}
        </div>
      </div>
      <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
        {text => (
          <VisuallyHiddenText text={text} />
        )}
      </FormattedMessage>
    </div>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
