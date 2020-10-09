import React from 'react';
import ModalPresentationContext from '../../application-modal/ModalPresentationContext';

import ModalPageContainer from './ModalPageContainer';
import MainPageContainer from './MainPageContainer';

const PageContainer = (props) => {
  const modalContext = React.useContext(ModalPresentationContext);

  if (modalContext) {
    return <ModalPageContainer {...props} />;
  }

  return <MainPageContainer {...props} />;
};

export default PageContainer;
