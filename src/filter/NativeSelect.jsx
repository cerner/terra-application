import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NativeSelect.module.scss';

const cx = classNames.bind(styles);

const createPlaceholder = text => <option value="" disabled hidden>{text}</option>;

const createOptions = options => options.map(current => {
  if (current.childOptions) {
    return (
      <optgroup label={current.display}>
        {createOptions(current.childOptions)}
      </optgroup>
    );
  }
  return <option value={current.value}>{current.display}</option>;
});

const getDisplay = (findValue, options) => {
  if (!options || !options.length) {
    return undefined;
  }

  for (let i = 0; i < options.length; i += 1) {
    const current  = options[i];
    if (current.value) {
      if (current.value === findValue) {
        return current.display;
      }
    } else if (current.childOptions) {
      const foundValue = getDisplay(findValue, current.childOptions);
      if (foundValue) {
        return foundValue;
      }
    }
  }
  return undefined;
};

const getFirstValue = options => {
  if (!options || !options.length) {
    return undefined;
  }
  for (let i = 0; i < options.length; i += 1) {
    const current  = options[i];
    if (current.value) {
      return current.value;
    }
    const firstValue = getFirstValue(current.childOptions);
    if (firstValue) {
      return firstValue;
    }
  }
  return undefined;
};

const optionPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
});

const optGroupPropType = PropTypes.shape({
  display: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  childOptions: PropTypes.arrayOf(optionPropType).isRequired,
});

const propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  isIncomplete: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOf([optGroupPropType , optGroupPropType])),
  required: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  invalid: false,
  options: [],
  required: false,
};

const NativeSelect = ({
  disabled,
  defaultValue,
  invalid,
  isIncomplete,
  onChange,
  options,
  required,
  value,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || getFirstValue(options));
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

  const selectAttrs = {
    disabled,
    invalid,
    required,
    value: value || currentValue,
  };

  return (
    <div
      className={cx('outer', { disabled }, { invalid }, { incomplete: required && isIncomplete })}
      ref={refSelect}
      data-focus-styles-enabled="none"
    >
      <div aria-hidden className={cx('frame')}>
        <div className={cx('display')}>
          {getDisplay(selectAttrs.value, options)}
        </div>
        <div className={cx('arrow-icon')} />
      </div>
      <select
        {...selectAttrs}
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
