import React from 'react';
import Button from 'terra-button';

const propTypes = {};

const ConceptBanner = ({ data, onSelectDetails, isModal }) => (
  <div
    style={{
      borderTop: '1px solid #002238', backgroundColor: isModal ? 'blue' : 'purple', color: 'white', padding: '10px',
    }}
  >
    <div style={{ padding: '10px', border: '1px dashed white' }}>
      Concept
      {' '}
      {data}
      {onSelectDetails ? (
        <>
          {' '}
          <Button text="Details" onClick={() => { onSelectDetails(true); }} />
        </>
      ) : undefined}
      {isModal ? (
        <>
          {' '}
          (Modal)
        </>
      ) : undefined}
    </div>
  </div>
);

ConceptBanner.propTypes = propTypes;

export default ConceptBanner;
