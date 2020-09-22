import React from 'react';

const PatientConceptContext = React.createContext();

const PatientConceptProvider = ({ children }) => {
  const [conceptState, setConceptState] = React.useState();

  const demoApplicationConceptContextProviderValue = React.useMemo(() => ({
    patientData: conceptState,
    updatePatient: (newConcept) => { setConceptState(newConcept); },
  }), [conceptState]);

  return (
    <PatientConceptContext.Provider value={demoApplicationConceptContextProviderValue}>
      {children}
    </PatientConceptContext.Provider>
  );
};

export default PatientConceptProvider;
export { PatientConceptContext };
