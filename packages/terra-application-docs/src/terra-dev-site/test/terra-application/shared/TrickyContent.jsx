import { NavigationItemContext } from '@cerner/terra-application/lib/navigation-item';
import React from 'react';

const TrickyContent = ({ id }) => {
  const contentRef = React.useRef();
  const { isActive } = React.useContext(NavigationItemContext);

  console.log(`${id} isActive: ${isActive}`);

  // React.useLayoutEffect(() => {
  //   // setTimeout(() => {
  //   if (document.getElementById(`#${id}`)) {
  //     console.log(`ELEMENT FOUND: ${id}`);
  //   } else {
  //     console.log(`ELEMENT NOT FOUND: ${id}`);
  //   }
  //   // }, 0);
  // });

  React.useLayoutEffect(() => {
    if (!isActive) {
      return;
    }
    // setTimeout(() => {
    debugger;
    if (document.getElementById(`#${id}`)) {
      console.log(`isActive - ELEMENT FOUND: ${id}`);
    } else {
      console.log(`isActive - ELEMENT NOT FOUND: ${id}`);
    }
    // }, 0);
  }, [isActive]);

  React.useLayoutEffect(() => {
    console.log(`${id} Ref: ${contentRef.current}`);
  });

  return (
    <div id={id} ref={contentRef}>Content with DOM lookup</div>
  );
};

export default TrickyContent;
