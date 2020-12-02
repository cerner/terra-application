class WindowManager {
  static shouldShowUnloadPrompt(triggers) {
    let result = false;
    for (let i = 0, count = triggers.length; i < count; i += 1) {
      result = triggers[i]();
      if (result) {
        break;
      }
    }

    return result;
  }

  constructor() {
    this.promptTriggers = [];

    window.addEventListener('beforeunload', (event) => {
      if (WindowManager.shouldShowUnloadPrompt(this.promptTriggers)) {
        event.preventDefault();

        /**
         * Chrome requires returnValue to be set to present the confirmation dialog
         */
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        /**
         * For this prompt, ApplicationBase is limited to browser-defaulted messaging.
         */
        return '';
      }

      return undefined;
    });
  }

  registerUnloadPromptTrigger(trigger) {
    this.promptTriggers = [...this.promptTriggers, trigger];

    return () => {
      this.promptTriggers = this.promptTriggers.filter(registeredTrigger => registeredTrigger !== trigger);
    };
  }

  forceLocationReload() {
    this.promptTriggers = [];
    window.location.reload();
  }

  forceLocationAssign(url) {
    this.promptTriggers = [];
    window.location.assign(url);
  }
}

export default new WindowManager();
