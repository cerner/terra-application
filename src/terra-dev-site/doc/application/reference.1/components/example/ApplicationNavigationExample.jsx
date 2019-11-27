import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';

import styles from './ApplicationNavigationExample.module.scss';

const cx = classNames.bind(styles);

const ExamplePageContent = ({ title }) => {
  const [hasPendingAction, setHasPendingAction] = useState(false);

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
          navigationPromptResolutionOptions={{
            title: 'Example Title',
            startMessage: 'Example Start Message',
            content: <div>Example Content</div>,
            endMessage: 'Example End Message',
            acceptButtonText: 'Example Accept Text',
            rejectButtonText: 'Example Reject Text',
          }}
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
        >
          <ExamplePageContent key={activeNavItem} title={activeNavItem} />
        </ApplicationNavigation>
      )}
    </div>
  );
};

export default ApplicationNavigationTest;
