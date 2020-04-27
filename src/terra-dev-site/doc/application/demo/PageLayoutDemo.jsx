import React from 'react';
import ApplicationPage from '../../../../application-page/ApplicationPage';
import ApplicationPageContext from '../../../../application-page/ApplicationPageContext';

const Page = ({ index }) => {
  const [initializedDate] = React.useState(new Date().toLocaleString());

  return (
    <ApplicationPageContext.Consumer>
      {(pageContext) => (
        <div style={{ padding: '1.5rem' }}>
          <h1>
          Page
            {' '}
            {index}
          </h1>
          <p>
            Initialized:
            {' '}
            {initializedDate}
          </p>
          <button
            onClick={() => {
              pageContext.showPage({
                title: `Page ${index + 1}`,
                content: <Page index={index + 1} />,
              });
            }}
          >
          Show Page
            {' '}
            {index + 1}
          </button>
        </div>
      )}
    </ApplicationPageContext.Consumer>
  );
};

const PageLayoutDemo = () => (
  <ApplicationPage rootPageTitle="Page 0">
    <Page index={0} />
  </ApplicationPage>
);

export default PageLayoutDemo;
