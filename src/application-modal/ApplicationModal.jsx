import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import AbstractModal from 'terra-abstract-modal';
import styles from './ApplicationModal.module.scss';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The component to render within the Modal above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: PropTypes.func,
};

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

const ApplicationModal = ({
  children, isOpen, onRequestClose,
}) => (
  <AbstractModal
    isOpen={isOpen}
    classNameModal={cx('application-modal', 'height-600', 'width-640')}
    onRequestClose={onRequestClose}
    closeOnEsc
    closeOnOutsideClick={false}
    ariaLabel="Modal"
  >
    <ContentContainer
      fill
      header={(
        <ActionHeader
          title="Application Modal"
          onClose={onRequestClose}
        />
      )}
    >
      {children}
    </ContentContainer>
  </AbstractModal>
);

export default ApplicationModal;
