import React from 'react';
import Panel from '../Panel';

const Page4 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'lightgreen', padding: '0.5rem', margin: '0' }}>Page 4 Toolbar</p>}
      actions={[<button key="lobster">test4</button>]}
    >
      <p>content 4</p>
    </Panel>  
  );
};

Page4.titleKey = "derp";

export default Page4;