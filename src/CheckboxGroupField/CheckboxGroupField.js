import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getIn } from 'formik';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

import { toggle } from '../utils/functions';
import { fieldShape, formShape, optionShape } from '../utils/PropTypes';
import s from '../utils/rowStyles';

class CheckboxGroupField extends React.Component {
  static defaultProps = {
    row: false,
    multiple: false,
  };

  handleChange = event => {
    const { field, form, multiple, onChange } = this.props;
    let value;
    if (multiple) {
      value = toggle(this.filterValue(field.value), event.target.value);
    } else if (event.target.checked) {
      value = event.target.value;
    }
    field.onChange({
      target: { value, name: field.name },
    });
    if (onChange) {
      onChange(value);
    }
    if (!getIn(form.touched, field.name)) {
      form.setFieldTouched(field.name);
    }
  };

  filterValue = value => {
    const optionValues = this.props.options.map(option => option.value);
    return value.filter(v => optionValues.includes(v));
  };

  render() {
    const {
      field,
      form: { touched, errors },
      options,
      multiple,
      label,
      row,
      helperText,
      FormLabelProps,
      FormHelperTextProps,
      FormControlLabelProps,
      CheckboxProps,
      FormGroupProps,
      onChange,
      className,
      classes,
      ...props
    } = this.props;
    const message = getIn(touched, field.name) && getIn(errors, field.name);
    return (
      <FormControl
        className={cx({ [classes.rowContainer]: row === 'all' }, className)}
        error={Boolean(message)}
        {...props}
      >
        {label && (
          <FormLabel
            {...FormLabelProps}
            className={cx(
              { [classes.rowLabel]: row === 'all' },
              FormLabelProps && FormLabelProps.className,
            )}
          >
            {label}
          </FormLabel>
        )}
        <FormGroup {...FormGroupProps} row={Boolean(row)}>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  {...CheckboxProps}
                  value={option.value}
                  onChange={this.handleChange}
                  checked={
                    multiple
                      ? field.value.includes(option.value)
                      : option.value === field.value
                  }
                />
              }
              {...FormControlLabelProps}
              label={option.label}
            />
          ))}
        </FormGroup>
        {(message || helperText) && (
          <FormHelperText
            {...FormHelperTextProps}
            className={cx(
              { [classes.rowHelperText]: row === 'all' },
              FormHelperTextProps && FormHelperTextProps.className,
            )}
          >
            {message || helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  CheckboxGroupField.propTypes = {
    field: fieldShape.isRequired,
    form: formShape.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    multiple: PropTypes.bool,
    row: PropTypes.oneOf([true, false, 'all']),
    label: PropTypes.node,
    helperText: PropTypes.node,
    onChange: PropTypes.func,
    CheckboxProps: PropTypes.object,
    FormGroupProps: PropTypes.object,
    FormLabelProps: PropTypes.object,
    FormHelperTextProps: PropTypes.object,
    FormControlLabelProps: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };
}

export default withStyles(s)(CheckboxGroupField);
