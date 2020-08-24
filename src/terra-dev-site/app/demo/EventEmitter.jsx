import React, { useState } from 'react';
import EventEmitter from 'terra-application/lib/utils/event-emitter';

class EventEmitterExample extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.listener = this.listener.bind(this);
    this.eventEmitter = new EventEmitter();
  }

  componentDidMount() {
    this.eventEmitter.on('increment-counter', this.listener);
  }

  componentWillUnmount() {
    this.eventEmitter.removeAllListeners();
  }

  listener() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div>
        <h3>Event Emitter</h3>
        <p>The EventEmitter is used to facilitate communications within the application. Clicking the emitter button emits an event to the Listener to increment the value by 1.</p>
        <p>
          Emitter:
          {' '}
          <button type="button" onClick={() => { this.eventEmitter.emit('increment-counter'); }} >
            {'Emit event to increment'}
          </button>
        </p>
        <p>
          Listener:
          {' '}
          {this.state.counter}
        </p>
      </div>
    );
  }
};

export default EventEmitterExample;
