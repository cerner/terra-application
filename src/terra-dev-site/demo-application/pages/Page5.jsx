import React from 'react';
import PropTypes from 'prop-types';

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

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page5 = ({ onRequestClose }) => (
  <Page
    pageKey="page-5"
    title="Page 5"
    onRequestClose={onRequestClose}
    preferHeaderIsHidden
  >
    <DemoPageContent>
      <h2>Page 5</h2>
      <Card title="Page 5 Details">
        <p>Page 5 demonstrates the following features:</p>
        <ul>
          <li>Hiding of the Page header</li>
          <li>Content that triggers Page APIs</li>
        </ul>
      </Card>
      <Card title="Page Header">
        <p>This Page implementation hides the Page header.</p>
        <p>The Page header can be hidden in scenarios where the framework controls are unnecessary and/or intrusive to the Page design.</p>
        <p>The presence of Layout-specific actions or Page-level actions will force the header to be presented.</p>
      </Card>
      <NotificationBannersCard />
      <NotificationDialogCard />
      <LoadingOverlayCard />
      <StatusOverlayCard />
      <ErrorHandlingCard pageTitle="Page 5" />
      <InteractionBlockingOverlayCard />
      <PendingActionsCard />
      <ModalManagerIntegrationCard />
      <NavigationItemCard />
    </DemoPageContent>
  </Page>
);

Page5.propTypes = propTypes;

export default Page5;
