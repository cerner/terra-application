import React from 'react';
import uuidv4 from 'uuid/v4';

import ApplicationStatusOverlay from '../../../src/application-status-overlay/ApplicationStatusOverlay';
import ApplicationStatusOverlayContext from '../../../src/application-status-overlay/ApplicationStatusOverlayContext';

jest.mock('uuid/v4');

describe('ApplicationStatusOverlay', () => {
  let reactUseContext;
  let statusOverlayContextValue;

  beforeAll(() => {
    uuidv4.mockReturnValue('test-id');

    /**
     * Until Enzyme is updated with full support for hooks, we need to
     * mock out the useContext implementation.
     */
    reactUseContext = React.useContext;
    React.useContext = (contextValue) => {
      if (contextValue === ApplicationStatusOverlayContext) {
        return statusOverlayContextValue;
      }
      return reactUseContext(contextValue);
    };
  });

  afterAll(() => {
    React.useContext = reactUseContext;
  });

  beforeEach(() => {
    statusOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };
  });

  it('should render status view without any data', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should render status view with the specified data', () => {
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

    const wrapper = mount(
      <ApplicationStatusOverlay
        buttonAttrs={StatusViewButtons}
        message="Status View with all props specified"
        title="Jest Test"
        variant="no-data"
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should redisplay status view with new props', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay message="Error status view" variant="error" />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ message: 'No data status view', variant: 'no-data' });

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(statusOverlayContextValue.show.mock.calls[1][0]).toBe('test-id');
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should honor buttonAttrs prop', () => {
    const StatusViewButtons1 = [
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

    const StatusViewButtons2 = [
      {
        text: 'Action 3',
        key: 3,
        size: 'medium',
      },
    ];

    const wrapper = mount(
      <ApplicationStatusOverlay buttonAttrs={StatusViewButtons1} />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ buttonAttrs: StatusViewButtons2 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor message prop', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay message="First message" />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ message: 'Second message' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor title prop', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay title="First title" />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ title: 'Second title' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor variant prop', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay variant="no-data" />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ variant: 'no-matching-results' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ variant: 'not-authorized' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ variant: 'error' });
    expect(wrapper).toMatchSnapshot();
  });
});
