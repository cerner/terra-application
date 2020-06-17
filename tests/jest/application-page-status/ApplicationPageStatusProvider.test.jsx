import React from 'react';
import ApplicationPageStatusProvider from '../../../src/application-page-status/ApplicationPageStatusProvider';

describe('ApplicationPageStatusProvider', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <ApplicationPageStatusProvider />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with custom props', () => {
      const wrapper = shallow((
        <ApplicationPageStatusProvider className="testClassName" />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const scrollRefCallback = jest.fn();
      const wrapper = shallow((
        <ApplicationPageStatusProvider
          scrollRefCallback={scrollRefCallback}
        >
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the status view based on the current state', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      const StatusViewButtons = [
        {
          text: 'Action 1',
          key: 1,
          size: 'medium',
        }, {
          text: 'Action 2',
          key: 2,
          size: 'medium',
        },
      ];

      React.useState = () => ([{
        1: {
          buttonAttrs: StatusViewButtons,
          message: 'Status View with all props specified',
          title: 'Jest Test',
          variant: 'no-data',
        },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render the status view when only buttonAttrs is specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      const StatusViewButtons = [
        {
          text: 'Action 1',
          key: 1,
          size: 'medium',
        },
      ];

      React.useState = () => ([{
        1: { buttonAttrs: StatusViewButtons },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render the status view when only message is specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      React.useState = () => ([{
        1: { message: 'Status View with only message specified' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render the status view when only title is specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      React.useState = () => ([{
        1: { title: 'Jest Test' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render the status view when only variant is specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      React.useState = () => ([{
        1: { variant: 'error' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render a single status view with the configuration from the last rendered ApplicationPageStatus when more than one are specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      React.useState = () => ([{
        1: { message: 'First message', variant: 'error' },
        2: { message: 'Second message', variant: 'not-authorized' },
        3: { message: 'Third message', variant: 'no-data' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationPageStatusProvider>
          <div>Test child</div>
        </ApplicationPageStatusProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });
  });
});
