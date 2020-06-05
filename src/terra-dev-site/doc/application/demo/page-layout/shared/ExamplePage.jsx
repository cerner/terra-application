import React from 'react';

import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconTag from 'terra-icon/lib/icon/IconTag';

import ModalPresenter from '../../ModalPresenter';
import PendingActionToggle from '../../PendingActionToggle';
import LoadingOverlayPresenter from '../../LoadingOverlayPresenter';
import ErrorThrower from '../../ErrorThrower';
import ApplicationModalPresenter from './ApplicationModalPresenter';
import PageLayoutContainer from '../../../../../../application-page/PageLayoutContainer';
import SimplePage from './SimplePage';

const ExamplePage = ({ index, prefix, onDismissPage }) => {
  const [initializedDate] = React.useState(new Date().toLocaleString());
  const [showModal, setShowModal] = React.useState(false);
  const [showNestedPage, setShowNestedPage] = React.useState(false);
  const [showSimplePage, setShowSimplePage] = React.useState(false);
  const [simplePageState, setSimplePageState] = React.useState(Math.random());

  React.useEffect(() => {
    if (!showSimplePage) {
      return;
    }

    const interval = setInterval(() => {
      setSimplePageState(Math.random());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [showSimplePage]);

  const pageActions = [{
    key: 'action-print',
    text: 'Print',
    icon: <IconPrinter />,
    onSelect: () => alert(`Page ${index} Printing`),
  }, {
    key: 'action-tag',
    text: 'Tag',
    icon: <IconTag />,
    onSelect: () => alert(`Page ${index} Tagging`),
  }];

  return (
    <PageLayout
      pageTitle={`${prefix} - Page ${index}`}
      onBack={onDismissPage}
      pageActions={pageActions}
    >
      <div style={{ padding: '1.5rem' }}>
        <h1>
          Page
          {' '}
          {index}
        </h1>
        <p>
            Initialized:
          {' '}
          {initializedDate}
        </p>
        <button
          type="button"
          onClick={() => {
            setShowNestedPage(true);
          }}
        >
        Show Page
          {' '}
          {index + 1}
        </button>
        <br />
        <button
          type="button"
          onClick={() => {
            setShowSimplePage(true);
          }}
        >
        Show Simple Page
        </button>
        <br />
        <ErrorThrower />
        <ModalPresenter
          modalContent={(
            <PageLayoutContainer>
              <ExamplePage prefix="Modal" index={0} />
            </PageLayoutContainer>
          )}
        />
        <PendingActionToggle />
        <LoadingOverlayPresenter />
        <ApplicationModalPresenter />
        {showNestedPage && <ExamplePage prefix={prefix} index={index + 1} onDismissPage={() => { setShowNestedPage(false); }} />}
        {showSimplePage && <SimplePage onDismissPage={() => { setShowSimplePage(false); }} simplePageState={simplePageState} />}
      </div>
    </PageLayout>
  );
};

export default ExamplePage;
