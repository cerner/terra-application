import React from 'react';
import PropTypes from 'prop-types';
import { NavigationItemContext } from '@cerner/terra-application/lib/navigation-item';
import ApplicationPage from '@cerner/terra-application/lib/page';

const propTypes = {
  pageKey: PropTypes.string,
  label: PropTypes.string,
  onRequestClose: PropTypes.func,
};

const MyReusablePage = ({ pageKey, label, onRequestClose }) => {
  const { isActive } = React.useContext(NavigationItemContext);
  return (
    <ApplicationPage
      pageKey={pageKey}
      label={label}
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
