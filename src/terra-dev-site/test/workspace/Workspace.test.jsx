import React from 'react';
import { Workspace, WorkspaceItem } from '../../../workspace';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const sizeMap = {
  tiny: '250px',
  small: '500px',
  large: '1000px',
};

const WorkspaceTest = () => {
  const [activeItemKey, setActiveItemKey] = React.useState('tab-1'); // TODO do we need to externalize this for manipulation
  const [workspaceSize, setWorkspaceSize] = React.useState('small'); // TODO do we need to externalize this for manipulation

  const onRequestSizeChange = (size) => {
    console.log('onRequestSizeChange', size);
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log('onRequestClose');
  };

  return (
    <div style={{ width: sizeMap[workspaceSize] }}>
      <Workspace
        id="test-id"
        activeItemKey={activeItemKey}
        ariaLabel="work space"
        onRequestActivate={metaData => setActiveItemKey(metaData.key)}
        activeSize={workspaceSize}
        sizeOptions={[{
          key: 'tiny',
          text: 'Tiny',
        }, {
          key: 'small',
          text: 'Small',
        }, {
          key: 'large',
          text: 'Large',
        }]}
        onRequestSizeChange={onRequestSizeChange}
        onRequestDismiss={onRequestClose}
      >
        <WorkspaceItem
          itemKey="tab-1"
          label="tab-1"
          metaData={{ key: 'tab-1' }}
          render={() => <Tab1 />}
        />
        <WorkspaceItem
          itemKey="tab-2"
          label="tab-2"
          metaData={{ key: 'tab-2' }}
          render={() => <Tab2 />}
        />
        <WorkspaceItem
          itemKey="tab-3"
          label="tab-3"
          metaData={{ key: 'tab-3' }}
          render={() => <Tab3 />}
        />
        <WorkspaceItem
          itemKey="tab-4"
          label="tab-4"
          metaData={{ key: 'tab-4' }}
          render={() => <Tab4 />}
        />
      </Workspace>
    </div>
  );
};

export default WorkspaceTest;
