import ApplicationEventEmitter from '../../../src/application-event-emitter/ApplicationEventEmitter';

describe('ApplicationEventEmitter', () => {
  let eventEmitter;
  let listenCount = 0;

  const listener = (addCounter) => {
    if (addCounter) {
      listenCount += addCounter;
    } else {
      listenCount += 1;
    }
  };

  beforeAll(() => {
    eventEmitter = new ApplicationEventEmitter();
  });

  beforeEach(() => {
    listenCount = 0;
  });

  afterEach(() => {
    eventEmitter.removeAllListeners();
  });

  it('should create event emitter singleton', () => {
    const eventEmitter2 = new ApplicationEventEmitter();

    expect(eventEmitter2).toEqual(eventEmitter);
  });

  it('shared singleton instance', () => {
    eventEmitter.on('event-name', listener);
    const eventEmitter2 = new ApplicationEventEmitter();
    eventEmitter2.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('emit', () => {
    eventEmitter.on('event-name', listener);
    eventEmitter.on('event-name', listener);
    const hasListener = eventEmitter.emit('event-name');
    const noListener = eventEmitter.emit('no-listener-event');

    expect(listenCount).toEqual(2);
    expect(hasListener).toBeTruthy();
    expect(noListener).toBeFalsy();
  });

  it('emit with arguments', () => {
    eventEmitter.on('event-name', listener);
    eventEmitter.emit('event-name', 100);

    expect(listenCount).toEqual(100);
  });

  it('once', () => {
    eventEmitter.once('event-name', listener);
    eventEmitter.emit('event-name');
    eventEmitter.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('on', () => {
    eventEmitter.on('event-name', listener);
    eventEmitter.on('event-name', listener);
    eventEmitter.emit('event-name');
    eventEmitter.emit('event-name');

    expect(listenCount).toEqual(4);
  });

  it('addListener', () => {
    eventEmitter.addListener('event-name', listener);
    eventEmitter.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('off', () => {
    eventEmitter.on('event-name', listener);
    eventEmitter.off('event-name', listener);
    eventEmitter.emit('event-name');

    expect(listenCount).toEqual(0);
  });

  it('removeListener', () => {
    eventEmitter.on('event-name', listener);
    eventEmitter.on('event-name', listener);
    eventEmitter.removeListener('event-name', listener);
    eventEmitter.emit('event-name');

    expect(listenCount).toEqual(0);
  });

  it('removeAllListeners', () => {
    eventEmitter.on('event-name1', listener);
    eventEmitter.on('event-name2', listener);
    eventEmitter.on('event-name3', listener);
    eventEmitter.removeAllListeners();
    eventEmitter.emit('event-name1');
    eventEmitter.emit('event-name2');
    eventEmitter.emit('event-name3');

    expect(listenCount).toEqual(0);
    expect(eventEmitter.listenerCount('event-name1')).toEqual(0);
    expect(eventEmitter.listenerCount('event-name2')).toEqual(0);
    expect(eventEmitter.listenerCount('event-name3')).toEqual(0);
  });

  it('listenerCount', () => {
    eventEmitter.on('event-name', () => {});
    eventEmitter.on('event-name', () => {});
    eventEmitter.on('different-event-name', () => {});

    expect(eventEmitter.listenerCount('event-name')).toEqual(2);
    expect(eventEmitter.listenerCount('different-event-name')).toEqual(1);
  });

  it('listeners', () => {
    eventEmitter.on('event-name', listener);

    expect(eventEmitter.listeners('event-name')[0]).toEqual(listener);
  });

  it('eventNames', () => {
    const eventNames = ['event-name1', 'event-name2', 'event-name3'];
    eventEmitter.on(eventNames[0], listener);
    eventEmitter.on(eventNames[1], listener);
    eventEmitter.on(eventNames[2], listener);

    expect(eventEmitter.eventNames()).toEqual(eventNames);
  });
});
