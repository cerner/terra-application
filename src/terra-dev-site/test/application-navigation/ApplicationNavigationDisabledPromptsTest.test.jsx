import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import ApplicationBase from '../../../application-base';
import ApplicationNavigation from '../../../application-navigation';
import UnsavedChangesPrompt from '../../../unsaved-changes-prompt';

const PageContent = ({ title }) => {
  const [hasPendingAction, setHasPendingAction] = useState(false);

  return (
    <div>
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
      {hasPendingAction ? <UnsavedChangesPrompt description="Testing ApplicationNavigation's navigation prompt handling" /> : undefined}
    </div>
  );
};

PageContent.propTypes = {
  title: PropTypes.string,
};

const ApplicationNavigationDisabledPromptsTest = () => {
  const applicationIntl = useIntl();
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
    <ApplicationBase locale={applicationIntl.locale}>
      {loggedOut ? <p>Logged Out</p> : (
        <ApplicationNavigation
          titleConfig={{
            title: 'ApplicationNavigation Disabled Prompts Test',
          }}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavItem}
          onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
          onSelectLogout={() => {
            setLoggedOut(true);
          }}
          disablePromptsForLogout
          disablePromptsForNavigationItems
        >
          <PageContent key={activeNavItem} title={activeNavItem} />
        </ApplicationNavigation>
      )}
    </ApplicationBase>
  );
};

export default ApplicationNavigationDisabledPromptsTest;
