import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import Tabs from '../../../workspace/Tabs';
import TabPage from '../../../workspace/TabPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string,
};

const TempImplement = ({
  id,
  menuOnClick,
  menuButtonRef,
}) => {
  const [activeTabKey, setActiveTabKey] = useState('page-1');

  return (
    <Tabs
      id={id || 'test-id'}
      activeTabKey={activeTabKey}
      onRequestActivate={metaData => setActiveTabKey(metaData.key)}
      title="work space" // TODO: need proper title setup
      menuButtonRef={menuButtonRef}
      menuOnClick={menuOnClick}
    >
      <TabPage
        // possible persistent prop?
        tabKey="page-1"
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 1"
        metaData={{ key: 'page-1' }}
        render={() => <Page1 />}
      />
      <TabPage
        tabKey="page-2"
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 222222222222222222222"
        metaData={{ key: 'page-2' }}
        render={() => <Page2 />}
      />
      <TabPage
        // possible persistent prop?
        tabKey="page-3"
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 3"
        metaData={{ key: 'page-3' }}
        render={() => <Page3 />}
      />
      <TabPage
        tabKey="page-4"
        // label={IntlProvider.getString(MyTabPage.titleKey)}
        label="Page 4"
        metaData={{ key: 'page-4' }}
        render={() => <Page4 />}
      />
    </Tabs>
  );
};

TempImplement.propTypes = propTypes;

export default TempImplement;
