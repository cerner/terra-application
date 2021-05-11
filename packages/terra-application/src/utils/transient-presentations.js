import React from 'react';

import EventEmitter from './event-emitter';
import deferExecution from './defer-execution';

const DISMISS_TRANSIENT_PRESENTATIONS_EVENT = 'terra-application.dismiss-transient-presentations';

/**
 * Emits the transient presentation dismissal event. If subsequent actions must
 * be performed after the dismissal, it is recommended to use the deferAction
 * utility to run those actions in the next run loop to ensure the dismissals
 * have been performed prior to execution.
 *
 * @param {Function} callback a function executed in the next run loop following
 * the event emission.
 * @returns A timeout identifier if a callback is provided, undefined otherwise.
 */
function dismissTransientPresentations(callback) {
  EventEmitter.emit(DISMISS_TRANSIENT_PRESENTATIONS_EVENT);

  if (callback) {
    return deferExecution(callback);
  }

  return undefined;
}

/**
 * Custom hook that provides state references that will update based on
 * emissions of the dismiss transient state event.
 *
 * This hook is most useful in replacing boolean state declarations. If more
 * complex state objects are required, the useDismissTransientPresentationsCallback
 * hook is also available.
 *
 * @param {Boolean} initialState The initial state value to be provided.
 * @returns A state/setState pair.
 */
function useTransientPresentationState(initialState) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    EventEmitter.on(DISMISS_TRANSIENT_PRESENTATIONS_EVENT, () => {
      setState(false);
    });
  }, []);

  return [state, setState];
}

/**
 * Custom hook that executes the provided callback when the transient dismissal
 * event is emitted. Typically used to update complex state after emission of
 * the dismissal event.
 *
 * @param {Function} callback The callback to be executed upon event emission.
 * @param {Array} dependencies The array of reference dependencies used by
 * callback. Similar to the dependencies argument of the useEffect hook, the
 * callback will not be rebound if the dependencies have not changed since the
 * last update.
 */
function useDismissTransientPresentationsEffect(callback, dependencies) {
  React.useEffect(() => {
    EventEmitter.on(DISMISS_TRANSIENT_PRESENTATIONS_EVENT, callback);

    return () => {
      EventEmitter.off(DISMISS_TRANSIENT_PRESENTATIONS_EVENT, callback);
    };
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
  // The callback dependencies are unable to be statically checked by the lint
  // rules given their pass-through nature, but this implementation allows us to
  // minimize event bindings without requiring a static callback reference.
}

export {
  dismissTransientPresentations,
  useTransientPresentationState,
  useDismissTransientPresentationsEffect,
  DISMISS_TRANSIENT_PRESENTATIONS_EVENT,
};
