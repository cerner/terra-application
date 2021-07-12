import React from 'react';
import SlidePanelManager from 'terra-application/lib/slide-panel-manager';
import DisclosureComponent from './DisclosureComponent';

const NavigationPrompt = () => (
  <SlidePanelManager>
    <DisclosureComponent identifier="root-component" disclosureType="panel" renderHeaderAdapter />
  </SlidePanelManager>
);

export default NavigationPrompt;
