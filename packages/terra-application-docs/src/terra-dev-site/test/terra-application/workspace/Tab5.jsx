import React from 'react';
import {
  WorkspaceContent,
} from '@cerner/terra-application/lib/workspace';

const Tab5 = () => {
  const [isLoading, setIsLoading] = React.useState();

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? <WorkspaceContent.ActivityOverlay variant="loading" /> : undefined}
      statusOverlay={(
        <WorkspaceContent.StatusOverlay variant="error" message="This is an error message.">
          <WorkspaceContent.StatusOverlay.Button
            text="Retry"
            onClick={() => {
              setIsLoading(true);

              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            }}
          />
        </WorkspaceContent.StatusOverlay>
      )}
    />
  );
};

Tab5.titleKey = 'derp';

export default Tab5;
