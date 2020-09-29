import React from 'react';

import BasePageContainer from './BasePageContainer';
import PageActionsContext from '../PageActionsContext';

const ModalPageContainer = ({
  children,
}) => (
  <PageActionsContext.Provider value={undefined}>
    <BasePageContainer>
      {children}
    </BasePageContainer>
  </PageActionsContext.Provider>
);

export default ModalPageContainer;
