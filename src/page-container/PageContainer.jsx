import React from 'react';
import NavigationPageContainer, { NavigationPage } from './NavigationPageContainer';

const PageContainer = ({
  children, enableWorkspace,
}) => (
  <NavigationPageContainer
    enableWorkspace={enableWorkspace}
    activePageKey="default-page"
    onRequestActivatePage={() => {}}
  >
    <NavigationPage
      pageKey="default-page"
      render={() => children}
    />
  </NavigationPageContainer>
);

export default PageContainer;
