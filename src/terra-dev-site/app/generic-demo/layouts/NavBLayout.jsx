import React from 'react';
import SecondaryNavigationLayout from '../../../../application-layouts/SecondaryNavigationLayout';
import Page2 from '../pages/Page1';

const propTypes = {};

const NavBLayout = () => (
  <SecondaryNavigationLayout
    enableWorkspace
    renderPage={() => <Page2 />}
  />
);

NavBLayout.propTypes = propTypes;

export default NavBLayout;
