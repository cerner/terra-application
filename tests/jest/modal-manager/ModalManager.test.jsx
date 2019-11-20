import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import { withDisclosureManager } from '../../../src/disclosure-manager';
import ModalManager from '../../../src/modal-manager';

const TestContainer = withDisclosureManager(({ id }) => (
  <button id={id} type="button">Hello World</button>
));

describe('ApplicationModalManager', () => {
  const mountModalManager = () => mountWithIntl(
    <ModalManager
      navigationPromptResolutionOptions={{
        title: 'Test Title',
        startMessage: 'Test Start Message',
        content: <div>Test Content</div>,
        endMessage: 'Test End Message',
        acceptButtonText: 'Test Accept Text',
        rejectButtonText: 'Test Reject Text',
      }}
    >
      <TestContainer id="child-with-disclosure" />
    </ModalManager>,
  );

  it('should render the ApplicationModalManager', () => {
    const content = mountModalManager();
    expect(content).toMatchSnapshot();
  });

  it('should disclose content in Modal', () => {
    const content = mountModalManager();

    return new Promise((resolve, reject) => {
      const childDisclosureManager = content.find('#child-with-disclosure').getElements()[1].props.disclosureManager;
      childDisclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer id="test-modal" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        content.update();
        expect(content).toMatchSnapshot();
      });
  });
});
