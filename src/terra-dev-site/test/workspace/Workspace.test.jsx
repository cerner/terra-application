import React from 'react';
import Workspace, { WorkspaceItem } from '../../../workspace';
import ActiveMainPageContext from '../../../application-container/private/active-main-page/ActiveMainPageContext';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';

const sizeMap = {
  tiny: '250px',
  small: '500px',
  large: '1000px',
};

const WorkspaceTest = () => {
  const [activeItemKey, setActiveItemKey] = React.useState('tab-1'); // TODO do we need to externalize this for manipulation
  const [workspaceSize, setWorkspaceSize] = React.useState('small'); // TODO do we need to externalize this for manipulation
  const activeMainPageRef = React.useRef({
    pageKey: 'page-1',
    pageLabel: 'Test Page',
    pageMetaData: {
      data: 'data here',
    }
  });

  const onRequestSizeChange = (size) => {
    console.log('onRequestSizeChange', size);
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log('onRequestClose');
  };

  return (
    <ActiveMainPageContext.Provider value={activeMainPageRef.current}>
      <div style={{ 
        width: sizeMap[workspaceSize], 
        height: '100%' 
      }}>
        <Workspace
          id="test-id"
          activeItemKey={activeItemKey}
          ariaLabel="work space"
          onRequestActivate={key => setActiveItemKey(key)}
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
            label="Tab 1"
            render={() => <Tab1 />}
          />
          <WorkspaceItem
            itemKey="tab-2"
            label="Tab 2"
            render={() => <Tab2 />}
          />
          <WorkspaceItem
            itemKey="tab-3"
            label="Tab 3"
            render={() => <Tab3 />}
          />
          <WorkspaceItem
            itemKey="tab-4"
            label="Tab 4"
            render={() => <Tab4 />}
          />
          <WorkspaceItem
            itemKey="tab-5"
            label="Tab 5"
            render={() => <Tab5 />}
          />
        </Workspace>
      </div>
    </ActiveMainPageContext.Provider>
  );
};

export default WorkspaceTest;
