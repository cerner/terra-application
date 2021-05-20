import React from 'react';
import PropTypes from 'prop-types';
import { NavigationItemContext } from '@cerner/terra-application/lib/navigation-item';
import ApplicationPage from '@cerner/terra-dev-site/lib/terra-application-temporary/page';

const propTypes = {
  /**
   * Function called when close is requested.
   */
  onRequestClose: PropTypes.func,
};

const MyReusablePage = ({ onRequestClose }) => {
  const { isActive } = React.useContext(NavigationItemContext);
  return (
    <ApplicationPage
      pageKey="test-page"
      label="Test Page"
      onRequestClose={onRequestClose}
    >
      { isActive
        && (
          <p> Page </p>
        )}
    </ApplicationPage>
  );
};

MyReusablePage.propTypes = propTypes;

export default MyReusablePage;
