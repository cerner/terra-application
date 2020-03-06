import React, {
  useState,
} from 'react';

import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import styles from './FancyList.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  onSelectItem: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  onFirst: PropTypes.func,
  onLast: PropTypes.func,
  onSendAll: PropTypes.func,
  onRemoveAll: PropTypes.func,
  currentFocusKey: PropTypes.string,
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
  currentFocusKey,
  description,
  title,
  onSelectItem,
  onPrevious,
  onNext,
  onFirst,
  onLast,
  onSendAll,
  onRemoveAll,
  items,
  ...customProps
}) => {
  const [currentKey, setCurrentKey] = useState(null);

  const handleOnItemClick = event => {
    stopIt(event);
    onSelectItem(event, metaData);
  };

  const stopIt = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleKeyDown = event => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_HOME) {
      stopIt(event);
      onFirst(event);
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_END) {
      stopIt(event);
      onLast(event);
    }
    
    if (event.nativeEvent.keyCode === KeyCode.KEY_DOWN) {
      stopIt(event);
      onNext(event);
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_UP) {
      stopIt(event);
      onPrevious(event);
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      stopIt(event);
      const item = items.find(item => item.key === currentFocusKey);
      onSelectItem(event, item ? item.metaData : null);
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      stopIt(event);
      onSendAll(event);
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_BACK_SPACE) {
      stopIt(event);
      onRemoveAll(event);
    }
  };

  const listItems = items.map(item => {
    const itemClassNames = cx([
      'item',
      { selected: item.isSelected },
      { focused: item.key === currentFocusKey },
    ]);

    return (
      <li
        {...customProps}
        className={itemClassNames}
        onClick={handleOnItemClick}
        aria-selected={item.isSelected}
        role="option"
        key={item.key}
        // tabIndex="-1"
        id={item.key}
      >
        {item.node}
      </li>
    );
  });

  return (
    <ul
      role="listbox"
      className={cx('fancy')}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      aria-activedescendant={currentFocusKey}
    >
      {listItems}
    </ul>
    // <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} /> // use for loading words
  );
};

FilterBox.propTypes = propTypes;
FilterBox.defaultProps = defaultProps;

export default FilterBox;
