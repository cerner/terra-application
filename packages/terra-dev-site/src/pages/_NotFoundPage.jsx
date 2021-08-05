import React from 'react';
import Image from 'terra-image';
import { NavigationItemContext } from '../terra-application-temporary/navigation-item';
import kaiju404 from './kaiju-404.gif';

// import Page from '../terra-application-temporary/page';

import Page, {
  CardLayout,
  Card,
} from '../terra-application-temporary/page';

const NotFoundPage = () => {
  const { isActive } = React.useContext(NavigationItemContext);

  if (!isActive) {
    return null;
  }

  return (
    <Page
      pageKey="Not Found Page"
      label="Page not found"
    >
      <CardLayout>
        <Card minHeightFill>
          <Image src={kaiju404} width="100%" alt="404" variant="rounded" />
        </Card>
      </CardLayout>
    </Page>
  );
};

export default NotFoundPage;
