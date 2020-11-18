import React from 'react';
import Tabs from '../../../workspace/Tabs';
import TabPage from '../../../workspace/TabPage';
import Tab1 from './Tab1';

const Workspace = () => {
  const [activeTabKey, setActiveTabKey] = React.useState('tab-1'); // TODO do we need to externalize this for manipulation

  const onRequestSizeChange = () => {
    console.log('onRequestSizeChange');
  };

  const onRequestClose = () => {
    console.log('onRequestClose');
  };

  return (
    <Tabs
      id="test-id"
      activeTabKey={activeTabKey}
      ariaLabel="work space"
      onRequestActivate={metaData => setActiveTabKey(metaData.key)}
      activeSize="Large"
      sizeOptions={[{
        key: 'Large',
        text: 'Large',
      }, {
        key: 'Small',
        text: 'small',
      }]}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
    >
      <TabPage
        tabKey="tab-1"
        label="tab-1"
        metaData={{ key: 'tab-1' }}
        render={() => <Tab1 />}
      />
    </Tabs>
  );
};

export default Workspace;
