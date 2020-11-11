import React from 'react';
import PageContainerActionsContext from '../../../page/PageContainerActionsContext';
import MainContainer from '../../../main-container';

const NotAPage = () => {
  const pageContainerActions = React.useContext(PageContainerActionsContext);

  return (
    <MainContainer documentTitle="Not A Page">
      <div style={{ padding: '1rem' }}>
        <h2>Not A Page</h2>
        <p>This component does not use a Page to render its content. While usage of Pages is recommended, it is not outright required.</p>
        <p>However, when a Page is not used, additional steps must be taken to ensure the application will be accessible and function correctly.</p>
        <p>This component utilizes the provided MainContainer to ensure a main element is present and accessible. A title for the document is also provided to ensure it is representative of the current content.</p>
        <p>This component also renders action controls provided by any parent layouts, if present.</p>
        <p>Layout Actions:</p>
        <div>
          {pageContainerActions?.startActions}
          {pageContainerActions?.endActions}
        </div>
      </div>
    </MainContainer>
  );
};

export default NotAPage;
