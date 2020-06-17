import React from 'react';
import uuidv4 from 'uuid/v4';

import ApplicationPageStatus from '../../../src/application-page-status/ApplicationPageStatus';
import ApplicationPageStatusContext from '../../../src/application-page-status/ApplicationPageStatusContext';

jest.mock('uuid/v4');

describe('ApplicationPageStatus', () => {
  let reactUseContext;
  let pageStatusContextValue;

  beforeAll(() => {
    uuidv4.mockReturnValue('test-id');

    /**
     * Until Enzyme is updated with full support for hooks, we need to
     * mock out the useContext implementation.
     */
    reactUseContext = React.useContext;
    React.useContext = (contextValue) => {
      if (contextValue === ApplicationPageStatusContext) {
        return pageStatusContextValue;
      }
      return reactUseContext(contextValue);
    };
  });

  afterAll(() => {
    React.useContext = reactUseContext;
  });

  beforeEach(() => {
    pageStatusContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };
  });

  it('should render status view without any data', () => {
    const wrapper = mount(
      <ApplicationPageStatus />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(pageStatusContextValue.show.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(pageStatusContextValue.show.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.hide.mock.calls[0][0]).toBe('test-id');
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
      <ApplicationPageStatus
        buttonAttrs={StatusViewButtons}
        message="Status View with all props specified"
        title="Jest Test"
        variant="no-data"
      />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(pageStatusContextValue.show.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();

    expect(pageStatusContextValue.show.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should redisplay status view with new props', () => {
    const wrapper = mount(
      <ApplicationPageStatus message="Error status view" variant="error" />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(pageStatusContextValue.show.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ message: 'No data status view', variant: 'no-data' });

    expect(pageStatusContextValue.show.mock.calls.length).toBe(2);
    expect(pageStatusContextValue.show.mock.calls[1][0]).toBe('test-id');
    expect(pageStatusContextValue.hide.mock.calls.length).toBe(1);
    expect(pageStatusContextValue.hide.mock.calls[0][0]).toBe('test-id');
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
      <ApplicationPageStatus buttonAttrs={StatusViewButtons1} />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ buttonAttrs: StatusViewButtons2 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor message prop', () => {
    const wrapper = mount(
      <ApplicationPageStatus message="First message" />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ message: 'Second message' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor title prop', () => {
    const wrapper = mount(
      <ApplicationPageStatus title="First title" />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ title: 'Second title' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should honor variant prop', () => {
    const wrapper = mount(
      <ApplicationPageStatus variant="no-data" />,
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
