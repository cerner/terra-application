import {
  addCallback,
  removeCallback,
  closeMostRecentDisclosure,
  getActiveDisclosureCount,
} from '../../../src/disclosure-manager/_disclosureCallbacks';

const callback1 = () => 1;
const callback2 = () => 2;
const callback3 = () => 3;

describe('disclosureCallbacks', () => {
  beforeEach(() => {
    addCallback(callback1);
    addCallback(callback2);
    addCallback(callback3);
  });

  afterEach(() => {
    removeCallback(callback1);
    removeCallback(callback2);
    removeCallback(callback3);
  });

  describe('closeMostRecentDisclosure', () => {
    it('closes the disclosure most recently added to the stack', () => {
      expect(closeMostRecentDisclosure()).toEqual(3);

      removeCallback(callback2);
      expect(closeMostRecentDisclosure()).toEqual(3);

      removeCallback(callback3);
      expect(closeMostRecentDisclosure()).toEqual(1);

      removeCallback(callback1);
      return expect(closeMostRecentDisclosure()).resolves.toEqual(undefined);
    });
  });

  describe('getActiveDisclosureCount', () => {
    it('returns the number of callbacks on the stack', () => {
      expect(getActiveDisclosureCount()).toEqual(3);

      removeCallback(callback3);
      expect(getActiveDisclosureCount()).toEqual(2);

      removeCallback(callback2);
      removeCallback(callback1);
      expect(getActiveDisclosureCount()).toEqual(0);
    });
  });
});
