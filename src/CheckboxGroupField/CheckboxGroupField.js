import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';

import { fieldShape, formShape, optionShape } from '../utils/PropTypes';
import s from './styles';

class CheckboxGroupField extends React.Component {
  state = {
    dirty: false,
  };

  static defaultProps = {
    row: false,
  };

  handleChange = event => {
    if (event.target.checked) {
      this.props.field.onChange({
        target: { value: event.target.value, name: this.props.field.name },
      });
    } else {
      this.props.field.onChange({
        target: { value: undefined, name: this.props.field.name },
      });
    }
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (!this.state.dirty) {
      this.setState({
        dirty: true,
      });
    }
  };

  render() {
    const {
      field: { onChange, onBlur, ...field },
      form: { errors },
      options,
      label,
      row,
      helperText,
      FormLabelProps,
      FormHelperTextProps,
      FormControlLabelProps,
      CheckboxProps,
      FormGroupProps,
      className,
      classes,
      ...props
    } = this.props;
    const message = this.state.dirty && errors[field.name];
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
                  name={field.name}
                  value={option.value}
                  onChange={this.handleChange}
                  checked={option.value === field.value}
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
    row: PropTypes.oneOf([true, false, 'all']),
    label: PropTypes.node,
    helperText: PropTypes.node,
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
