import React from 'react';
import {
  useHistory,
} from 'react-router-dom';
import { NavigationItemContext } from '../terra-application-temporary/navigation-item';
// import Page from '../terra-application-temporary/page';

import Page, {
  StatusLayout,
} from '../terra-application-temporary/page';

const NotFoundPage = () => {
  const history = useHistory();
  const { isActive } = React.useContext(NavigationItemContext);
  let failureStatus;
  if (isActive) {
    failureStatus = (
      <StatusLayout
        message="Page not found."
        variant="error"
        buttonAttrs={[
          {
            key: 'go back',
            text: 'Go Back',
            onClick: () => { history.goBack(); },
          },
          {
            key: 'home',
            text: 'Home',
            onClick: () => { history.replace('/'); },
          },
        ]}
      />
    );
  }

  return (
    <Page
      pageKey="Not Found Page"
      label="Page not found"
      statusOverlay={failureStatus}
    />
  );
};

export default NotFoundPage;
