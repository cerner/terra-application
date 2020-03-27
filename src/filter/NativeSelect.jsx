import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NativeSelect.module.scss';

const cx = classNames.bind(styles);

const createOptions = options => options.map(option => <option value={option.value}>{option.display}</option>);

const getDisplay = (findValue, options) => {
  const foundOption = options.find(option => option.value === findValue);
  return foundOption ? foundOption.display : undefined;
};

const propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string.required,
    value: PropTypes.string.required,
  })),
  value: PropTypes.string,
};

const defaultProps = {
  options: [],
};

const NativeSelect = ({
  defaultValue,
  onChange,
  options,
  value,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || (options.length ? options[0].value : undefined));
  const refSelect = useRef();

  const handleOnMouseDown = () => {
    refSelect.current.setAttribute('data-focus-styles-enabled', 'mouse');
  };
  const handleOnBlur = () => {
    refSelect.current.setAttribute('data-focus-styles-enabled', 'none');
  };
  const handleOnFocus = () => {
    if (refSelect.current.getAttribute('data-focus-styles-enabled') !== 'mouse') {
      refSelect.current.setAttribute('data-focus-styles-enabled', 'keyboard');
    }
  };
  const handleOnChange = event => {
    if (onChange) {
      onChange(event);
    }
    setCurrentValue(event.currentTarget.value);
  };

  const controlValue = value || currentValue;
  return (
    <div
      className={cx('outer')}
      ref={refSelect}
      data-focus-styles-enabled="none"
    >
      <div aria-hidden className={cx('frame')}>
        <div className={cx('display')}>
          {getDisplay(controlValue, options)}
        </div>
        <div className={cx('arrow-icon')} />
      </div>
      <select
        value={controlValue}
        className={cx('select')}
        onChange={handleOnChange}
        onMouseDown={handleOnMouseDown}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      >
        {createOptions(options)}
      </select>
    </div>
  );
};

NativeSelect.propTypes = propTypes;
NativeSelect.defaultProps = defaultProps;

export default NativeSelect;
