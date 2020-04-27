import React from 'react';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import uuidv4 from 'uuid/v4';

import ApplicationPageContext from './ApplicationPageContext';

const ApplicationPage = ({ rootPageTitle, children }) => {
  const [pageStack, setPageStack] = React.useState([]);

  function popStack() {
    setPageStack((state) => state.slice(0, -1));
  }

  const pages = [{
    title: rootPageTitle,
    content: children,
    key: 'ApplicationPage.rootPage',
  }].concat(pageStack);

  const activePage = pages[pages.length - 1];

  return (
    <ContentContainer
      fill
      header={<ActionHeader onBack={pages.length > 1 ? popStack : undefined} title={activePage.title} />}
    >
      <ApplicationPageContext.Provider value={{
        showPage: ({ title, key, content }) => {
          setPageStack((stack) => [...stack, {
            title,
            key: key || uuidv4(),
            content,
          }]);
        },
      }}
      >
        {pages.map((page, index) => (
          <div
            key={page.key}
            style={{
              height: '100%', overflow: 'auto', position: 'relative', display: index === pages.length - 1 ? 'block' : 'none',
            }}
          >
            {page.content}
          </div>
        ))}
      </ApplicationPageContext.Provider>
    </ContentContainer>
  );
};

export default ApplicationPage;
