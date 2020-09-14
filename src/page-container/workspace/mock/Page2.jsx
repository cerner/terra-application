import React from 'react';
import Panel from '../Panel';

const Page2 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'yellow', padding: '0.5rem', margin: '0' }}>Page 2 Toolbar</p>}
      actions={[<button key="lobster">test2</button>]}
    >
      <p>content 2</p>
    </Panel>
  );
};

Page2.titleKey = "derp2";

export default Page2;