import React from 'react';
import PropTypes from 'prop-types';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Button from 'terra-button';

import Page, {
  PageActions, Action, CardLayout, Card,
} from '../../../page';

import PagePresentingModal from '../modals/PagePresentingModal';
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

import Page2 from './Page2';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const page1MetaData = { data: 'page-1' };

const Page1 = ({ onRequestClose }) => {
  const [showPage2, setShowPage2] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);

  const pageActions = (
    <PageActions>
      <Action
        actionKey="action-page-modal"
        label="Page Modal"
        icon={<IconTag />}
        onSelect={() => { setShowPageModal(true); }}
      />
    </PageActions>
  );

  return (
    <Page
      pageKey="page-1"
      label="Page 1"
      metaData={page1MetaData}
      actions={pageActions}
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        <Card>
          <p>Page 1 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <Card title="Additional Page Disclosure">
          <p>Page 1 presents Page 2 due changes to its local state.</p>
          <Button text="Show Page 2" onClick={() => { setShowPage2(true); }} />
        </Card>
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard />
        <StatusOverlayCard />
        <ErrorHandlingCard pageTitle="Page 1" />
        <InteractionBlockingOverlayCard />
        <PendingActionsCard />
        <ModalManagerIntegrationCard />
        <NavigationItemCard />
        <ApplicationInfoCard />
      </CardLayout>
      {showPage2
        && <Page2 onRequestClose={() => { setShowPage2(false); }} />}
      {showPageModal
        && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </Page>
  );
};

Page1.propTypes = propTypes;

export default Page1;
