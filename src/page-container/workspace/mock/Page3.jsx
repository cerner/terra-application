import React from 'react';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Page3 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'lightblue', padding: '0.5rem', margin: '0' }}>Page 3 Toolbar</p>}
      actions={[<button key="lobster">test3</button>]}
    >
      <MockContent title="Page 3" initialCount={0} />
    </Panel>  
  );
};

Page3.titleKey = "derp";

export default Page3;