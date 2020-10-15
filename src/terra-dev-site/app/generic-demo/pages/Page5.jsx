import React from 'react';

import ApplicationPage from '../../../../application-page/ApplicationPage';

const Page5 = ({ onRequestClose }) => (
  <ApplicationPage
    title="iFrame Example"
    onRequestClose={onRequestClose}
  >
    <iframe src="http://www.tor.com" style={{ height: '100%', width: '100%', position: 'absolute' }} />
  </ApplicationPage>
);

export default Page5;
