import * as ScrollPersistence from '../../../../src/utils/scroll-persistence/scroll-persistence';

jest.mock('uuid/v4', () => () => 'test-uuid');

describe('getOverflowDataForElement', () => {
  test('should apply overflow-id if none exists on element', () => {
    const mockElement = {
      getAttribute: () => undefined,
      setAttribute: jest.fn(),
      scrollTop: 15,
      scrollLeft: 20,
    };

    const result = ScrollPersistence.getOverflowDataForElement(mockElement);

    expect(mockElement.setAttribute).toHaveBeenCalledWith('data-persistent-overflow-id', 'test-uuid');
    expect(result['test-uuid'].scrollTop).toBe(15);
    expect(result['test-uuid'].scrollLeft).toBe(20);
  });

  test('should not apply overflow-id if one  exists on element', () => {
    const mockElement = {
      getAttribute: () => 'local-uuid',
      setAttribute: jest.fn(),
      scrollTop: 15,
      scrollLeft: 20,
    };

    const result = ScrollPersistence.getOverflowDataForElement(mockElement);

    expect(mockElement.setAttribute).not.toHaveBeenCalledWith('data-persistent-overflow-id', 'local-uuid');
    expect(result['local-uuid'].scrollTop).toBe(15);
    expect(result['local-uuid'].scrollLeft).toBe(20);
  });
});

describe('getPersistentScrollMap', () => {
  test('should return object containing all scroll persistence items', () => {
    const mockElement1 = {
      getAttribute: () => 'uuid-1',
      setAttribute: jest.fn(),
      scrollTop: 15,
      scrollLeft: 20,
    };

    const mockElement2 = {
      getAttribute: () => 'uuid-2',
      setAttribute: jest.fn(),
      scrollTop: 25,
      scrollLeft: 30,
    };

    const mockContainer = {
      querySelectorAll: () => [mockElement1, mockElement2],
    };

    const result = ScrollPersistence.getPersistentScrollMap(mockContainer);

    expect(result['uuid-1'].scrollTop).toBe(15);
    expect(result['uuid-1'].scrollLeft).toBe(20);
    expect(result['uuid-2'].scrollTop).toBe(25);
    expect(result['uuid-2'].scrollLeft).toBe(30);
  });

  test('should not blow up when no scroll items are found', () => {
    const mockContainer = {
      querySelectorAll: () => [],
    };

    const result = ScrollPersistence.getPersistentScrollMap(mockContainer);

    expect(Object.keys(result).length).toBe(0);
  });
});

describe('applyScrollData', () => {
  test('should apply data to found elements', () => {
    const mockElement = {};
    Object.defineProperty(mockElement, 'scrollLeft', {
      enumerable: true,
      get() {
        return this.testScrollLeft;
      },
      /** @this {!Element} */
      set(val) {
        this.testScrollLeft = val;
      },
    });
    Object.defineProperty(mockElement, 'scrollTop ', {
      enumerable: true,
      get() {
        return this.testScrollTop;
      },
      /** @this {!Element} */
      set(val) {
        this.testScrollTop = val;
      },
    });

    const mockContainer = {
      querySelector: (selector) => {
        if (selector === '[data-persistent-overflow-id="uuid-1"]') {
          return mockElement;
        }
        return undefined;
      },
    };

    ScrollPersistence.applyScrollData({
      'uuid-1': {
        scrollLeft: 10,
        scrollTop: 20,
      },
      'uuid-2': {
        scrollLeft: 30,
        scrollTop: 40,
      },
    }, mockContainer);

    expect(mockElement.scrollLeft).toBe(10);
    expect(mockElement.scrollTop).toBe(20);
  });
});

