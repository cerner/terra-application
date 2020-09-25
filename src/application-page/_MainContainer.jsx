import React from 'react';

import SkipToLink from '../application-container/SkipToLink';

const propTypes = {};

function deferAction(callback) {
  setTimeout(callback, 0);
}

const MainContainer = ({ isVisible, ...props }) => {
  const mainElementRef = React.useRef();

  return (
    <>
      {isVisible ? (
        <SkipToLink
          isMain
          description="Skip to Main Content" // TODO INTL
          callback={() => {
            deferAction(() => mainElementRef.current?.focus());
          }}
        />
      ) : undefined}
      <main ref={mainElementRef} {...props} />
    </>
  );
};

MainContainer.propTypes = propTypes;

export default MainContainer;
