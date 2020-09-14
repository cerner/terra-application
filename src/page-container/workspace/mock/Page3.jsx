import React from 'react';
import Panel from '../Panel';

const Page3 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'lightblue', padding: '0.5rem', margin: '0' }}>Page 3 Toolbar</p>}
      actions={[<button key="lobster">test3</button>]}
    >
      <p>content 3</p>
    </Panel>  
  );
};

Page3.titleKey = "derp";

export default Page3;