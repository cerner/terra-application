import React from 'react';
import Panel from '../Panel';

const Page1 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Page 2 Toolbar</p>}
      actions={[<button key="lobster">test1</button>]}
    >
      <p>content 1</p>
    </Panel>  
  );
};

Page1.titleKey = "derp";

export default Page1;