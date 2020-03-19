import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Utils } from 'terra-list';
import ContentContainer from 'terra-content-container';
import ActionFooter from 'terra-action-footer';
// import Spacer from 'terra-spacer';
import Button from 'terra-button';
import MultiSelect from './MultiSelect';
import {
  DisclosureManagerHeaderAdapter,
  withDisclosureManager,
  disclosureManagerShape,
} from '../disclosure-manager';

const propTypes = {
  data: PropTypes.array,
  disclosureManager: disclosureManagerShape,
  onChange: PropTypes.func,
  selected: PropTypes.array,
};

const Inline3 = ({
  onChange,
  data,
  selected,
  disclosureManager,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(selected || []);

  const onClick = (event, metaData) => {
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };
  const onSubmit = (event) => {
    onChange(event, selectedKeys);
    disclosureManager.dismiss();
  };

  const availableItems = [];
  data.forEach(option => {
    availableItems.push({
      key: option.key,
      node: option.text,
      metaData: { key: option.key },
      isSelected: selectedKeys.indexOf(option.key) >= 0,
    });
  });

  return (
    <>
      <DisclosureManagerHeaderAdapter title="Multi Select" />
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
        <MultiSelect
          columnData={{
            id: 'box-1',
            onSelectItem: onClick,
            items: availableItems,
          }}
        />
      </ContentContainer>
    </>
  );
};

Inline3.propTypes = propTypes;

export default withDisclosureManager(Inline3);
