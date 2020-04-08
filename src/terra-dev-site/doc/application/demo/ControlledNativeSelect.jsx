import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import NativeSelect from '../../../../native-select/NativeSelect';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string.required,
    value: PropTypes.string.required,
  })),
};

const defaultProps = {
  options: [],
};

const ControlledNativeSelect = ({
  options,
}) => {
  const [currentValue, setCurrentValue] = useState(options.length ? options[2].value : undefined);

  const handleOnChange = event => {
    setCurrentValue(event.currentTarget.value);
  };

  return (
    <NativeSelect
      value={currentValue}
      onChange={handleOnChange}
      options={options}
    />
  );
};

ControlledNativeSelect.propTypes = propTypes;
ControlledNativeSelect.defaultProps = defaultProps;

export default ControlledNativeSelect;
