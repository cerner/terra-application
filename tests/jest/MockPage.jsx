import React from 'react';
import PropTypes from 'prop-types';
import usePagePortal from '../../src/page-container/usePagePortal';

const MockPage = ({
  pageKey, label, metaData, children,
}) => {
  const { PagePortal } = usePagePortal({
    pageKey,
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
  pageKey: PropTypes.string,
  label: PropTypes.string,
  metaData: PropTypes.object,
  children: PropTypes.node,
};

export default MockPage;
