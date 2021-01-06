import React from 'react';

import ModalManager from '../../../modal-manager';

import DisclosureComponent from './DisclosureComponent';

const UnsavedChangesPrompt = () => (
  <ModalManager>
    <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
  </ModalManager>
);

export default UnsavedChangesPrompt;
