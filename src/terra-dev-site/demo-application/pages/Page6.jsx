import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  CardLayout, Card,
} from '../../../page';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page6 = ({ onRequestClose }) => (
  <Page
    pageKey="page-6"
    label="Page 6"
    onRequestClose={onRequestClose}
  >
    <CardLayout>
      <Card label="Page 6 Details">
        <p>Page 6 demonstrates the following features:</p>
        <ul>
          <li>Single card in CardLayout</li>
        </ul>
      </Card>
    </CardLayout>
  </Page>
);

Page6.propTypes = propTypes;

export default Page6;
