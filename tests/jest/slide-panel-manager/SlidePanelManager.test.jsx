import React from 'react';
import SlidePanelManger from '../../../src/slide-panel-manager';

const TestChild = () => <div />;

describe('SlidePanelManger', () => {
  describe('Snapshots', () => {
    it('should render with required props', () => {
      const wrapper = shallow((
        <SlidePanelManger>
          <TestChild />
        </SlidePanelManger>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const wrapper = shallow((
        <SlidePanelManger
          disclosureAccessory={<div>Test Accessory</div>}
          unsavedChangesPromptResolutionOptions={{
            test: 'options',
          }}
        >
          <TestChild />
        </SlidePanelManger>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('DisclosureContainer', () => {
    it('should wrap disclosed content in a DisclosureContainer with default prompt options', () => {
      const promptOptions = { test: 'options' };

      const wrapper = shallow((
        <SlidePanelManger
          unsavedChangesPromptResolutionOptions={promptOptions}
        >
          <TestChild />
        </SlidePanelManger>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.unsavedChangesPromptResolutionOptions).toBeDefined();
    });
  });
});
