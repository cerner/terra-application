import React from 'react';
import EventEmitter from '../event-emitter';

function dismissTransientPresentations() {
  EventEmitter.emit('terra-application.dismiss-transient-presentations');
}

function useTransientPresentationState(initialState) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    EventEmitter.on('terra-application.dismiss-transient-presentations', () => {
      setState(false);
    });
  }, []);

  return [state, setState];
}

function useDismissTransientPresentationsCallback(callback) {
  React.useEffect(() => {
    EventEmitter.on('terra-application.dismiss-transient-presentations', callback);

    return () => {
      EventEmitter.off('terra-application.dismiss-transient-presentations', callback);
    };
  }, [callback]);
}

export { dismissTransientPresentations, useTransientPresentationState, useDismissTransientPresentationsCallback };
