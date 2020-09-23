import React from 'react';

const PatientContext = React.createContext();

const PatientProvider = ({ defaultPatientId, children }) => {
  const [conceptState, setConceptState] = React.useState(defaultPatientId);

  const demoApplicationConceptContextProviderValue = React.useMemo(() => ({
    patientData: conceptState,
    updatePatient: (newConcept) => { setConceptState(newConcept); },
  }), [conceptState]);

  return (
    <PatientContext.Provider value={demoApplicationConceptContextProviderValue}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
export { PatientContext };
