import React from 'react';
import ModalPresentationContext from '../application-modal/ModalPresentationContext';

import ModalPageContainer from './ModalPageContainer';
import BasePageContainer from './BasePageContainer';

const PageContainer = (props) => {
  const modalContext = React.useContext(ModalPresentationContext);

  if (modalContext) {
    return <ModalPageContainer {...props} />;
  }

  return <BasePageContainer {...props} isMain />;
};

export default PageContainer;
