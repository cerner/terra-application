import React, {
  useState,
} from 'react';
import DualListbox from './DualListbox';
import { Utils } from 'terra-list';
import ContentContainer from 'terra-content-container';
import ActionFooter from 'terra-action-footer';
import Spacer from 'terra-spacer';
import Button from 'terra-button';
import {
  DisclosureManagerHeaderAdapter,
  withDisclosureManager,
} from  '../disclosure-manager';


const Inline = ({ onChange, data, selected, disclosureManager }) => {
  const [selectedKeys, setSelectedKeys] = useState(selected || []);
  const [searchText, setSearchText] = useState('');

  const onClick = (event, metaData) => {
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };
  const onSelectAll = (event) => {
    setSelectedKeys(data.map(item => item.key));
  };
  const onRemoveAll = (event) => {
    setSelectedKeys([]);
  };
  const onSubmit = (event) => {
    onChange(event, selectedKeys);
    disclosureManager.dismiss();
  };
  const onSearch = (text) => {
    setSearchText(text);
  };

  const availableItems = [];
  const selectedItems = [];

  data.forEach((option, index) => {
    if (selectedKeys.indexOf(option.key) >= 0) {
      selectedItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
      });
    } else {
      if (!searchText.length || (searchText.length && index === 0)) {
        availableItems.push({
          key: option.key,
          node: option.text,
          metaData: { key: option.key },
        });
      }
    }
  });

  return (
    <>
      <DisclosureManagerHeaderAdapter title={'Multi Filter'} />
      <ContentContainer
        fill
        footer={(
          <ActionFooter
            end={(
              <Button onClick={onSubmit} text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
            )}
          />
        )}
      >
        <DualListbox
          columnOneData={{
            // isLoading: true,
            title: 'Available',
            onSearch,
            onSelectAll: onSelectAll,
            onSelectItem: onClick,
            selectAllTitle: '>>',
            items: availableItems,
          }}
          columnTwoData={{
            title: 'Selected',
            onSelectAll: onRemoveAll,
            onSelectItem: onClick,
            selectAllTitle: '<<',
            items: selectedItems,
          }}
        />
      </ContentContainer>
    </>
  );
};

export default withDisclosureManager(Inline);
