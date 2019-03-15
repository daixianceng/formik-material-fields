import React from 'react';
import PropTypes from 'prop-types';
import MatTextField from '@material-ui/core/TextField';
import {fieldShape, formShape} from '../utils/PropTypes';
import {getIn} from "formik";

class TextField extends React.Component {
  handleChange = event => {
    this.props.field.onChange(event);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  handleBlur = event => {
    this.props.field.onBlur(event);
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const {
      field,
      form: {touched, errors},
      helperText,
      children,
      ...props
    } = this.props;
    const message = getIn(touched,field.name) && getIn(errors,field.name);
    return (
        <MatTextField
            {...props}
            {...field}
            error={Boolean(message)}
            helperText={message || helperText}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
        >
          {children}
        </MatTextField>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  TextField.propTypes = {
    field: fieldShape.isRequired,
    form: formShape.isRequired,
    helperText: PropTypes.node,
    children: PropTypes.node,
  };
}

export default TextField;
