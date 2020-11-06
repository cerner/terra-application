import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

import Page from '../../../page/Page';

import DemoPageContent from './content/DemoPageContent';
import Card from './content/Card';
import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import StatusOverlayCard from './content/StatusOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';
import Page5 from './Page5';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page4 = ({ onRequestClose }) => {
  const [showPage5, setShowPage5] = React.useState(false);
  return (
    <Page
      pageKey="page-4"
      title="Page 4"
      onRequestClose={onRequestClose}
    >
      <DemoPageContent>
        <Card title="Page 4 Details">
          <p>Page 4 demonstrates the following features:</p>
          <ul>
            <li>iframe rendering/persistence</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card title="Additional Page Disclosure">
          <p>Page 4 presents Page 5 due changes to its local state.</p>
          <Button text="Show Page 5" onClick={() => { setShowPage5(true); }} />
        </Card>
        <Card title="iframe Rendering">
          <p>The presence of `iframe` elements within navigation content will cause the content to be persisted on the DOM when inactivated.</p>
          <p>This ensures that the `iframe` element is persisted and does not reload upon subsequent activation.</p>
          <iframe src="https://www.tor.com" style={{ height: '300px', width: '100%' }} />
        </Card>
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard />
        <StatusOverlayCard />
        <ErrorHandlingCard pageTitle="Page 4" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
      </DemoPageContent>
      {showPage5 && <Page5 onRequestClose={() => { setShowPage5(false); }} />}
    </Page>
  );
};

Page4.propTypes = propTypes;

export default Page4;
