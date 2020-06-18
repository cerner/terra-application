import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
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
  const [hasPendingAction1, setHasPendingAction1] = useState(false);
  const [hasPendingAction2, setHasPendingAction2] = useState(false);

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
