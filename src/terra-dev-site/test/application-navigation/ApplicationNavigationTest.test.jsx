import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
import Banner from '../../../banner';
import NavigationPrompt from '../../../navigation-prompt';

const PageContent = ({ title }) => {
  const [hasPendingAction, setHasPendingAction] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  return (
    <div data-nav-test-content>
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
      <p>
        Show Banner:
        {' '}
        <button id="banner" type="button" onClick={() => { setShowBanner(true); }}>Show</button>
      </p>
      {showBanner ? <Banner type="success" onDismiss={() => { setShowBanner(false); }} /> : undefined}
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
