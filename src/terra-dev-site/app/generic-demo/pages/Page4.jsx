import React from 'react';
import PropTypes from 'prop-types';

import ApplicationPage from '../../../../application-page/ApplicationPage';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page4 = ({ onRequestClose }) => (
  <ApplicationPage
    title="Page 4 - iFrame Example"
    onRequestClose={onRequestClose}
  >
    <iframe src="http://www.tor.com" style={{ height: '100%', width: '100%', position: 'absolute' }} />
  </ApplicationPage>
);

Page4.propTypes = propTypes;

export default Page4;
