import React from 'react';

import ApplicationPage from 'terra-application/lib/application-page/ApplicationPage';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';

const SimplePage = ({
  onRequestClose, simplePageState,
}) => (
  <ApplicationPage
    title="Simple Page"
    actions={[{
      key: 'simple-page-print',
      icon: <IconPrinter />,
      text: 'Print',
      onSelect: () => { alert('Simple Page Print'); },
    }]}
    onRequestClose={onRequestClose}
  >
    <div style={{ padding: '1.5rem' }}>
      <p>I am a simple page with props driven by the previous page.</p>
      <div>
        <span>Prop value: </span>
        {simplePageState}
      </div>
    </div>
  </ApplicationPage>
);

export default SimplePage;
