import React from 'react';
import ApplicationBase from '../../../application-base';
import Workspace, { WorkspaceItem } from '../../../workspace';
import ActiveMainContext from '../../../main-container/ActiveMainContext';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab6 from './Tab6';

const sizeMap = {
  small: '320px',
  medium: '500px',
  large: '1000px',
};

const WorkspaceTest = () => {
  const [activeItemKey, setActiveItemKey] = React.useState('tab-1');
  const [workspaceSize, setWorkspaceSize] = React.useState('large');
  const activeMainPageRef = React.useRef({
    label: 'Test Page',
    metaData: {
      data: 'data here',
    },
  });

  const onRequestSizeChange = (size) => {
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log('onRequestClose'); // eslint-disable-line no-console
  };

  return (
    <ApplicationBase>
      <ActiveMainContext.Provider value={activeMainPageRef.current}>
        <div
          style={{ height: '100%', width: sizeMap[workspaceSize] }} // eslint-disable-line react/forbid-dom-props
        >
          <Workspace
            id="test-id"
            activeItemKey={activeItemKey}
            onRequestActivate={key => setActiveItemKey(key)}
            activeSize={workspaceSize}
            sizeOptions={[{
              key: 'small',
              text: 'Small',
            }, {
              key: 'medium',
              text: 'Medium',
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
            <WorkspaceItem
              itemKey="tab-6"
              label="Tab 6"
              render={() => <Tab6 />}
            />
          </Workspace>
        </div>
      </ActiveMainContext.Provider>
    </ApplicationBase>
  );
};

export default WorkspaceTest;
