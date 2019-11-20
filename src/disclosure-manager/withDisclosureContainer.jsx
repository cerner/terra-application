import React from 'react';
import DisclosureContainer from './DisclosureContainer';

const withDisclosureContainer = (navigationPromptResolutionOptions) => {
  const WithDisclosureContainerComp = wrappedComponent => (
    <DisclosureContainer navigationPromptResolutionOptions={navigationPromptResolutionOptions}>
      {wrappedComponent}
    </DisclosureContainer>
  );

  return WithDisclosureContainerComp;
};

export default withDisclosureContainer;
