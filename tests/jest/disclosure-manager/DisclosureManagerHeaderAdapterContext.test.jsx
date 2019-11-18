import DisclosureManagerHeaderAdapterContext from '../../../src/disclosure-manager/DisclosureManagerHeaderAdapterContext';

describe('DisclosureManagerHeaderAdapterContext', () => {
  it('should export a Context object', () => {
    expect(DisclosureManagerHeaderAdapterContext.Provider).toBeDefined();
    expect(DisclosureManagerHeaderAdapterContext.Consumer).toBeDefined();
  });
});
