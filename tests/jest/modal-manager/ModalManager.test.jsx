import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';
import ModalManager from '../../../src/modal-manager';

const TestChild = () => <div />;

describe('ModalManager', () => {
  describe('Snapshots', () => {
    it('should render with required props', () => {
      const wrapper = shallow((
        <ModalManager.WrappedComponent intl={mockIntl}>
          <TestChild />
        </ModalManager.WrappedComponent>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const wrapper = shallow((
        <ModalManager.WrappedComponent
          intl={mockIntl}
          disclosureAccessory={<div>Test Accessory</div>}
          navigationPromptResolutionOptions={{
            test: 'options',
          }}
        >
          <TestChild />
        </ModalManager.WrappedComponent>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('DisclosureContainer', () => {
    it('should wrap disclosed content in a DisclosureContainer with default prompt options', () => {
      const wrapper = shallow((
        <ModalManager.WrappedComponent
          intl={mockIntl}
        >
          <TestChild />
        </ModalManager.WrappedComponent>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.navigationPromptResolutionOptions).toBeDefined();
      expect(disclosureWrapper.props.navigationPromptResolutionOptions([{ description: 'mock prompt' }])).toMatchSnapshot();
    });

    ('should wrap disclosed content in a DisclosureContainer with provided prompt options', () => {
      const promptOptions = { test: 'options' };

      const wrapper = shallow((
        <ModalManager.WrappedComponent
          intl={mockIntl}
          navigationPromptResolutionOptions={promptOptions}
        >
          <TestChild />
        </ModalManager.WrappedComponent>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.navigationPromptResolutionOptions).toEqual(promptOptions);
    });
  });
});
