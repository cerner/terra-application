import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Page1 = () => {
  const buttonRef = useRef();
  const [ isReset, setIsReset ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  return (
    <>
      <Panel
        key={isReset ? 'derp1' : 'derp2'}
        toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Page 1 Toolbar</p>}
        actions={[<button onClick={() => setIsOpen(!isOpen)} ref={buttonRef} key="lobster">test1</button>]}
      >
        <MockContent title="Page 1" initialCount={0} />
      </Panel>
      <Popup
        isOpen={isOpen}
        targetRef={() => buttonRef.current}
        contentHeight="40"
        contentWidth="160"
      >
        <button onClick={() => { setIsReset(!isReset);  setIsOpen(!isOpen); }}>reset</button>
      </Popup>
    </>
  );
};

Page1.titleKey = "derp";

export default Page1;