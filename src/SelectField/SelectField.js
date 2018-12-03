import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '../TextField';
import { optionShape } from '../utils/PropTypes';

const SelectField = ({
  options,
  native = false,
  InputLabelProps,
  SelectProps,
  children,
  ...props
}) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        shrink: native === true ? true : undefined,
        ...InputLabelProps,
      }}
      SelectProps={{
        ...SelectProps,
        native,
      }}
      select
    >
      {native
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
    native: PropTypes.bool,
  };
}

export default SelectField;
