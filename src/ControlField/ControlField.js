import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getIn } from 'formik';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import { fieldShape, formShape } from '../utils/PropTypes';
import s from '../utils/rowStyles';

class ControlField extends React.Component {
  static defaultProps = {
    trueValue: true,
    falseValue: false,
  };

  handleChange = (event, checked) => {
    const { field, form, trueValue, falseValue, onChange } = this.props;
    const value = checked ? trueValue : falseValue;
    field.onChange({
      target: { value, name: field.name },
    });
    if (onChange) {
      onChange(value, event);
    }
    if (!getIn(form.touched, field.name)) {
      form.setFieldTouched(field.name);
    }
  };

  render() {
    const {
      field,
      form: { touched, errors },
      trueValue,
      falseValue,
      label,
      controlLabel,
      controlComponent: Control,
      row,
      helperText,
      FormLabelProps,
      FormHelperTextProps,
      FormControlLabelProps,
      ControlProps,
      onChange,
      className,
      classes,
      ...props
    } = this.props;
    const message = getIn(touched, field.name) && getIn(errors, field.name);
    return (
      <FormControl
        className={cx({ [classes.rowContainer]: row }, className)}
        error={Boolean(message)}
        {...props}
      >
        {label && (
          <FormLabel
            {...FormLabelProps}
            className={cx(
              { [classes.rowLabel]: row },
              FormLabelProps && FormLabelProps.className,
            )}
          >
            {label}
          </FormLabel>
        )}
        <FormControlLabel
          control={
            <Control
              {...ControlProps}
              value={trueValue}
              onChange={this.handleChange}
              checked={trueValue === field.value}
            />
          }
          label={controlLabel}
          {...FormControlLabelProps}
        />
        {(message || helperText) && (
          <FormHelperText
            {...FormHelperTextProps}
            className={cx(
              { [classes.rowHelperText]: row },
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
  ControlField.propTypes = {
    field: fieldShape.isRequired,
    form: formShape.isRequired,
    row: PropTypes.bool,
    trueValue: PropTypes.any,
    falseValue: PropTypes.any,
    label: PropTypes.node,
    controlLabel: PropTypes.node,
    controlComponent: PropTypes.any.isRequired,
    helperText: PropTypes.node,
    onChange: PropTypes.func,
    ControlProps: PropTypes.object,
    FormLabelProps: PropTypes.object,
    FormHelperTextProps: PropTypes.object,
    FormControlLabelProps: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };
}

export default withStyles(s)(ControlField);
