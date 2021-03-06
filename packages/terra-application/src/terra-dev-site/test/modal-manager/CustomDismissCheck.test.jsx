import React from 'react';

import ModalManager from 'terra-application/lib/modal-manager';
import DisclosureComponent from './DisclosureComponent';

const CustomDismissCheck = () => (
  <ModalManager>
    <DisclosureComponent identifier="root-component" disclosureType="modal" renderHeaderAdapter useCustomDismissCheck />
  </ModalManager>
);

export default CustomDismissCheck;
