import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ApplicationStatusOverlay from '../../../src/application-status-overlay/ApplicationStatusOverlay';

describe('ApplicationStatusOverlay', () => {
  let mockSpyUuid;
  let mockSpyContext;
  const mockUuid = '00000000-0000-0000-0000-000000000000';
  const statusOverlayContextValue = {
    show: jest.fn(),
    hide: jest.fn(),
  };

  beforeAll(() => {
    mockSpyContext = jest.spyOn(React, 'useContext').mockReturnValue(statusOverlayContextValue);
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockImplementation(() => mockUuid);
  });

  afterAll(() => {
    mockSpyContext.mockRestore();
    mockSpyUuid.mockRestore();
  });

  it('should render status view without any data', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should render status view with the specified data', () => {
    const StatusViewButtons = [
      {
        text: 'Action 1',
        key: 1,
      }, {
        text: 'Action 2',
        key: 2,
      },
    ];

    const wrapper = mount(
      <ApplicationStatusOverlay
        buttonAttrs={StatusViewButtons}
        message="Status View with all props specified"
        variant="no-data"
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should redisplay status view with new props', () => {
    const wrapper = mount(
      <ApplicationStatusOverlay message="Error status view" variant="error" />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ message: 'No data status view', variant: 'no-data' });

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(statusOverlayContextValue.show.mock.calls[1][0]).toBe(mockUuid);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(statusOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(statusOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(statusOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should honor buttonAttrs prop', () => {
    const StatusViewButtons1 = [
      {
        text: 'Action 1',
        key: 1,
      }, {
        text: 'Action 2',
        key: 2,
      },
    ];

    const StatusViewButtons2 = [
      {
        text: 'Action 3',
        key: 3,
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
