import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import ContentContainer from 'terra-content-container';
import SearchField from 'terra-search-field'
import VisuallyHiddenText from 'terra-visually-hidden-text';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import classNames from 'classnames/bind';
import FancyList from './FancyList';
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
  useRemove: PropTypes.string,
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
  useRemove,
  items,
  ...customProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const listItems = items.map(item => {
  //   return (
  //     <Item
  //       key={item.key}
  //       isSelectable
  //       metaData={item.metaData}
  //       onSelect={onSelectItem}
  //       isSelected={item.isSelected}
  //     >
  //       {item.node}
  //     </Item>
  //   );
  // })

  const onFirstItem = () => {
    setCurrentIndex(0);
  };

  const onLastItem = () => {
    setCurrentIndex(items.length - 1);
  };

  const onNextItem = () => {
    const newIndex = currentIndex + 1;
    const lastIndex = items.length - 1
    setCurrentIndex(newIndex > lastIndex ? lastIndex : newIndex);
  };

  const onPreviousItem = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

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
        footer={onSelectAll ? (
          <button
            className={cx('footer')}
            onClick={onSelectAll}
            aria-keyshortcuts={useRemove ? 'Alt+ArrowLeft Delete' : 'Alt+ArrowRight Enter' }
          >
            {selectAllTitle}
          </button>
         ) : undefined}
      >
        <div className={cx('inner-scroll')}>
          {
            isLoading ? 
            <LoadingOverlay isOpen isAnimated isRelativeToContainer /> :
            <FancyList
              id={id}
              description={description}
              title={title}
              onSelectItem={onSelectItem}
              onPrevious={onPreviousItem}
              onNext={onNextItem}
              onFirst={onFirstItem}
              onLast={onLastItem}
              onSendAll={!useRemove ? onSelectAll : undefined}
              onRemoveAll={useRemove ? onSelectAll : undefined}
              currentFocusKey={items[currentIndex] ? items[currentIndex].key : null}
              items={items}
            />
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
