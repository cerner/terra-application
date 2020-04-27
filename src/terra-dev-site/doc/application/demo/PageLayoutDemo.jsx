import React from 'react';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import List, { Item as ListItem } from 'terra-list';

import ApplicationPage from '../../../../application-page/ApplicationPage';
import ApplicationPageContext from '../../../../application-page/ApplicationPageContext';
import ModalPresenter from './ModalPresenter';
import PendingActionToggle from './PendingActionToggle';
import LoadingOverlayPresenter from './LoadingOverlayPresenter';
import ErrorThrower from './ErrorThrower';
import SideNavContainer, { SideNavContent } from '../../../../application-page/SideNavContainer';

const Page = ({ index, prefix }) => {
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
                title: `${prefix} - Page ${index + 1}`,
                content: <Page prefix={prefix} index={index + 1} />,
              });
            }}
          >
            Show Page
            {' '}
            {index + 1}
          </button>
          <br />
          <ErrorThrower />
          <ModalPresenter
            modalContent={(
              <ApplicationPage rootPageTitle="Modal - Page 0">
                <Page prefix="Modal" index={0} />
              </ApplicationPage>
            )}
          />
          <PendingActionToggle />
          <LoadingOverlayPresenter />
        </div>
      )}
    </ApplicationPageContext.Consumer>
  );
};

const PageLayoutDemo = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState('item-1');

  return (
    <SideNavContainer
      sideNav={(
        <ContentContainer
          header={<ActionHeader title="Side Nav" />}
          fill
        >
          <List dividerStyle="standard" role="listbox" aria-label="SingleSelectList-label">
            <ListItem
              key="item-1"
              isSelectable
              isSelected={activeSideNavItemKey === 'item-1'}
              onSelect={() => {
                setActiveSideNavItemKey('item-1');
              }}
            >
              <div style={{ padding: '1rem' }}>Item 1</div>
            </ListItem>
            <ListItem
              key="item-2"
              isSelectable
              isSelected={activeSideNavItemKey === 'item-2'}
              onSelect={() => {
                setActiveSideNavItemKey('item-2');
              }}
            >
              <div style={{ padding: '1rem' }}>Item 2</div>
            </ListItem>
            <ListItem
              key="item-3"
              isSelectable
              isSelected={activeSideNavItemKey === 'item-3'}
              onSelect={() => {
                setActiveSideNavItemKey('item-3');
              }}
            >
              <div style={{ padding: '1rem' }}>Item 3</div>
            </ListItem>
          </List>
        </ContentContainer>
      )}
      activeItemKey={activeSideNavItemKey}
    >
      <SideNavContent
        sideNavKey="item-1"
        cleanupRenderIfPossible
        render={() => (
          <ApplicationPage rootPageTitle="Item 1 - Page 0">
            <Page prefix="Item 1" index={0} />
          </ApplicationPage>
        )}
      />
      <SideNavContent
        sideNavKey="item-2"
        render={() => (
          <ApplicationPage rootPageTitle="Item 2 - Page 0">
            <Page prefix="Item 2" index={0} />
          </ApplicationPage>
        )}
      />
      <SideNavContent
        sideNavKey="item-3"
      >
        <ApplicationPage rootPageTitle="Item 3 - Page 0">
          <Page prefix="Item 3" index={0} />
        </ApplicationPage>
      </SideNavContent>
    </SideNavContainer>
  );
};

export default PageLayoutDemo;
