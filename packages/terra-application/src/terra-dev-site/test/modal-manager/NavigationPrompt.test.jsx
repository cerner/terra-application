import React from 'react';

import ModalManager from 'terra-application/lib/modal-manager';

import DisclosureComponent from './DisclosureComponent';

const NavigationPrompt = () => (
  <ModalManager>
    <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter />
  </ModalManager>
);

export default NavigationPrompt;
