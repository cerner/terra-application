import ApplicationPageStatusContext from '../../../src/application-page-status/ApplicationPageStatusContext';

describe('ApplicationPageStatusContext', () => {
  it('export the created context', () => {
    expect(ApplicationPageStatusContext).toBeDefined();
    expect(ApplicationPageStatusContext.Provider).toBeDefined();
    expect(ApplicationPageStatusContext.Consumer).toBeDefined();
  });
});
