import DisclosureManagerContext from '../../../src/disclosure-manager/DisclosureManagerContext';

describe('DisclosureManagerContext', () => {
  it('should export a Context object', () => {
    expect(DisclosureManagerContext.Provider).toBeDefined();
    expect(DisclosureManagerContext.Consumer).toBeDefined();
  });
});
