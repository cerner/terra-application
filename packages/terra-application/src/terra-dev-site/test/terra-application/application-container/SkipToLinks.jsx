import React from 'react';

import ApplicationBase from '../../../../application-base';
import ApplicationContainer from '../../../../application-container';
import SkipToLink from '../../../../application-container/private/skip-to-links/SkipToLink';

const Main = ({ children }) => { // eslint-disable-line react/prop-types
  const mainRef = React.useRef();

  return (
    <main tabIndex="-1" ref={mainRef}>
      <SkipToLink
        description="Content"
        onSelect={() => mainRef.current.focus()}
      />
      {children}
    </main>
  );
};

const SkipToLinks = () => {
  const otherRef = React.useRef();

  return (
    <ApplicationBase locale="en-US">
      <ApplicationContainer>
        <Main>
          <SkipToLink
            description="Other Link"
            onSelect={() => {
              otherRef.current.focus();
            }}
          />
          <p>Main Content</p>
          <div ref={otherRef} tabIndex="-1">
            <p>Other Content</p>
          </div>
        </Main>
      </ApplicationContainer>
    </ApplicationBase>
  );
};

export default SkipToLinks;
