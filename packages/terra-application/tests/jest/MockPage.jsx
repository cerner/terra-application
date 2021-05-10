import React from 'react';
import PropTypes from 'prop-types';
import usePagePortal from '../../src/page-container/usePagePortal';

/**
 * Simple Page implementation to test integration with PageContainers
 */
const MockPage = ({
  label, metaData, children,
}) => {
  const { PagePortal } = usePagePortal({
    label,
    metaData,
  });

  return (
    <PagePortal>
      {children}
    </PagePortal>
  );
};

MockPage.propTypes = {
  label: PropTypes.string,
  metaData: PropTypes.object,
  children: PropTypes.node,
};

export default MockPage;
