import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../../page/Page';

import DemoPageContent from './content/DemoPageContent';
import Card from './content/Card';

const propTypes = {
  onRequestClose: PropTypes.func,
};

const Page4 = ({ onRequestClose }) => (
  <Page
    title="Page 4"
    onRequestClose={onRequestClose}
  >
    <DemoPageContent>
      <Card title="iframe Rendering">
        <p>The presence of `iframe` elements within navigation content will cause the content to be persisted on the DOM when inactivated.</p>
        <p>This ensures that the `iframe` element is persisted and does not reload upon subsequent activation.</p>
        <iframe src="https://www.tor.com" style={{ height: '300px', width: '100%' }} />
      </Card>
    </DemoPageContent>
  </Page>
);

Page4.propTypes = propTypes;

export default Page4;
