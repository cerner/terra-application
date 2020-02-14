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

  const availableItems = [];
  const selectedItems = [];
  data.forEach(option => {
    if (selectedKeys.indexOf(option.key) >= 0) {
      selectedItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
      });
    } else {
      availableItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
      });
    }
  });

  return (
    <>
      <DisclosureManagerHeaderAdapter title={'FilterBox'} />
      <ContentContainer
        fill
        footer={(
          <ActionFooter
            end={(
              <Spacer isInlineBlock marginRight="medium">
                <Button onClick={onSubmit} text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
              </Spacer>
            )}
          />
        )}
      >
        <DualListbox
          columnOneData={{
            // isLoading: true,
            onSearch: () => {},
            onSelectAll: onSelectAll,
            onSelectItem: onClick,
            selectAllTitle: '>>',
            items: availableItems,
          }}
          columnTwoData={{
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
