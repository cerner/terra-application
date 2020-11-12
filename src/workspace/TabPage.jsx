import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TabContext from './TabContext';
import TabDataContext from './_TabDataContext';

const propTypes = {
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * Indicates if the panel label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Text to be displayed on the tab or as it's aria-label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onRequestActive.
   */
  metaData: PropTypes.object,
  /**
   * Key to match with the activeTabKey to handle the display of selection.
   */
  tabKey: PropTypes.string.isRequired,
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
   * The html element to be portal'd to.x
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
};

const TabPage = ({
  // possible persistent prop?
  id,
  associatedPanelId,
  isActive,
  label,
  render,
  portalElement,
}) => {
  const tabDataContextValue = React.useMemo(() => (
    {
      tabId: id,
      panelId: associatedPanelId,
      label: label,
    }
  ), [associatedPanelId, id, label]);

  const tabContextValue = React.useMemo(() => (
    {
      isActive,
    }
  ), [isActive]);

  return (
    ReactDOM.createPortal((
      <TabDataContext.Provider value={tabDataContextValue}>
        <TabContext.Provider value={tabContextValue}>
          {render()}
        </TabContext.Provider>
      </TabDataContext.Provider>
    ), portalElement)
  );
};

TabPage.propTypes = propTypes;

export default TabPage;
