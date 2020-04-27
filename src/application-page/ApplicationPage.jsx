import React from 'react';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import uuidv4 from 'uuid/v4';

import ApplicationPageContext from './ApplicationPageContext';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from '../navigation-prompt';

const ApplicationPage = ({ rootPageTitle, rootPageBackAction, children }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const [pageStack, setPageStack] = React.useState([]);

  function popStack() {
    const presentedPage = pageStack[pageStack.length - 1];

    presentedPage.navigationPromptCheckpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      setPageStack((state) => state.slice(0, -1));
    });
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
            navigationPromptCheckpointRef: React.createRef(),
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
            <NavigationPromptCheckpoint
              ref={page.navigationPromptCheckpointRef}
            >
              <ApplicationErrorBoundary>
                <ApplicationLoadingOverlayProvider>
                  {page.content}
                </ApplicationLoadingOverlayProvider>
              </ApplicationErrorBoundary>
            </NavigationPromptCheckpoint>
          </div>
        ))}
      </ApplicationPageContext.Provider>
    </ContentContainer>
  );
};

export default ApplicationPage;
