import { EventEmitter } from '../../../../src/utils'; // eslint-disable-line import/no-duplicates
import { EventEmitter as EventEmitter2 } from '../../../../src/utils'; // eslint-disable-line import/no-duplicates

describe('EventEmitter', () => {
  let listenCount = 0;

  const listener = (addCounter) => {
    if (addCounter) {
      listenCount += addCounter;
    } else {
      listenCount += 1;
    }
  };

  beforeEach(() => {
    listenCount = 0;
  });

  afterEach(() => {
    EventEmitter.removeAllListeners();
  });

  it('should create event emitter singleton', () => {
    expect(EventEmitter).toEqual(EventEmitter2);
  });

  it('shared singleton instance', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter2.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('emit', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter.on('event-name', listener);
    const hasListener = EventEmitter.emit('event-name');
    const noListener = EventEmitter.emit('no-listener-event');

    expect(listenCount).toEqual(2);
    expect(hasListener).toBeTruthy();
    expect(noListener).toBeFalsy();
  });

  it('emit with arguments', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter.emit('event-name', 100);

    expect(listenCount).toEqual(100);
  });

  it('once', () => {
    EventEmitter.once('event-name', listener);
    EventEmitter.emit('event-name');
    EventEmitter.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('on', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter.on('event-name', listener);
    EventEmitter.emit('event-name');
    EventEmitter.emit('event-name');

    expect(listenCount).toEqual(4);
  });

  it('addListener', () => {
    EventEmitter.addListener('event-name', listener);
    EventEmitter.emit('event-name');

    expect(listenCount).toEqual(1);
  });

  it('off', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter.off('event-name', listener);
    EventEmitter.emit('event-name');

    expect(listenCount).toEqual(0);
  });

  it('removeListener', () => {
    EventEmitter.on('event-name', listener);
    EventEmitter.on('event-name', listener);
    EventEmitter.removeListener('event-name', listener);
    EventEmitter.emit('event-name');

    expect(listenCount).toEqual(0);
  });

  it('removeAllListeners', () => {
    EventEmitter.on('event-name1', listener);
    EventEmitter.on('event-name2', listener);
    EventEmitter.on('event-name3', listener);
    EventEmitter.removeAllListeners();
    EventEmitter.emit('event-name1');
    EventEmitter.emit('event-name2');
    EventEmitter.emit('event-name3');

    expect(listenCount).toEqual(0);
    expect(EventEmitter.listenerCount('event-name1')).toEqual(0);
    expect(EventEmitter.listenerCount('event-name2')).toEqual(0);
    expect(EventEmitter.listenerCount('event-name3')).toEqual(0);
  });

  it('listenerCount', () => {
    EventEmitter.on('event-name', () => {});
    EventEmitter.on('event-name', () => {});
    EventEmitter.on('different-event-name', () => {});

    expect(EventEmitter.listenerCount('event-name')).toEqual(2);
    expect(EventEmitter.listenerCount('different-event-name')).toEqual(1);
  });

  it('listeners', () => {
    EventEmitter.on('event-name', listener);

    expect(EventEmitter.listeners('event-name')[0]).toEqual(listener);
  });

  it('eventNames', () => {
    const eventNames = ['event-name1', 'event-name2', 'event-name3'];
    EventEmitter.on(eventNames[0], listener);
    EventEmitter.on(eventNames[1], listener);
    EventEmitter.on(eventNames[2], listener);

    expect(EventEmitter.eventNames()).toEqual(eventNames);
  });
});
