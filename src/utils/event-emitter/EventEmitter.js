import EventEmitter3 from 'eventemitter3';

let eventEmitterInstance = null;

class EventEmitter {
  constructor() {
    if (!eventEmitterInstance) {
      eventEmitterInstance = new EventEmitter3();
      return eventEmitterInstance;
    }

    return eventEmitterInstance;
  }
}

export default EventEmitter;
