import React from 'react';

const ConceptContext = React.createContext();

const ConceptProvider = ({ children }) => {
  const [conceptState, setConceptState] = React.useState('1');

  const demoApplicationConceptContextProviderValue = React.useMemo(() => ({
    data: conceptState,
    updateData: (newConcept) => { setConceptState(newConcept); },
  }), [conceptState]);

  return (
    <ConceptContext.Provider value={demoApplicationConceptContextProviderValue}>
      {children}
    </ConceptContext.Provider>
  );
};

export default ConceptProvider;
export { ConceptContext };
