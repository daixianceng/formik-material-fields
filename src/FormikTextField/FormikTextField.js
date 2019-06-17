import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import TextField from '../TextField';

const FormikTextField = ({ children, render, ...props }) => {
  return (
    <Field {...props} component={TextField}>
      {children}
    </Field>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FormikTextField.propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
  };
}

export default FormikTextField;
