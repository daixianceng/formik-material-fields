import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '../TextField';
import { optionShape } from '../utils/PropTypes';

const SelectField = ({
  options,
  multiple = false,
  native = false,
  InputLabelProps,
  SelectProps,
  children,
  ...props
}) => {
  const isNative = !multiple && native;
  return (
    <TextField
      {...props}
      InputLabelProps={{
        shrink: isNative === true ? true : undefined,
        ...InputLabelProps,
      }}
      SelectProps={{
        ...SelectProps,
        multiple,
        native: isNative,
      }}
      select
    >
      {isNative
        ? options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        : options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
  );
};

if (process.env.NODE_ENV !== 'production') {
  SelectField.propTypes = {
    options: PropTypes.arrayOf(optionShape).isRequired,
    multiple: PropTypes.bool,
    native: PropTypes.bool,
  };
}

export default SelectField;
