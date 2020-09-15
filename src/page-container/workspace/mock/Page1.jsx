import React from 'react';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Page1 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'pink', padding: '0.5rem', margin: '0' }}>Page 1 Toolbar</p>}
      actions={[<button key="lobster">test1</button>]}
    >
      <MockContent title="Page 1" initialCount={0} />
    </Panel>  
  );
};

Page1.titleKey = "derp";

export default Page1;