import { KEY_ESCAPE } from 'keycode-js';

function initializeGlobalEvents() {
  window.addEventListener('keydown', (event) => {
    if (event.keyCode === KEY_ESCAPE) {
      const frameworkDismissEvent = new CustomEvent('TerraApplication.FrameworkDismiss', { detail: event });

      document.dispatchEvent(frameworkDismissEvent);
    }
  });
}

export default initializeGlobalEvents;
