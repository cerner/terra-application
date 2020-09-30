import React, { forwardRef } from 'react';

import SkipToLink from '../../application-container/private/skip-to/SkipToLink';
import NavigationContext from '../../navigation/NavigationContext';

const propTypes = {};

function deferAction(callback) {
  setTimeout(callback, 0);
}

const MainContainer = forwardRef(({ isVisible, ...props }, ref) => {
  const mainElementRef = React.useRef();
  const navigationContext = React.useContext(NavigationContext);

  return (
    <>
      {navigationContext.isActive ? (
        <SkipToLink
          isMain
          description="Skip to Main Content" // TODO INTL
          callback={() => {
            deferAction(() => mainElementRef.current?.focus());
          }}
        />
      ) : undefined}
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
