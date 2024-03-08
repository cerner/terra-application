import React from 'react';
import ApplicationStatusOverlayProvider from '../../../src/application-status-overlay/ApplicationStatusOverlayProvider';

describe('ApplicationStatusOverlayProvider', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <ApplicationStatusOverlayProvider />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with custom props', () => {
      const wrapper = shallow((
        <ApplicationStatusOverlayProvider className="testClassName" />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const scrollRefCallback = jest.fn();
      const wrapper = shallow((
        <ApplicationStatusOverlayProvider
          scrollRefCallback={scrollRefCallback}
        >
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
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
        }, {
          text: 'Action 2',
          key: 2,
        },
      ];

      React.useState = () => ([{
        1: {
          buttonAttrs: StatusViewButtons,
          message: 'Status View with all props specified',
          variant: 'no-data',
        },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationStatusOverlayProvider>
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
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
        },
      ];

      React.useState = () => ([{
        1: { buttonAttrs: StatusViewButtons },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationStatusOverlayProvider>
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
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
        <ApplicationStatusOverlayProvider>
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
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
        <ApplicationStatusOverlayProvider>
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render a single status view with the configuration from the last rendered ApplicationStatusOverlay when more than one are specified', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();

      React.useState = () => ([{
        1: { message: 'First message', variant: 'error' },
        2: { message: 'Second message', variant: 'not-authorized' },
        3: { message: 'Third message', variant: 'no-data' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationStatusOverlayProvider>
          <div>Test child</div>
        </ApplicationStatusOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should render without scroll', () => {
      const wrapper = shallow((
        <ApplicationStatusOverlayProvider noScroll />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with zIndex prop', () => {
      const wrapper = shallow((
        <ApplicationStatusOverlayProvider zIndex={5000} />
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
