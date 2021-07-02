import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ApplicationNavigation, {
  ApplicationNavigationActionsContext,
} from 'terra-application/lib/application-navigation';

import styles from './ApplicationNavigationExample.module.scss';

const cx = classNames.bind(styles);

const ExamplePageContent = ({ title }) => {
  const actionsContext = React.useContext(ApplicationNavigationActionsContext);

  return (
    <div className={cx('page-content')}>
      <p>{title}</p>
      <p>
        Layout Actions:
        {' '}
        {actionsContext.actions && actionsContext.actions.map(action => (
          <button
            key={action.key}
            type="button"
            onClick={action.onSelect}
            aria-label={action.label}
          >
            {action.icon}
          </button>
        ))}
      </p>
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

const MyWorkspaceContent1 = () => (
  <ApplicationNavigation.Workspace.Content>
    <p>Example Workspace Content 1</p>
  </ApplicationNavigation.Workspace.Content>
);

const MyWorkspaceContent2 = () => (
  <ApplicationNavigation.Workspace.Content>
    <p>Example Workspace Content 2</p>
  </ApplicationNavigation.Workspace.Content>
);

const workspace = (
  <ApplicationNavigation.Workspace
    id="application-workspace-example"
    initialActiveItemKey="item-1"
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
    <ApplicationNavigation.Workspace.Item
      itemKey="Item-1"
      label="Item 1"
      metaData={{ key: 'item-1' }}
      render={() => <MyWorkspaceContent1 />}
    />
    <ApplicationNavigation.Workspace.Item
      itemKey="item-2"
      label="Item 2"
      metaData={{ key: 'item-2' }}
      render={() => <MyWorkspaceContent2 />}
    />
  </ApplicationNavigation.Workspace>
);

const ApplicationNavigationWorkspaceExample = () => {
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

export default ApplicationNavigationWorkspaceExample;
