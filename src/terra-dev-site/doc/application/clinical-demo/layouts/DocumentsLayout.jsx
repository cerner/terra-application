import React from 'react';

import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';

import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import PageLayoutHeader from 'terra-application/lib/application-page/PageLayoutHeader';
import SideNavLayout, { SideNavPage } from '../../../../../application-page/SideNavLayout';

import ChartSummaryPage from '../pages/ChartSummaryPage';
import OrdersPage from '../pages/OrdersPage';
import AllergiesPage from '../pages/AllergiesPage';

const DocumentsNavigationPanel = ({ selectedItemKey, onSelectItem }) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  const hasChevron = activeBreakpoint === 'tiny' || activeBreakpoint === 'small';

  return (
    <ContentContainer
      header={<PageLayoutHeader title="Side Nav" />}
      fill
    >
      <List dividerStyle="standard" role="listbox" aria-label="SingleSelectList-label">
        <ListItem
          key="summary"
          hasChevron={hasChevron}
          isSelectable
          isSelected={selectedItemKey === 'summary'}
          onSelect={() => {
            onSelectItem('summary');
          }}
        >
          <div style={{ padding: '1rem' }}>Chart Review</div>
        </ListItem>
        <ListItem
          key="orders"
          hasChevron={hasChevron}
          isSelectable
          isSelected={selectedItemKey === 'orders'}
          onSelect={() => {
            onSelectItem('orders');
          }}
        >
          <div style={{ padding: '1rem' }}>Order Profile</div>
        </ListItem>
        <ListItem
          key="allergies"
          hasChevron={hasChevron}
          isSelectable
          isSelected={selectedItemKey === 'allergies'}
          onSelect={() => {
            onSelectItem('allergies');
          }}
        >
          <div style={{ padding: '1rem' }}>Allergy Profile</div>
        </ListItem>
      </List>
    </ContentContainer>
  );
};

const DocumentsLayout = () => {
  const [activeSideNavItemKey, setActiveSideNavItemKey] = React.useState();

  return (
    <SideNavLayout
      sidebar={(
        <DocumentsNavigationPanel
          selectedItemKey={activeSideNavItemKey}
          onSelectItem={(key) => { setActiveSideNavItemKey(key); }}
        />
      )}
      activeItemKey={activeSideNavItemKey}
      itemKeys={['summary', 'orders', 'allergies']}
      onChangeActiveItem={(key) => { setActiveSideNavItemKey(key); }}
    >
      <SideNavPage
        sideNavKey="summary"
        cleanupRenderIfPossible
        render={() => (
          <ChartSummaryPage />
        )}
      />
      <SideNavPage
        sideNavKey="orders"
        render={() => (
          <OrdersPage />
        )}
      />
      <SideNavPage
        sideNavKey="allergies"
      >
        <AllergiesPage />
      </SideNavPage>
    </SideNavLayout>
  );
};

export default DocumentsLayout;
