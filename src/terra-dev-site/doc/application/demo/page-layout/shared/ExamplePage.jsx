import React from 'react';

import PageLayout from 'terra-application/lib/application-page/PageLayout';
import ApplicationPageContext from 'terra-application/lib/application-page/ApplicationPageContext';

import ModalPresenter from '../../ModalPresenter';
import PendingActionToggle from '../../PendingActionToggle';
import LoadingOverlayPresenter from '../../LoadingOverlayPresenter';
import ErrorThrower from '../../ErrorThrower';
import ApplicationModalPresenter from './ApplicationModalPresenter';

const ExamplePage = ({ index, prefix }) => {
  const [initializedDate] = React.useState(new Date().toLocaleString());
  const [showModal, setShowModal] = React.useState(false);

  return (
    <ApplicationPageContext.Consumer>
      {(pageContext) => (
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
              pageContext.showPage({
                title: `${prefix} - Page ${index + 1}`,
                content: <ExamplePage prefix={prefix} index={index + 1} />,
              });
            }}
          >
            Show Page
            {' '}
            {index + 1}
          </button>
          <br />
          <ErrorThrower />
          <ModalPresenter
            modalContent={(
              <PageLayout rootPageTitle="Modal - Page 0">
                <ExamplePage prefix="Modal" index={0} />
              </PageLayout>
            )}
          />
          <PendingActionToggle />
          <LoadingOverlayPresenter />
          <ApplicationModalPresenter />
        </div>
      )}
    </ApplicationPageContext.Consumer>
  );
};

export default ExamplePage;
