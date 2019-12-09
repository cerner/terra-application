import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';
import { withDisclosureManager } from '../../../src/disclosure-manager';
import SlidePanelManger from '../../../src/slide-panel-manager';

const TestChild = () => <div />;

describe('SlidePanelManger', () => {
  describe('Snapshots', () => {
    it('should render with required props', () => {
      const wrapper = shallow((
        <SlidePanelManger.WrappedComponent intl={mockIntl}>
          <TestChild />
        </SlidePanelManger.WrappedComponent>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const wrapper = shallow((
        <SlidePanelManger.WrappedComponent
          intl={mockIntl}
          disclosureAccessory={<div>Test Accessory</div>}
          navigationPromptResolutionOptions={{
            test: 'options',
          }}
        >
          <TestChild />
        </SlidePanelManger.WrappedComponent>
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('DisclosureContainer', () => {
    it('should wrap disclosed content in a DisclosureContainer with default prompt options', () => {
      const wrapper = shallow((
        <SlidePanelManger.WrappedComponent
          intl={mockIntl}
        >
          <TestChild />
        </SlidePanelManger.WrappedComponent>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.navigationPromptResolutionOptions).toBeDefined();
      expect(disclosureWrapper.props.navigationPromptResolutionOptions([{ description: 'mock prompt' }])).toMatchSnapshot();
    });

    ('should wrap disclosed content in a DisclosureContainer with provided prompt options', () => {
      const promptOptions = { test: 'options' };

      const wrapper = shallow((
        <SlidePanelManger.WrappedComponent
          intl={mockIntl}
          navigationPromptResolutionOptions={promptOptions}
        >
          <TestChild />
        </SlidePanelManger.WrappedComponent>
      ));

      const disclosureWrapper = wrapper.props().withDisclosureContainer(<div>Test Disclosure Content</div>);
      expect(disclosureWrapper.props.navigationPromptResolutionOptions).toEqual(promptOptions);
    });
  });
});
