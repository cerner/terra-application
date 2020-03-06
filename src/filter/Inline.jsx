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

  const [activeAvailableKeys, setActiveAvailableKeys] = useState([]);
  const [activeSelectedKeys, setActiveSelectedKeys]  = useState([]);

  const onClickAvailable = (event, metaData) => {
    setActiveAvailableKeys(Utils.updatedMultiSelectedKeys(activeAvailableKeys, metaData.key));
  };
  const onClickSelected = (event, metaData) => {
    setActiveSelectedKeys(Utils.updatedMultiSelectedKeys(activeSelectedKeys, metaData.key));
  };

  const onSelectAll = (event) => {
    let keys = selectedKeys;
    activeAvailableKeys.forEach(key => {
      // if (selectedKeys.indexOf(key) > 0) {
        keys = Utils.updatedMultiSelectedKeys(keys, key)
      // }
    });
    setSelectedKeys(keys);
    setActiveAvailableKeys([]);
  };
  const onRemoveAll = (event) => {
    let keys = selectedKeys;
    activeSelectedKeys.forEach(key => {
      // if (selectedKeys.indexOf(key) > 0) {
        keys = Utils.updatedMultiSelectedKeys(keys, key)
      // }
    });
    setSelectedKeys(keys);
    setActiveSelectedKeys([]);
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
        isSelected: activeSelectedKeys.indexOf(option.key) >= 0,
      });
    } else {
      if (!searchText.length || (searchText.length && index === 0)) {
        availableItems.push({
          key: option.key,
          node: option.text,
          metaData: { key: option.key },
          isSelected: activeAvailableKeys.indexOf(option.key) >= 0,
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
            onSelectItem: onClickAvailable,
            selectAllTitle: '>>',
            items: availableItems,
          }}
          columnTwoData={{
            title: 'Selected',
            onSelectAll: onRemoveAll,
            onSelectItem: onClickSelected,
            selectAllTitle: '<<',
            items: selectedItems,
          }}
        />
      </ContentContainer>
    </>
  );
};

export default withDisclosureManager(Inline);
