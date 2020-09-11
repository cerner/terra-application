import React from 'react';
import NavigationPageContainer, { NavigationItem } from './NavigationPageContainer';

const PageContainer = ({
  children, enableWorkspace,
}) => (
  <NavigationPageContainer
    enableWorkspace={enableWorkspace}
    activeNavigationKey="default-page"
    onSelectNavigationItem={() => {}}
  >
    <NavigationItem
      navigationKey="default-page"
      text="Default"
      render={() => children}
    />
  </NavigationPageContainer>
);

export default PageContainer;
