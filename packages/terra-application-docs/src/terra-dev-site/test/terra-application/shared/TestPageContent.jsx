import React from 'react';
import { PageContext } from '@cerner/terra-application/lib/page';

const TestPageContent = () => {
  const pageContext = React.useContext(PageContext);

  React.useLayoutEffect(() => {
    console.log(`TestPageContent - ${pageContext.label}, ${JSON.stringify(pageContext.metaData)}, isActive: ${pageContext.isActive}`);
  }, [pageContext.label, pageContext.metaData, pageContext.isActive]);

  return <div>Page Content With State Tracking</div>;
};

export default TestPageContent;
