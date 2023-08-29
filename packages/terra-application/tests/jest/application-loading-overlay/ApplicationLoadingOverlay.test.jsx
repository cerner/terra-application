import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import ApplicationLoadingOverlay from '../../../src/application-loading-overlay/ApplicationLoadingOverlay';

const mockUuid = '00000000-0000-0000-0000-000000000000';

describe('ApplicationLoadingOverlay', () => {
  let mockSpyUuid;
  let mockSpyContext;
  const loadingOverlayContextValue = {
    show: jest.fn(),
    hide: jest.fn(),
  };

  beforeAll(() => {
    mockSpyContext = jest.spyOn(React, 'useContext').mockReturnValue(loadingOverlayContextValue);
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue(mockUuid);
  });

  afterAll(() => {
    mockSpyContext.mockRestore();
    mockSpyUuid.mockRestore();
  });

  it('should render loading overlay as closed', () => {
    const wrapper = mount(
      <ApplicationLoadingOverlay />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(0);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);

    wrapper.unmount();
    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(0);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(2);
  });

  it('should render loading overlay as open', () => {
    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();
    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should transition from open to closed', () => {
    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ isOpen: false });

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(2);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should redisplay loading overlay with new props', () => {
    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe(mockUuid);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ backgroundStyle: 'dark' });

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(loadingOverlayContextValue.show.mock.calls[1][0]).toBe(mockUuid);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe(mockUuid);
  });

  it('should honor backgroundStyle prop', () => {
    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen backgroundStyle="clear" />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ backgroundStyle: 'light' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ backgroundStyle: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });
});
