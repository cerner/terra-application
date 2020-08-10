import ApplicationStatusOverlayContext from '../../../src/application-status-overlay/ApplicationStatusOverlayContext';

describe('ApplicationStatusOverlayContext', () => {
  it('export the created context', () => {
    expect(ApplicationStatusOverlayContext).toBeDefined();
    expect(ApplicationStatusOverlayContext.Provider).toBeDefined();
    expect(ApplicationStatusOverlayContext.Consumer).toBeDefined();
  });
});
