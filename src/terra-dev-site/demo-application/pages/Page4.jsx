import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';

import Page, { CardLayout, Card } from '../../../page';

import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import StatusOverlayCard from './content/StatusOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';
import ApplicationInfoCard from './content/ApplicationInfoCard';

import Page5 from './Page5';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const page4MetaData = { data: 'page-4' };

const Page4 = ({ onRequestClose }) => {
  const [showPage5, setShowPage5] = React.useState(false);
  return (
    <Page
      pageKey="page-4"
      label="Page 4"
      metaData={page4MetaData}
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        <Card label="Page 4 Details">
          <p>Page 4 demonstrates the following features:</p>
          <ul>
            <li>iframe rendering</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card label="Additional Page Disclosure">
          <p>Page 4 presents Page 5 due changes to its local state.</p>
          <Button text="Show Page 5" onClick={() => { setShowPage5(true); }} />
        </Card>
        <Card label="iframe Rendering">
          <p>iframe elements will reload after leaving and reappearing on the DOM.</p>
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
        <ApplicationInfoCard />
      </CardLayout>
      {showPage5 && <Page5 onRequestClose={() => { setShowPage5(false); }} />}
    </Page>
  );
};

Page4.propTypes = propTypes;

export default Page4;
