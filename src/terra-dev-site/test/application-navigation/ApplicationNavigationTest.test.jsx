import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'terra-application/lib/theme';
import { ApplicationIntlContext } from '../../../application-intl';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
import NavigationPrompt from '../../../navigation-prompt';
import {
  ApplicationNavigationActionsContext,
  ApplicationNavigationWorkspace,
  ApplicationNavigationWorkspaceItem,
} from 'terra-application/lib/application-navigation';
import { WorkspaceContent } from 'terra-application/lib/workspace';

const PendingAction = ({ index, onClick, navDisabled }) => (
  <p>
    Toggle pending action
    {`${index}: `}
    <button
      id={`pending-action-toggle-${index}`}
      type="button"
      onClick={onClick}
    >
      {navDisabled ? 'Disable' : 'Enable'}
    </button>
  </p>
);

PendingAction.propTypes = {
  index: PropTypes.string,
  onClick: PropTypes.func,
  navDisabled: PropTypes.bool,
};

const PageContent = ({ title }) => {
  const [hasPendingAction1, setHasPendingAction1] = useState(false);
  const [hasPendingAction2, setHasPendingAction2] = useState(false);
  const [hasPendingAction, setHasPendingAction] = useState(false);
  const actionsContext = React.useContext(ApplicationNavigationActionsContext);

  return (
    <div data-nav-test-content>
      <p>{title}</p>
      <PendingAction
        index="1"
        navDisabled={hasPendingAction1}
        onClick={() => {
          setHasPendingAction1(!hasPendingAction1);
        }}
      />
      <PendingAction
        index="2"
        navDisabled={hasPendingAction2}
        onClick={() => {
          setHasPendingAction2(!hasPendingAction2);
        }}
      />
      {hasPendingAction1 ? <NavigationPrompt description="Pending Action 1" /> : undefined}
      {hasPendingAction2 ? <NavigationPrompt description="Pending Action 2" /> : undefined}
      <p>
        Layout Actions:
        {' '}
        {actionsContext.actions && actionsContext.actions.map(action => {
          return (
            <button
              key={action.key}
              type="button"
              onClick={action.onSelect}
              aria-label={action.label}
            >
              {action.icon}
            </button>
          );
        })}
      </p>
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
};

const Tab1 = () => (
  <WorkspaceContent>
    <p>Example Workspace Content 1</p>
  </WorkspaceContent>
);

const Tab2 = () => (
  <WorkspaceContent>
    <p>Example Workspace Content 2</p>
  </WorkspaceContent>
);

const workspace = (
  <ApplicationNavigationWorkspace
    id="application-workspace-example"
    initialActiveItemKey="tab-1"
    initialSize={{ scale: 0.50 }}
    initialIsOpen
    onActiveItemChange={(newActiveItemKey) => {
      console.log(`Workspace active item: ${newActiveItemKey}`); // eslint-disable-line no-console
    }}
    onSizeChange={(size) => {
      console.log(`Workspace size changed: ${size}`); // eslint-disable-line no-console
    }}
    onPresentationStateChange={(isPresented) => {
      console.log(`Workspace presentation changed. isOpen - ${isPresented}`); // eslint-disable-line no-console
    }}
  >
    <ApplicationNavigationWorkspaceItem
      itemKey="tab-1"
      label="Tab 1"
      metaData={{ key: 'tab-1' }}
      render={() => <Tab1 />}
    />
    <ApplicationNavigationWorkspaceItem
      itemKey="tab-2"
      label="Tab 2"
      metaData={{ key: 'tab-2' }}
      render={() => <Tab2 />}
    />
  </ApplicationNavigationWorkspace>
);

const ApplicationNavigationTest = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);
  const [activeNavItem, setActiveNavItem] = useState('page_1');
  const [loggedOut, setLoggedOut] = useState(false);

  const navigationItems = [{
    key: 'page_1',
    text: 'Page 1',
  }, {
    key: 'page_2',
    text: 'Page 2',
  }, {
    key: 'page_3',
    text: 'Page 3',
  }];

  return (
    // Disable prompt unloading since we're not testing that and don't want to prevent sessions ending in firefox if there are problems
    <ApplicationBase unloadPromptIsDisabled locale={applicationIntl.locale} themeName={theme.className}>
      {loggedOut ? <p>Logged Out</p> : (
        <ApplicationNavigation
          titleConfig={{
            title: 'ApplicationNavigation Test',
          }}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavItem}
          onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
          workspace={workspace}
        >
          <PageContent key={activeNavItem} title={activeNavItem} />
        </ApplicationNavigation>
      )}
    </ApplicationBase>
  );
};

export default ApplicationNavigationTest;
