import React from 'react';
import i18nLoader from '../../../src/application-base/private/i18nLoader';
import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('ApplicationBase', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ApplicationBase
        locale="en"
        themeName="test-theme"
        unloadPromptIsDisabled
      >
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with the preferred browser locale', () => {
    const wrapper = shallow((
      <ApplicationBase>
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  describe('base handles i18n data loading', () => {
    beforeAll(() => {
      // eslint-disable-next-line no-console
      console.error = jest.fn();
    });

    beforeEach(() => {
      // eslint-disable-next-line no-console
      console.error.mockClear();
      jest.resetModules();
    });

    it('renders as expected when i18n data loads successfully', () => {
      jest.doMock(i18nLoader, () => Promise.resolve({}));
      expect(() => mount(<ApplicationBase locale="en">String</ApplicationBase>)).not.toThrowError();
      expect(i18nLoader).toHaveBeenCalled();
      // eslint-disable-next-line no-console
      expect(console.error).not.toHaveBeenCalled();
    });

    it('logs error when i18n data fails to load', () => {
      jest.doMock(i18nLoader, () => Promise.reject(new Error('failed to load data.')));
      expect(() => mount(<ApplicationBase locale="en">String</ApplicationBase>)).not.toThrowError();
      expect(i18nLoader).toHaveBeenCalled();
      // eslint-disable-next-line no-console
      expect(console.error).toHaveBeenCalled();
    });

    it('throws error when i18n data fails to load', () => {
      sjest.doMock(i18nLoader, () => Promise.reject(new Error('failed to load data.')));
      expect(() => mount(<ApplicationBase locale="en">String</ApplicationBase>)).toThrowError();
      expect(i18nLoader).toHaveBeenCalled();
      // eslint-disable-next-line no-console
      expect(console.error).toHaveBeenCalled();
    });
  });
});
