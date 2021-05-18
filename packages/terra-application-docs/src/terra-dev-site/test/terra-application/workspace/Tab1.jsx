import React from 'react';
import Toolbar from 'terra-toolbar';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';

import { WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay } from '@cerner/terra-application/lib/workspace';

import MockContent from './MockContent';

const Tab1 = () => {
  const [isLoading, setIsLoading] = React.useState();
  const [showStatusOverlay, setShowStatusOverlay] = React.useState();

  return (
    <WorkspaceContent
      toolbar={(
        <Toolbar>
          <Button text="Edit" variant="utility" icon={<IconEdit />} />
          <Button text="Add" variant="utility" icon={<IconAdd />} />
          <Button text="Attachment" variant="utility" icon={<IconAttachment />} />
        </Toolbar>
      )}
      activityOverlay={isLoading ? <WorkspaceContentActivityOverlay variant="loading" /> : undefined}
      statusOverlay={showStatusOverlay ? <WorkspaceContentStatusOverlay variant="not-authorized" /> : undefined}
    >
      <MockContent title="Tab 1" onShowActivityOverlay={setIsLoading} onShowStatusOverlay={setShowStatusOverlay} />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
