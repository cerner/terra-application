import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer';
import Scroll from 'terra-scroll';

import PageHeader from '../application-page/_PageHeader';
import ModalOverlay from './_ModalOverlay';
import { hideModalDomUpdates, showModalDomUpdates } from './inertHelpers';
import styles from './ModalContent.module.scss';
import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlayProvider from '../application-loading-overlay/ApplicationLoadingOverlayProvider';
import ApplicationConceptContext from '../application-concept/ApplicationConceptContext';
import { useNotificationBanners } from '../application-notification/NotificationBannerProvider';
import BannerRegisrationContext from '../application-notification/private/BannerRegistrationContext';

const cx = classNamesBind.bind(styles);

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  // ariaLabel: PropTypes.string.isRequired,
  /**
   * Content inside the modal dialog.
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: PropTypes.bool,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  rootSelector: '#root',
  zIndex: '6000',
  size: 'small',
};

const ModalContent = (props) => {
  const {
    title,
    actions,
    size,
    // ariaLabel,
    children,
    classNameModal,
    classNameOverlay,
    closeOnOutsideClick,
    onRequestClose,
    role,
    isFullscreen,
    isScrollable,
    rootSelector,
    zIndex,
    modalClassName,
    ...customProps
  } = props;

  // useEffect(() => {
  //   // Store element that was last focused prior to modal opening
  //   const modalTrigger = document.activeElement;
  //   showModalDomUpdates(ref.current, rootSelector);

  //   return () => {
  //     hideModalDomUpdates(modalTrigger, rootSelector);
  //   };
  // }, [ref, rootSelector]);
  const applicationConcept = React.useContext(ApplicationConceptContext);
  const theme = React.useContext(ThemeContext);

  const { bannerProviderValue, banners } = useNotificationBanners();

  const modalClassNames = classNames(
    modalClassName,
    cx('abstract-modal',
      {
        'is-fullscreen': isFullscreen,
        large: size === 'large',
        small: size === 'small',
      },
      theme.className),
    classNameModal,
  );

  // // Delete the closePortal prop that comes from react-portal.
  // delete customProps.closePortal;
  // delete customProps.fallbackFocus;

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <React.Fragment>
      <ModalOverlay />
      {
        /*
          When an aria-label is set and tabIndex is set to 0, VoiceOver will read
          the aria-label value when the modal is opened
        */
      }
      <div
        {...customProps}
        tabIndex={platformIsiOS ? '-1' : '0'}
        aria-label={title}
        className={modalClassNames}
        role={role}
        style={{ zIndex: '2' }}
      >
        <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
          {text => (
            <VisuallyHiddenText data-terra-abstract-modal-begin tabIndex="-1" text={text} />
          )}
        </FormattedMessage>
        <ContentContainer
          fill
          header={(
            <>
              <PageHeader
                title={title}
                actions={actions}
                onClose={onRequestClose}
              />
              {applicationConcept && applicationConcept.renderModalConceptView()}
              {/* {banners} */}
            </>
          )}
          footer={(
            <ActionFooter end={<Button text="Close" onClick={() => { onRequestClose(); }} />} />
          )}
        >
          <BannerRegisrationContext.Provider value={bannerProviderValue}>
            <ApplicationLoadingOverlayProvider>
              <ApplicationErrorBoundary>
                <Scroll>
                  {children}
                </Scroll>
              </ApplicationErrorBoundary>
            </ApplicationLoadingOverlayProvider>
          </BannerRegisrationContext.Provider>
        </ContentContainer>
        <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
          {text => (
            <VisuallyHiddenText text={text} />
          )}
        </FormattedMessage>
      </div>
    </React.Fragment>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
