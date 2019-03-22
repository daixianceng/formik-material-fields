import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getIn } from 'formik';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import { fieldShape, formShape, optionShape } from '../utils/PropTypes';
import s from '../utils/rowStyles';

class RadioGroupField extends React.Component {
  state = {
    dirty: false,
  };

  static defaultProps = {
    row: false,
  };

  handleChange = event => {
    this.props.field.onChange(event);
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    if (!this.state.dirty) {
      this.setState({
        dirty: true,
      });
    }
  };

  render() {
    const {
      field: { onChange: fieldOnChange, onBlur, ...field },
      form: { errors },
      options,
      label,
      row,
      helperText,
      FormLabelProps,
      FormHelperTextProps,
      FormControlLabelProps,
      RadioProps,
      RadioGroupProps,
      onChange,
      className,
      classes,
      ...props
    } = this.props;
    const message = this.state.dirty && getIn(errors, field.name);
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
        <RadioGroup
          {...RadioGroupProps}
          {...field}
          onChange={this.handleChange}
          row={Boolean(row)}
        >
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              control={<Radio {...RadioProps} />}
              {...FormControlLabelProps}
              value={option.value}
              label={option.label}
            />
          ))}
        </RadioGroup>
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
  RadioGroupField.propTypes = {
    field: fieldShape.isRequired,
    form: formShape.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    row: PropTypes.oneOf([true, false, 'all']),
    label: PropTypes.node,
    helperText: PropTypes.node,
    RadioProps: PropTypes.object,
    RadioGroupProps: PropTypes.object,
    FormLabelProps: PropTypes.object,
    FormHelperTextProps: PropTypes.object,
    FormControlLabelProps: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };
}

export default withStyles(s)(RadioGroupField);
