import React from 'react';
import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
import DisclosureComponent from './DisclosureComponent';

const CustomDismissCheck = () => (
  <SlidePanelManager>
    <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter useCustomDismissCheck />
  </SlidePanelManager>
);

export default CustomDismissCheck;
