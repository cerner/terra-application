import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WorkspaceContext from './WorkspaceContext';
import TabContext from './subcomponents/_TabContext';

const propTypes = {
  /**
   * Key to match with the activeItemKey to handle the display of selection.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * Text to be displayed on the tab or as it's aria-label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onRequestActive.
   */
  metaData: PropTypes.object,
  /**
   * @private
   * The id of the tab.
   */
  id: PropTypes.string,
  /**
   * @private
   * The id of the panel associated to the tab.
   */
  associatedPanelId: PropTypes.string,
  /**
   * @private
   * The indicator whether or not the tab content is active.
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * The html element to be portal'd to.
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
};

const WorkspaceItem = ({
  // possible persistent prop?
  id,
  associatedPanelId,
  isActive,
  label,
  render,
  portalElement,
}) => {
  const tabContextValue = React.useMemo(() => (
    {
      tabId: id,
      panelId: associatedPanelId,
      label: label,
    }
  ), [associatedPanelId, id, label]);

  const workspaceContextValue = React.useMemo(() => (
    {
      isActive,
    }
  ), [isActive]);

  return (
    ReactDOM.createPortal((
      <TabContext.Provider value={tabContextValue}>
        <WorkspaceContext.Provider value={workspaceContextValue}>
          {render()}
        </WorkspaceContext.Provider>
      </TabContext.Provider>
    ), portalElement)
  );
};

WorkspaceItem.propTypes = propTypes;

export default WorkspaceItem;
