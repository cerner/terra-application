import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  StatusLayout,
} from '../../../../page';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page6 = ({ onRequestClose }) => (
  <Page
    pageKey="page-6"
    label="Page 6"
    onRequestClose={onRequestClose}
  >
    <StatusLayout variant="no-data" message="There is nothing here. Do something to make this not the case. I do not know what to do." />
  </Page>
);

Page6.propTypes = propTypes;

export default Page6;
