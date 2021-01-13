import React from 'react';
import { getPersistentScrollMap, applyScrollData } from '../utils/scroll-persistence/scroll-persistence';

const usePortalManager = ({ activePortalKey, onActivatePortal, onDeactivatePortal }) => {
  const containerRef = React.useRef();
  const portalRefs = React.useRef({});
  const lastActiveItemKeyRef = React.useRef();

  React.useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const dataForActivePortal = portalRefs.current[activePortalKey];

    if (containerRef.current.contains(dataForActivePortal?.element)) {
      return;
    }

    if (lastActiveItemKeyRef.current) {
      const elementToRemove = portalRefs.current[lastActiveItemKeyRef.current].element;

      portalRefs.current[lastActiveItemKeyRef.current].scrollData = getPersistentScrollMap(elementToRemove);

      containerRef.current.removeChild(elementToRemove);

      if (onDeactivatePortal) {
        onDeactivatePortal(lastActiveItemKeyRef.current, elementToRemove);
      }
    }

    if (dataForActivePortal?.element) {
      containerRef.current.appendChild(dataForActivePortal.element);

      if (dataForActivePortal.scrollData) {
        applyScrollData(dataForActivePortal.scrollData, dataForActivePortal.element);
      }

      lastActiveItemKeyRef.current = activePortalKey;

      if (onActivatePortal) {
        onActivatePortal(activePortalKey, dataForActivePortal.element);
      }
    } else {
      lastActiveItemKeyRef.current = undefined;
    }
  }, [activePortalKey, onActivatePortal, onDeactivatePortal]);

  return [containerRef, portalRefs];
};

export default usePortalManager;
