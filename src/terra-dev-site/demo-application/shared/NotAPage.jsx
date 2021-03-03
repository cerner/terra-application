import React from 'react';
import Button from 'terra-button';
import LayoutActionsContext from '../../../layouts/shared/LayoutActionsContext';
import MainContainer from '../../../main-container';

const metaData = { data: 'data for NotAPage' };

const NotAPage = () => {
  const layoutActions = React.useContext(LayoutActionsContext);

  return (
    <MainContainer
      mainKey="not-a-page-key"
      mainLabel="Not a Page"
      mainMetaData={metaData}
    >
      <div style={{ padding: '1rem' }}>
        <h2>Not A Page</h2>
        <p>This component does not use a Page to render its content. While usage of Pages is recommended, it is not outright required.</p>
        <p>However, when a Page is not used, additional steps must be taken to ensure the application will be accessible and function correctly.</p>
        <p>This component utilizes the provided MainContainer to ensure a main element is present and accessible.</p>
        <p>This component also renders action controls provided by any parent layouts, if present.</p>
        <p>Layout Actions:</p>
        <div>
          {layoutActions.startActions.map(({ icon: Icon, ...action }) => (
            <Button
              key={action.key}
              text={action.label}
              icon={<Icon />}
              onClick={action.onSelect}
            />
          ))}
          {layoutActions.endActions.map(({ icon: Icon, ...action }) => (
            <Button
              key={action.key}
              text={action.label}
              icon={<Icon />}
              onClick={action.onSelect}
            />
          ))}
          {!layoutActions.startActions.length && !layoutActions.endActions.length && <div>No actions for this layout at this breakpoint</div>}
        </div>
      </div>
    </MainContainer>
  );
};

export default NotAPage;
