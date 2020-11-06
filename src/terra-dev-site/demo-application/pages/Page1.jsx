import React from 'react';
import PropTypes from 'prop-types';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Button from 'terra-button';

import Page from '../../../page';

import PagePresentingModal from '../modals/PagePresentingModal';
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

import Page2 from './Page2';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const metaData = { my: 'data' };

const Page1 = ({ onRequestClose }) => {
  const [showPage2, setShowPage2] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);

  const pageActions = [{
    key: 'action-tag',
    text: 'Page Modal',
    icon: <IconTag />,
    onSelect: () => { setShowPageModal(true); },
  }];

  return (
    <Page
      pageKey="page-1"
      title="Page 1"
      actions={pageActions}
      onRequestClose={onRequestClose}
      metaData={{ my: 'data' }}
    >
      <DemoPageContent>
        <Card title="Page 1 Details">
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
      </DemoPageContent>
      {showPage2
        && <Page2 onRequestClose={() => { setShowPage2(false); }} />}
      {showPageModal
        && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </Page>
  );
};

Page1.propTypes = propTypes;

export default Page1;
