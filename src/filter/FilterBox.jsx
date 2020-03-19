import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import SearchField from 'terra-search-field';
// import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  useRemove: PropTypes.bool,
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
  useRemove: false,
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
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const adjustScrollHeight = (nextIndex) => {
    const scrollParent = document.getElementById(id);
    if (!scrollParent || (scrollParent.scrollHeight <= scrollParent.getBoundingClientRect().height)) {
      return
    }
    if (!(nextIndex >= 0 && nextIndex + 1 <= items.length)) {
      return;
    }

    const child = scrollParent.children[nextIndex];
    if (child) {
      const nextTop = child.offsetTop;
      const nextHeight = child.getBoundingClientRect().height;

      const scrollTop = scrollParent.scrollTop;
      const scrollHeight = scrollParent.getBoundingClientRect().height;

      const isAbove = nextTop < scrollTop;
      const isBelow = (nextTop > scrollTop + scrollHeight) || (nextTop + nextHeight > scrollTop + scrollHeight);

      if (isAbove) {
        scrollParent.scrollTop = nextTop;
        return;
      }
      if (isBelow) {
        scrollParent.scrollTop = (nextTop + nextHeight) - scrollHeight;
        return;
      }
    }
  };

  const updateCurrentIndex = (index) => {
    setCurrentIndex(index);
    adjustScrollHeight(index);
  };

  const onFirstItem = () => {
    updateCurrentIndex(0);
  };

  const onLastItem = () => {
    updateCurrentIndex(items.length - 1);
  };

  const onNextItem = () => {
    const newIndex = currentIndex + 1;
    const lastIndex = items.length - 1;
    const validIndex = newIndex > lastIndex ? lastIndex : newIndex;
    updateCurrentIndex(validIndex);
  };

  const onPreviousItem = () => {
    const newIndex = currentIndex - 1;
    const validIndex = newIndex < 0 ? 0 : newIndex;
    updateCurrentIndex(validIndex);
  };

  return (
    <div className={cx('filter')}>
      <ContentContainer
        fill
        header={
          onSearch
            ? (
              <div className={cx('header')}>
                <div>{title}</div>
                <SearchField onSearch={onSearch} onInvalidSearch={onSearch} className={cx('input')} />
              </div>
            )
            : <div>{title}</div>
        }
        footer={
          onSelectAll
            ? (
              <button
                type="button"
                className={cx('footer')}
                onClick={onSelectAll}
                aria-keyshortcuts={useRemove ? 'Alt+ArrowLeft Delete' : 'Alt+ArrowRight Enter'}
              >
                {selectAllTitle}
              </button>
            )
            : undefined
        }
      >
        <div className={cx('inner-scroll')}>
          {
            isLoading
              ? <LoadingOverlay isOpen isAnimated isRelativeToContainer />
              : (
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
              )
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
