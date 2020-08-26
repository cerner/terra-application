import React, { useState, useEffect } from 'react';
import EventEmitter from 'terra-application/lib/utils/event-emitter';

const EventEmitterExample = () => {
  const [counter, setCounter] = useState(0);
  const [eventEmitter] = useState(() => new EventEmitter());

  useEffect(() => {
    const listener = () => {
      setCounter(prevCounter => prevCounter + 1);
    };

    eventEmitter.on('increment-counter', listener);

    return () => {
      eventEmitter.removeAllListeners();
    };
  }, [eventEmitter]);

  return (
    <div>
      <h3>Event Emitter</h3>
      <p>The EventEmitter is used to facilitate communications within the application. Clicking the emitter button emits an event to the Listener to increment the value by 1.</p>
      <p>
        Emitter:
        {' '}
        <button type="button" onClick={() => { eventEmitter.emit('increment-counter'); }}>
          Emit event to increment
        </button>
      </p>
      <p>
        Listener:
        {' '}
        {counter}
      </p>
    </div>
  );
};

export default EventEmitterExample;
