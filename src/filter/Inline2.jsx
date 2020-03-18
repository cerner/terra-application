import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import ActionFooter from 'terra-action-footer';
// import Spacer from 'terra-spacer';
import Button from 'terra-button';
import SingleListbox from './SingleListbox';
import {
  DisclosureManagerHeaderAdapter,
  withDisclosureManager,
  disclosureManagerShape,
} from '../disclosure-manager';

const propTypes = {
  data: PropTypes.array,
  disclosureManager: disclosureManagerShape,
  onChange: PropTypes.func,
  selected: PropTypes.string,
};

const Inline2 = ({
  onChange,
  data,
  selected,
  disclosureManager,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(selected || []);
  const [searchText, setSearchText] = useState('');

  const onClick = (event, metaData) => {
    setSelectedKeys([metaData.key]);
  };
  const onSubmit = (event) => {
    onChange(event, selectedKeys);
    disclosureManager.dismiss();
  };
  const onSearch = (text) => {
    setSelectedKeys([]);
    setSearchText(text);
  };

  const availableItems = [];
  data.forEach((option, index) => {
    if (!searchText.length || (searchText.length && index === 0)) {
      availableItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
        isSelected: selectedKeys.indexOf(option.key) >= 0,
      });
    }
  });

  return (
    <>
      <DisclosureManagerHeaderAdapter title="Single Filter" />
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
        <SingleListbox
          columnData={{
            onSearch,
            onSelectItem: onClick,
            items: availableItems,
          }}
        />
      </ContentContainer>
    </>
  );
};

Inline2.propTypes = propTypes;

export default withDisclosureManager(Inline2);
