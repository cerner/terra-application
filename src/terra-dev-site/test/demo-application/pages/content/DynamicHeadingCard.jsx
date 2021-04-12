import React from 'react';

import { Card } from '../../../../../page';
import { DynamicHeading, DynamicHeadingProvider } from '../../../../../shared/DynamicHeadingContext';

const DynamicHeadingCard = () => (
  <Card label="Dynamic Heading Levels">
    <p>The DynamicHeadingContext can be used to automatically assign heading levels based upon the current heading hierarchy.</p>
    <p>The Page title defines a level 1 heading, and the Card title defines a level 2 heading. The examples below follow from there.</p>
    <DynamicHeading>First Heading</DynamicHeading>
    <DynamicHeadingProvider>
      <DynamicHeading>Second Heading</DynamicHeading>
      <DynamicHeadingProvider>
        <DynamicHeading>Third Heading</DynamicHeading>
      </DynamicHeadingProvider>
    </DynamicHeadingProvider>
  </Card>
);

export default DynamicHeadingCard;
