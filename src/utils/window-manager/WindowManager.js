/**
 * The WindowManager singleton allows disparate sources to register unload event
 * handlers, ensuring a user is prompted (browser support willing) prior to
 * window dismissal. Only one prompt will be presented, even if multiple
 * handlers are registered at any given time.
 *
 * It also provides functions to bypass the unload prompt in scenarios that
 * require the unload to occur uninterrupted. The use case for these functions
 * is limited to data safety concerns and should not be used under any other
 * circumstances.
 */

class WindowManager {
  /**
   * Iterates over the provided signal functions and executes them in turn until
   * a truthy value is found or the signals are exhausted.
   * @param {Array} signals An array of signal functions, each returning a
   * boolean value.
   * @returns True if a single signal function returns true, false otherwise.
   */
  static shouldShowUnloadPrompt(signals) {
    let result = false;
    for (let i = 0, count = signals.length; i < count; i += 1) {
      result = signals[i]();
      if (result) {
        break;
      }
    }

    return result;
  }

  constructor() {
    this.signals = [];
    this.beforeUnloadHandler = (event) => {
      if (WindowManager.shouldShowUnloadPrompt(this.signals)) {
        event.preventDefault();

        // Chrome requires returnValue to be set to present the dialog prompt.
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        // Other browsers require a string to be returned to present the prompt.
        // We are limited to the browser-defaulted messaging for this prompt.
        return '';
      }

      return undefined;
    };

    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  /**
   * Registers the provided signal function with the WindowManager. The provided
   * function is executed before the unload event execution to determine if the
   * unload prompt should be shown. This function may be called multiple times.
   *
   * @param {Function} signal A function executed during the beforeunload event.
   * Should return true if a prompt is desired, false otherwise.
   * @returns A function that will unregister the handler upon execution.
   */
  registerUnloadPromptSignal(signal) {
    this.signals = [...this.signals, signal];

    return () => {
      this.signals = this.signals.filter(registeredSignal => (
        registeredSignal !== signal
      ));
    };
  }

  /**
   * Disables the unload event handling prior to reloading the current location
   * to ensure the user is not prompted.
   */
  dangerouslyForceLocationReload() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);

    window.location.reload();
  }

  /**
   * Disables the unload event handling prior to assigning the provided location
   * to ensure the user is not prompted.
   */
  dangerouslyForceLocationAssign(url) {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);

    window.location.assign(url);
  }
}

// A WindowManager is instantiated by default, and its public API is exposed as
// the default export.
const windowManagerSingleton = new WindowManager();
const singletonExports = {
  registerUnloadPromptSignal: windowManagerSingleton.registerUnloadPromptSignal,
  dangerouslyForceLocationReload: windowManagerSingleton.dangerouslyForceLocationReload,
  dangerouslyForceLocationAssign: windowManagerSingleton.dangerouslyForceLocationAssign,
};

export default singletonExports;

// The class definition itself is exported for testing purposes.
export { WindowManager as TestWindowManager };
