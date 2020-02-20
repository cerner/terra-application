import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import FilterBox from './FilterBox';
import styles from './SingleListbox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  description: PropTypes.string,
  columnData: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    onSelectItem: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      metaData: PropTypes.object,
      node: PropTypes.node,
    })),
  }),
};


const MultiSelect = ({
  description,
  columnData,
  ...customProps
}) => {
  return (
    <div {...customProps} className={cx('outer')}>
      <FilterBox {...columnData} />
      <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} />
    </div>
  );
};

MultiSelect.propTypes = propTypes;

export default MultiSelect;
