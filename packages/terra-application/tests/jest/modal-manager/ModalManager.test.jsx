import React from 'react';
import ModalManager from '../../../src/modal-manager';

const TestChild = () => <div />;

describe('ModalManager', () => {
  describe('Snapshots', () => {
    it('should render with required props', () => {
      const wrapper = enzyme.shallow((
        <ModalManager>
          <TestChild />
        </ModalManager>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const wrapper = enzyme.shallow((
        <ModalManager
          disclosureAccessory={<div>Test Accessory</div>}
          navigationPromptResolutionOptions={{
            test: 'options',
          }}
        >
          <TestChild />
        </ModalManager>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('DisclosureContainer', () => {
    it('should wrap disclosed content in a DisclosureContainer with default prompt options', () => {
      const promptOptions = { test: 'options' };

      const wrapper = enzyme.shallow((
        <ModalManager
          navigationPromptResolutionOptions={promptOptions}
        >
          <TestChild />
        </ModalManager>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.navigationPromptResolutionOptions).toBeDefined();
    });
  });
});
