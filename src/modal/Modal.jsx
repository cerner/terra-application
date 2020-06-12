import React, {
  useRef, useLayoutEffect, useEffect, useContext,
} from 'react';

import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import LayerPortal from '../layers/LayerPortal';

import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';

import ModalContent from './_ModalContent';
import ApplicationPageContext from '../application-page/ApplicationPageContext';

const propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const Modal = ({
  title,
  size,
  actions,
  onRequestClose,
  children,
}) => (
  <LayerPortal>
    <ApplicationPageContext.Provider value={undefined}>
      <ModalContent
        title={title}
        actions={actions}
        size={size}
        onRequestClose={onRequestClose}
        aria-modal="true"
      >
        {children}
      </ModalContent>
    </ApplicationPageContext.Provider>
  </LayerPortal>
);

Modal.propTypes = propTypes;

export default Modal;
