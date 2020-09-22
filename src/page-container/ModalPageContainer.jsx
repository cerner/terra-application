import React from 'react';

import BasePageContainer from './BasePageContainer';
import PageContainerContext from './PageContainerContext';

const ModalPageContainer = ({
  children,
}) => (
  <PageContainerContext.Provider value={undefined}>
    <BasePageContainer>
      {children}
    </BasePageContainer>
  </PageContainerContext.Provider>
);

export default ModalPageContainer;
