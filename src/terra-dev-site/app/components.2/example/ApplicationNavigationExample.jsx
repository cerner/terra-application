import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';
import {
  ApplicationNavigationActionsContext,
  PrimaryNavigationWorkspace,
  PrimaryNavigationWorkspaceItem,
} from 'terra-application/lib/application-navigation';
import { WorkspaceContent } from 'terra-application/lib/workspace';

import styles from './ApplicationNavigationExample.module.scss';

const cx = classNames.bind(styles);

const ExamplePageContent = ({ title }) => {
  const [hasPendingAction, setHasPendingAction] = useState(false);
  const actionsContext = React.useContext(ApplicationNavigationActionsContext);

  return (
    <div className={cx('page-content')}>
      <p>{title}</p>
      <p>
        Toggle pending action:
        {' '}
        <button
          id="pending-action-toggle"
          type="button"
          onClick={() => {
            setHasPendingAction(!hasPendingAction);
          }}
        >
          {hasPendingAction ? 'Disable' : 'Enable'}
        </button>
      </p>
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
      {hasPendingAction ? <NavigationPrompt description="Testing ApplicationNavigation's navigation prompt handling" /> : undefined}
    </div>
  );
};

ExamplePageContent.propTypes = {
  title: PropTypes.string,
};

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

const userConfig = {
  name: 'Example User',
  initials: 'EU',
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
  <PrimaryNavigationWorkspace
    id="primary-workspace-example"
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
    <PrimaryNavigationWorkspaceItem
      itemKey="tab-1"
      label="Tab 1"
      metaData={{ key: 'tab-1' }}
      render={() => <Tab1 />}
    />
    <PrimaryNavigationWorkspaceItem
      itemKey="tab-2"
      label="Tab 2"
      metaData={{ key: 'tab-2' }}
      render={() => <Tab2 />}
    />
  </PrimaryNavigationWorkspace>
);

const ApplicationNavigationTest = () => {
  const [activeNavItem, setActiveNavItem] = useState('page_1');
  const [loggedOut, setLoggedOut] = useState(false);

  return (
    <div className={cx('example-container')}>
      {loggedOut ? (
        <>
          <p>Logged Out</p>
          <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
        </>
      ) : (
        <ApplicationNavigation
          titleConfig={{
            title: 'ApplicationNavigation Example',
          }}
          userConfig={userConfig}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavItem}
          onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
          workspace={workspace}
        >
          <ExamplePageContent key={activeNavItem} title={activeNavItem} />
        </ApplicationNavigation>
      )}
    </div>
  );
};

export default ApplicationNavigationTest;
