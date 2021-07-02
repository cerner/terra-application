import ApplicationIntlContext from '../../../src/application-intl/ApplicationIntlContext';

describe('ApplicationIntlContext', () => {
  it('export the created context', () => {
    expect(ApplicationIntlContext).toBeDefined();
    expect(ApplicationIntlContext.Provider).toBeDefined();
    expect(ApplicationIntlContext.Consumer).toBeDefined();
  });
});
