import React, { forwardRef } from 'react';

import SkipToButton from '../../application-container/private/skip-to/SkipToButton';

const propTypes = {};

function deferAction(callback) {
  setTimeout(callback, 0);
}

const MainContainer = forwardRef(({ isVisible, ...props }, ref) => {
  const mainElementRef = React.useRef();

  return (
    <>
      <SkipToButton
        isMain
        description="Main Content" // TODO INTL
        onSelect={() => {
          deferAction(() => mainElementRef.current?.focus());
        }}
      />
      <main
        tabIndex="-1"
        ref={(mainRef) => {
          mainElementRef.current = mainRef;

          if (!ref) {
            return;
          }

          if (typeof ref === 'function') {
            ref.call(mainRef);
          } else {
            ref.current = mainRef;
          }
        }}
        {...props}
      />
    </>
  );
});

MainContainer.propTypes = propTypes;

export default MainContainer;
