import React from 'react';
import ContentContainer from 'terra-content-container';
import List, { Item as ListItem } from 'terra-list';
import PageLayoutHeader from 'terra-application/lib/application-page/PageLayoutHeader';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';

const SideNavigationList = ({ selectedItemKey, onSelectItem }) => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  return (
    <ContentContainer
      header={<PageLayoutHeader title="Side Nav" />}
      fill
    >
      <List dividerStyle="standard" role="listbox" aria-label="SingleSelectList-label">
        <ListItem
          key="item-1"
          isSelectable
          isSelected={selectedItemKey === 'item-1'}
          onSelect={() => {
            onSelectItem('item-1');
          }}
        >
          <div style={{ padding: '1rem' }}>Item 1</div>
        </ListItem>
        <ListItem
          key="item-2"
          isSelectable
          isSelected={selectedItemKey === 'item-2'}
          onSelect={() => {
            onSelectItem('item-2');
          }}
        >
          <div style={{ padding: '1rem' }}>Item 2</div>
        </ListItem>
        <ListItem
          key="item-3"
          isSelectable
          isSelected={selectedItemKey === 'item-3'}
          onSelect={() => {
            onSelectItem('item-3');
          }}
        >
          <div style={{ padding: '1rem' }}>Item 3</div>
        </ListItem>
      </List>
    </ContentContainer>
  );
};

export default SideNavigationList;
