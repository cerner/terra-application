import React from 'react';
import Button from 'terra-button';
// import DemographicsBanner from 'terra-demographics-banner';
// import Avatar from 'terra-avatar';

import ApplicationConceptContext from '../../../../application-concept/ApplicationConceptContext';
import ApplicationModal from '../../../../application-modal/ApplicationModal';
import DemoApplicationLayout from './DemoApplicationLayout';

const DemoApplicationConceptContext = React.createContext();

const DemoApplicationConceptLayout = ({ children }) => {
  const [conceptState, setConceptState] = React.useState();
  const [showSearchModal, setShowSearchModal] = React.useState(false);

  const demoApplicationConceptContextProviderValue = React.useMemo(() => ({
    getDemoConcept: () => conceptState,
    updateDemoConcept: (newConcept) => { setConceptState(newConcept); },
  }), [conceptState]);

  const conceptContextProviderValue = React.useMemo(() => (conceptState ? {
    renderPageConceptView: () => (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Application Context Banner (
          {conceptState}
          )
        </div>
      </div>
    ),
    renderModalConceptView: () => (
      <div
        style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
      >
        <div style={{ padding: '10px', border: '1px dashed white' }}>
          Modal Application Context Banner (
          {conceptState}
          )
        </div>
      </div>
    ),
  } : undefined), [conceptState]);

  return (
    <>
      <DemoApplicationConceptContext.Provider value={demoApplicationConceptContextProviderValue}>
        <ApplicationConceptContext.Provider value={conceptContextProviderValue}>
          <DemoApplicationLayout onSearch={() => { setShowSearchModal(true); }} />
        </ApplicationConceptContext.Provider>
      </DemoApplicationConceptContext.Provider>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { setConceptState('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { setConceptState('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { setConceptState('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default DemoApplicationConceptLayout;
export { DemoApplicationConceptContext };
