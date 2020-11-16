import React from 'react';
import ReactDOM from 'react-dom';

import ApplicationBaseTest from '../lib/terra-dev-site/test/application-base/ApplicationBaseTest.test';

import ErrorBoundaryTest from '../lib/terra-dev-site/test/application-error-boundary/ErrorBoundaryTest.test';

import ApplicationLoadingOverlayTest from '../lib/terra-dev-site/test/application-loading-overlay/LoadingOverlayTest.test';

import ApplicationNavigationDisablePromptsTest from '../lib/terra-dev-site/test/application-navigation/ApplicationNavigationDisabledPromptsTest.test';
import ApplicationNavigationTest from '../lib/terra-dev-site/test/application-navigation/ApplicationNavigationTest.test';

import ApplicationStatusAllProps from '../lib/terra-dev-site/test/application-status-overlay/StatusOverlayAllProps.test';
import ApplicationStatusPriority from '../lib/terra-dev-site/test/application-status-overlay/StatusOverlayPriority.test';
import ApplicationStatusVariant from '../lib/terra-dev-site/test/application-status-overlay/StatusOverlayVariant.test';

import CustomDismissCheck from '../lib/terra-dev-site/test/modal-manager/CustomDismissCheck.test';
import NavigationPrompt from '../lib/terra-dev-site/test/modal-manager/NavigationPrompt.test';

import AccessibilityTestingExample from '../lib/terra-dev-site/test/notification-banner/AccessibilityTestingExample.test';
import NotificationBanner from '../lib/terra-dev-site/test/notification-banner/NotificationBanner.test';

import SidePanelCustomDismissCheck from '../lib/terra-dev-site/test/slide-panel-manager/CustomDismissCheck.test';
import SlidePanelNavigationPrompt from '../lib/terra-dev-site/test/slide-panel-manager/NavigationPrompt.test';

const testMap = {
  '/raw/tests/cerner-terra-application/application-base/application-base-test': ApplicationBaseTest,
  '/raw/tests/cerner-terra-application/application-error-boundary/error-boundary-test': ErrorBoundaryTest,
  '/raw/tests/cerner-terra-application/application-loading-overlay/loading-overlay-test': ApplicationLoadingOverlayTest,
  '/raw/tests/cerner-terra-application/application-navigation/application-navigation-disabled-prompts-test': ApplicationNavigationDisablePromptsTest,
  '/raw/tests/cerner-terra-application/application-navigation/application-navigation-test': ApplicationNavigationTest,
  '/raw/tests/cerner-terra-application/application-status-overlay/status-overlay-all-props': ApplicationStatusAllProps,
  '/raw/tests/cerner-terra-application/application-status-overlay/status-overlay-priority': ApplicationStatusPriority,
  '/raw/tests/cerner-terra-application/application-status-overlay/status-overlay-variant': ApplicationStatusVariant,
  '/raw/tests/cerner-terra-application/modal-manager/custom-dismiss-check': CustomDismissCheck,
  '/raw/tests/cerner-terra-application/modal-manager/navigation-prompt': NavigationPrompt,
  '/raw/tests/cerner-terra-application/notification-banner/accessibility-testing-example': AccessibilityTestingExample,
  '/raw/tests/cerner-terra-application/notification-banner/notification-banner': NotificationBanner,
  '/raw/tests/cerner-terra-application/slide-panel-manager/custom-dismiss-check': SidePanelCustomDismissCheck,
  '/raw/tests/cerner-terra-application/slide-panel-manager/navigation-prompt': SlidePanelNavigationPrompt,
};

const Entry = () => {
  const Component = testMap[window.location.pathname];
  return <Component />;
};

ReactDOM.render(<Entry />, document.getElementById('root'));
