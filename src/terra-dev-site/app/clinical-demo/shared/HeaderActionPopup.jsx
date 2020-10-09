import React from 'react';
import Popup from 'terra-popup';
import ActionHeader from 'terra-action-header';

const propTypes = {};

const HeaderActionPopup = ({
  title, targetRef, onRequestClose, children,
}) => (
  <Popup
    isOpen
    targetRef={targetRef}
    onRequestClose={onRequestClose}
    contentAttachment="top right"
    targetAttachment="bottom right"
    contentHeight="auto"
    contentWidth="240"
  >
    <ActionHeader title={title} />
    <div style={{ padding: '1rem' }}>
      {children}
    </div>
  </Popup>
);

HeaderActionPopup.propTypes = propTypes;

export default HeaderActionPopup;
