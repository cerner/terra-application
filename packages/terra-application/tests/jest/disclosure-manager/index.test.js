import DisclosureManager, {
  withDisclosureManager,
  disclosureManagerShape,
  DisclosureManagerContext,
  DisclosureManagerDelegate,
  getActiveDisclosureCount,
  closeMostRecentDisclosure,
} from '../../../src/disclosure-manager';

describe('disclosure-manager/index', () => {
  it('should export DisclosureManager', () => {
    expect(DisclosureManager).toBeDefined();
  });

  it('should export withDisclosureManager', () => {
    expect(withDisclosureManager).toBeDefined();
  });

  it('should export disclosureManagerShape', () => {
    expect(disclosureManagerShape).toBeDefined();
  });

  it('should export DisclosureManagerContext', () => {
    expect(DisclosureManagerContext).toBeDefined();
  });

  it('should export DisclosureManagerDelegate', () => {
    expect(DisclosureManagerDelegate).toBeDefined();
  });

  it('should export getActiveDisclosureCount', () => {
    expect(getActiveDisclosureCount).toBeDefined();
  });

  it('should export closeMostRecentDisclosure', () => {
    expect(closeMostRecentDisclosure).toBeDefined();
  });
});
