import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import FilterBox from './FilterBox';
import styles from './DualListbox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  description: PropTypes.string,
  isVerticalDisplay: PropTypes.bool,
  columnOneData: PropTypes.shape({
    id: PropTypes.string,
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
    })),
  }),
  columnTwoData: PropTypes.shape({
    id: PropTypes.string,
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
    })),
  }),
};


const Inline = ({
  description,
  isVerticalDisplay,
  columnOneData,
  columnTwoData,
  ...customProps
}) => {
  const createColumn = (columnData) => {
    if (!columnData) {
      return undefined;
    }
    return <FilterBox {...columnData} />
  };

  return (
    <div className={cx('outer')}>
      {createColumn(columnOneData)}
      <div className={cx('middle')} />
      {createColumn(columnTwoData)}
      <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} />
    </div>
  );
};

Inline.propTypes = propTypes;

export default Inline;
