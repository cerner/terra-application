export { default as DisclosureManager } from 'terra-disclosure-manager';
export {
  DisclosureManagerContext,
  DisclosureManagerDelegate,
  DisclosureManagerHeaderAdapter,
  DisclosureManagerHeaderAdapterContext,
  availableDisclosureHeights,
  availableDisclosureSizes,
  availableDisclosureWidths,
  disclosureManagerShape,
  withDisclosureManager,
} from 'terra-disclosure-manager';

export { closeMostRecentDisclosure, getActiveDisclosureCount } from './_disclosureCallbacks';
