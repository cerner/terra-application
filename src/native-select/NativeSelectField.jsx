import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Field from 'terra-form-field';
import Select from './Select';
import Variants from './shared/_variants';

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection.
   */
  allowClear: PropTypes.bool,
  /**
   * The field label.
   */
  label: PropTypes.node.isRequired,
  /**
   * The default value of the select. Can be a string, or number.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message displayed when the select is invalid.
   */
  error: PropTypes.node,
  /**
   * Help message to display with the select.
   */
  help: PropTypes.node,
  /**
   * Whether to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the field is displayed inline. Displays block by default.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Additional attributes to spread onto the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Additional attributes to spread onto the select.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectAttrs: PropTypes.object,
  /**
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  selectId: PropTypes.string.isRequired,
  /**
   * Whether to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * The value of the select. Can be a string or number.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  allowClear: false,
  defaultValue: undefined,
  disabled: false,
  error: undefined,
  help: undefined,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  onChange: undefined,
  required: false,
  selectAttrs: {},
  showOptional: false,
};

const SelectField = ({
  allowClear,
  defaultValue,
  disabled,
  error,
  help,
  hideRequired,
  intl,
  isIncomplete,
  isInline,
  isInvalid,
  isLabelHidden,
  label,
  labelAttrs,
  onChange,
  options,
  placeholder,
  required,
  selectAttrs,
  selectId,
  showOptional,
  value,
  ...customProps
}) => {
  const helpText = (
    <span>
      {help}
    </span>
  );

  let ariaDescriptionIds;
  if (help && error && isInvalid) {
    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${selectId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${selectId}-error`;
    }
  }

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={helpText}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={selectId}
      maxWidth={maxWidth}
    >
      {/* <Select
        {...selectAttrs}
        ariaLabel={label}
        allowClear={allowClear}
        aria-describedby={ariaDescriptionIds}
        disabled={selectAttrs.disabled || disabled}
        id={selectId}
        isIncomplete={isIncomplete}
        isInvalid={isInvalid}
        isTouchAccessible={isTouchAccessible}
        defaultValue={defaultValue}
        maxSelectionCount={maxSelectionCount !== undefined && maxSelectionCount < 2 ? undefined : maxSelectionCount}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
        variant={variant}
      >
        {children}
      </Select> */}
    </Field>
  );
};

SelectField.propTypes = propTypes;
SelectField.defaultProps = defaultProps;
SelectField.Option = Select.Option;
SelectField.OptGroup = Select.OptGroup;

export default injectIntl(SelectField);
