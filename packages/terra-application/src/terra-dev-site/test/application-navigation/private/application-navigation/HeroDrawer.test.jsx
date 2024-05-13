/* eslint-disable */
import React from 'react';
import { Placeholder } from '@cerner/terra-docs';

import ApplicationNavigation from '../../../../../application-navigation/private/ApplicationNavigation';

const hero = <Placeholder title="Test Hero" />;

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const HeroDrawerTest = () => (
  <ApplicationNavigation hero={hero} />
);

export default HeroDrawerTest;
