import React from 'react';
import PropTypes from 'prop-types';
import usePagePortal from '../../../page-container/usePagePortal';

const TestPage = ({
  index, testLabel, onRequestDismiss,
}) => {
  const pageKey = `page-${index}`;
  const label = `Page ${index}`;
  const metaData = { data: index };

  const [showChildPage, setShowChildPage] = React.useState(false);
  const { PagePortal } = usePagePortal({
    pageKey,
    label,
    metaData,
  });

  return (
    <PagePortal>
      <div>{testLabel}</div>
      {onRequestDismiss ? <button type="button" onClick={onRequestDismiss}>Back</button> : undefined}
      <button type="button" onClick={() => { setShowChildPage(true); }}>Show Child</button>
      <p>
        Key:
        {' '}
        <span>{pageKey}</span>
      </p>
      <p>
        Label:
        {' '}
        <span>{label}</span>
      </p>
      <p>
        Meta:
        {' '}
        <span>{JSON.stringify(metaData)}</span>
      </p>
      {showChildPage ? (
        <TestPage testLabel={testLabel} index={index + 1} onRequestDismiss={() => { setShowChildPage(false); }} />
      ) : undefined}
    </PagePortal>
  );
};

TestPage.propTypes = {
  index: PropTypes.number,
  testLabel: PropTypes.string,
  onRequestDismiss: PropTypes.func,
};

export default TestPage;
