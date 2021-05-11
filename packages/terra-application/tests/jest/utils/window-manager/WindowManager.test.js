import WindowManager, { TestWindowManager } from '../../../../src/utils/window-manager/WindowManager';
import setupMockWindow from '../../setupMockWindow';

test('should export the WindowManager singleton API', () => {
  expect(WindowManager).toBeDefined();
  expect(WindowManager.registerUnloadPromptSignal).toBeDefined();
  expect(WindowManager.dangerouslyForceLocationAssign).toBeDefined();
  expect(WindowManager.dangerouslyForceLocationReload).toBeDefined();
});

test('should expose methods for registering signal functions', () => {
  const test = new TestWindowManager();

  const signalFunction1 = jest.fn();
  const signalFunction2 = jest.fn();

  expect(test.signals.length).toBe(0);

  const unregister1 = test.registerUnloadPromptSignal(signalFunction1);

  expect(test.signals.length).toBe(1);

  const unregister2 = test.registerUnloadPromptSignal(signalFunction2);

  expect(test.signals.length).toBe(2);

  unregister1();

  expect(test.signals.length).toBe(1);

  unregister2();

  expect(test.signals.length).toBe(0);
});

test('should register a beforeunload event handler', () => {
  const mockAddEventListener = jest.fn();
  jest.spyOn(window, 'addEventListener').mockImplementation(mockAddEventListener);

  const test = new TestWindowManager();

  expect(mockAddEventListener).toHaveBeenCalledWith('beforeunload', test.beforeUnloadHandler);
});

test('should check registered signal functions in its beforeunload handler', () => {
  const test = new TestWindowManager();

  const mockEvent = {
    preventDefault: jest.fn(),
    returnValue: undefined,
  };

  // Should not handle event with no registered signals
  const result = test.beforeUnloadHandler(mockEvent);
  expect(result).toBeUndefined();
  expect(mockEvent.preventDefault).not.toHaveBeenCalled();

  // Should not handle event signal that returns false
  test.registerUnloadPromptSignal(() => false);
  expect(test.beforeUnloadHandler(mockEvent)).toBeUndefined();
  expect(mockEvent.preventDefault).not.toHaveBeenCalled();

  // Should handle event now that signal returns true
  test.registerUnloadPromptSignal(() => true);
  expect(test.beforeUnloadHandler(mockEvent)).toBe('');
  expect(mockEvent.returnValue).toBe('');
  expect(mockEvent.preventDefault).toHaveBeenCalled();
});

test('should unregister event handler prior to assigning location', () => {
  const mockRemoveEventListener = jest.fn();
  jest.spyOn(window, 'removeEventListener').mockImplementation(mockRemoveEventListener);

  const { restoreWindow } = setupMockWindow();

  const test = new TestWindowManager();

  test.dangerouslyForceLocationAssign('www.test.com');

  expect(mockRemoveEventListener).toHaveBeenCalledWith('beforeunload', test.beforeUnloadHandler);
  expect(window.location.assign).toHaveBeenCalledWith('www.test.com');

  restoreWindow();
});

test('should unregister event handler prior to reloading location', () => {
  const mockRemoveEventListener = jest.fn();
  jest.spyOn(window, 'removeEventListener').mockImplementation(mockRemoveEventListener);

  const { restoreWindow } = setupMockWindow();

  const test = new TestWindowManager();

  test.dangerouslyForceLocationReload();

  expect(mockRemoveEventListener).toHaveBeenCalledWith('beforeunload', test.beforeUnloadHandler);
  expect(window.location.reload).toHaveBeenCalled();

  restoreWindow();
});
