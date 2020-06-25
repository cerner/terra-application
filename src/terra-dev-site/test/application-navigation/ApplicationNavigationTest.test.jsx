import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
import NotificationBanner from '../../../notification-banner';
import NavigationPrompt from '../../../navigation-prompt';

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
<<<<<<< HEAD
  const [hasPendingAction, setHasPendingAction] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
=======
  const [hasPendingAction1, setHasPendingAction1] = useState(false);
  const [hasPendingAction2, setHasPendingAction2] = useState(false);
>>>>>>> master

  return (
    <div data-nav-test-content>
      <p>{title}</p>
<<<<<<< HEAD
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
      <p>
        Show Notification Banner:
        {' '}
        <button id="notification-banner" type="button" onClick={() => { setShowBanner(true); }}>Show</button>
      </p>
      {showBanner ? <NotificationBanner type="warning" onRequestDismiss={() => { setShowBanner(false); }} /> : undefined}
=======
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
>>>>>>> master
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
};

const ApplicationNavigationTest = () => {
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
    <ApplicationBase locale="en">
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
        >
          <PageContent key={activeNavItem} title={activeNavItem} />
        </ApplicationNavigation>
      )}
    </ApplicationBase>
  );
};

export default ApplicationNavigationTest;
