import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import Avatar from 'terra-avatar';

import ApplicationConceptContext from '../../../src/application-concept/ApplicationConceptContext';

const DemoApplicationConceptProvider = ({ children }) => (
  <ApplicationConceptContext.Provider
    value={{
      layoutBanner: (
        <div style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
        >
          <div style={{ padding: '10px', border: '1px dashed white' }}>Application Context Banner</div>
        </div>
      ),
      modalBanner: (
        <div style={{
          borderTop: '1px solid #002238', backgroundColor: 'purple', color: 'white', padding: '10px',
        }}
        >
          <div style={{ padding: '10px', border: '1px dashed white' }}>Application Context Banner (Modal)</div>
        </div>
      ),
    }}
  >
    {children}
  </ApplicationConceptContext.Provider>
);

export default DemoApplicationConceptProvider;
