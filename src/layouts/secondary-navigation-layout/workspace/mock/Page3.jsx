import React from 'react';
import Panel from '../../../../workspace/Panel';
import MockContent from './MockContent';

const Page3 = () => (
  <Panel
    toolBar={<p style={{ backgroundColor: 'lightblue', padding: '0.5rem', margin: '0' }}>Page 3 Toolbar</p>}
  >
    <MockContent title="Page 3" initialCount={0} />
  </Panel>
);

Page3.titleKey = 'derp';

export default Page3;
