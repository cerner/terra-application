import React, {
  useRef, useLayoutEffect, useEffect, useContext,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Portal } from 'react-portal';
// import { KEY_ESCAPE } from 'keycode-js';
import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';
import ModalContent from './_ModalContent';

const propTypes = {
  modalTitle: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const AbstractModal = ({
  modalTitle,
  size,
  isOpen,
  onRequestClose,
  children,
}) => {
  const layer = useContext(LayerContext);

  // const modalElementRef = useRef();

  // useLayoutEffect(() => {
  //   // eslint-disable-next-line no-prototype-builtins
  //   if (!Element.prototype.hasOwnProperty('inert')) {
  //     // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
  //     // eslint-disable-next-line global-require
  //     require('wicg-inert/dist/inert');
  //   }
  // }, []);

  // useEffect(() => {
  //   function handleKeydown(e) {
  //     if (e.keyCode === KEY_ESCAPE && closeOnEsc && isOpen) {
  //       if (modalElementRef.current) {
  //         const body = document.querySelector('body');
  //         if (e.target === modalElementRef.current || modalElementRef.current.contains(e.target) || e.target === body) {
  //           onRequestClose();
  //         }
  //       }
  //     }
  //   }

  //   document.addEventListener('keydown', handleKeydown);

  //   return (() => {
  //     document.removeEventListener('keydown', handleKeydown);
  //   });
  // }, [closeOnEsc, isOpen, onRequestClose, modalElementRef]);

  if (!isOpen) {
    return null;
  }

  if (window.TerraApplication.layerManager.canPresentAtLayer(layer.index)) {
    return (isOpen && ReactDOM.portal((
      <ModalContent
        modalTitle={modalTitle}
        size={size}
        onRequestClose={onRequestClose}
        aria-modal="true"
      >
        {children}
      </ModalContent>
    ), document.body));
  }
};

AbstractModal.propTypes = propTypes;

export default AbstractModal;
