import React from 'react';
import {
  WorkspaceContent, WorkspaceContentActivityOverlay, WorkspaceContentStatusOverlay, WorkspaceContentStatusOverlayButton,
} from '@cerner/terra-application/lib/workspace';

const Tab5 = () => {
  const [isLoading, setIsLoading] = React.useState();

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? <WorkspaceContentActivityOverlay variant="loading" /> : undefined}
      statusOverlay={(
        <WorkspaceContentStatusOverlay variant="error" message="This is an error message.">
          <WorkspaceContentStatusOverlayButton
            text="Retry"
            onClick={() => {
              setIsLoading(true);

              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            }}
          />
        </WorkspaceContentStatusOverlay>
      )}
    />
  );
};

Tab5.titleKey = 'derp';

export default Tab5;
