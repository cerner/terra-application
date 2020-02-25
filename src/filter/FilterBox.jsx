import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import ContentContainer from 'terra-content-container';
import SearchField from 'terra-search-field'
import VisuallyHiddenText from 'terra-visually-hidden-text';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import classNames from 'classnames/bind';
import styles from './FilterBox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  onSearch: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectItem: PropTypes.func,
  selectAllTitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    metaData: PropTypes.object,
    node: PropTypes.node,
    isSelected: PropTypes.bool,
  })),
};

const defaultProps = {
  isLoading: false,
  items: [],
};

const FilterBox = ({
  id,
  description,
  title,
  isLoading,
  onSearch,
  onSelectAll,
  onSelectItem,
  selectAllTitle,
  items,
  ...customProps
}) => {
  const listItems = items.map(item => {
    return (
      <Item
        key={item.key}
        isSelectable
        metaData={item.metaData}
        onSelect={onSelectItem}
        isSelected={item.isSelected}
      >
        {item.node}
      </Item>
    );
  })

  return (
    <div className={cx('filter')}>
      <ContentContainer
        fill
        header={
          onSearch ? (
          <div className={cx('header')}>
            <div>{title}</div>
            <SearchField onSearch={onSearch} onInvalidSearch={onSearch} className={cx('input')} />
          </div>
          ) : <div>{title}</div>
        }
        footer={onSelectAll ? <button className={cx('footer')} onClick={onSelectAll}>{selectAllTitle}</button> : undefined}
      >
        <div className={cx('inner-scroll')}>
          {
            isLoading ? 
            <LoadingOverlay isOpen isAnimated isRelativeToContainer /> :
            <List
              role="listbox"
              paddingStyle="compact"
              dividerStyle="bottom-only"
              className={cx('list')}
            >
              {listItems}
            </List>
            // <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} /> // use for loading words
          }
        </div>
      </ContentContainer>
    </div>
  );
};

FilterBox.propTypes = propTypes;
FilterBox.defaultProps = defaultProps;

export default FilterBox;
