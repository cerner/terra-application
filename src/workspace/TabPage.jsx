import React from 'react';
import ReactDOM from 'react-dom';
import TabContext from './TabContext';

const TabPage = ({
  // possible persistent prop?
  id, // private
  associatedPanelId, // private
  isActive,
  label,
  render,
  portalElement, // private
}) => {
  const tabContextValue = React.useMemo(() => (
    {
      tabId: id,
      panelId: associatedPanelId,
      label: label,
      isActive,
    }
  ), [associatedPanelId, id, label, isActive]);

  return (
    ReactDOM.createPortal((
      <TabContext.Provider value={tabContextValue}>
        {render()}
      </TabContext.Provider>
    ), portalElement)
  );
};

export default TabPage;
