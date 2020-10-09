import React from 'react';
import Panel from '../../../workspace/Panel';
import MockContent from './MockContent';

const Page2 = () => {
  return (
    <Panel
      toolBar={<p style={{ backgroundColor: 'yellow', padding: '0.5rem', margin: '0' }}>Page 2 Toolbar</p>}
      actions={[<button key="lobster">test2</button>]}
    >
      <MockContent title="Page 2" initialCount={0} />
    </Panel>
  );
};

Page2.titleKey = "derp2";

export default Page2;