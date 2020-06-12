import React from 'react';

import PageLayout from 'terra-application/lib/application-page/PageLayout';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';

const SimplePage = ({
  onRequestDismiss, simplePageState,
}) => (
  <PageLayout
    pageTitle="Simple Page"
    onBack={onRequestDismiss}
    pageActions={[{
      key: 'simple-page-print',
      icon: <IconPrinter />,
      text: 'Print',
      onSelect: () => { alert('Simple Page Print'); },
    }]}
  >
    <div style={{ padding: '1.5rem' }}>
      <p>I am a simple page with props driven by the previous page.</p>
      <div>
        <span>Prop value: </span>
        {simplePageState}
      </div>
    </div>
  </PageLayout>
);

export default SimplePage;
