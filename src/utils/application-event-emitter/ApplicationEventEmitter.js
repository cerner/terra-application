import EventEmitter from 'eventemitter3';

let eventEmitterInstance = null;

class ApplicationEventEmitter {
  constructor() {
    if (!eventEmitterInstance) {
      eventEmitterInstance = new EventEmitter();
      return eventEmitterInstance;
    }

    return eventEmitterInstance;
  }
}

export default ApplicationEventEmitter;
