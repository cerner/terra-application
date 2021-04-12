import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import Page, {
  CardLayout, Card, PageActivityOverlay,
} from '../../../../page';

import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';
import ApplicationInfoCard from './content/ApplicationInfoCard';
import DynamicHeadingCard from './content/DynamicHeadingCard';

import Page6 from './Page6';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const page5MetaData = { data: 'page-5' };

const Page5 = ({ onRequestClose }) => {
  const [showPage6, setShowPage6] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Page
      pageKey="page-5"
      label="Page 5"
      metaData={page5MetaData}
      onRequestClose={onRequestClose}
      activityOverlay={isLoading ? <PageActivityOverlay variant="loading" /> : undefined}
    >
      <CardLayout>
        <Card label="Page 5 Details">
          <p>Page 5 demonstrates the following features:</p>
          <ul>
            <li>Hiding of the Page header (not anymore)</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card label="Page Header">
          <p>This Page implementation hides the Page header.</p>
          <p>The Page header can be hidden in scenarios where the framework controls are unnecessary and/or intrusive to the Page design.</p>
          <p>The presence of Layout-specific actions or Page-level actions will force the header to be presented.</p>
        </Card>
        <Card label="Additional Page Disclosure">
          <p>Page 5 presents Page 6 due changes to its local state.</p>
          <Button text="Show Page 6" onClick={() => { setShowPage6(true); }} />
        </Card>
        <DynamicHeadingCard />
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard onSetLoading={setIsLoading} />
        <ErrorHandlingCard pageTitle="Page 5" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
        <ApplicationInfoCard />
      </CardLayout>
      {showPage6 && <Page6 onRequestClose={() => { setShowPage6(false); }} />}
    </Page>
  );
};

Page5.propTypes = propTypes;

export default Page5;
