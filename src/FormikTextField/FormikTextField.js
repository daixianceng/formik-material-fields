import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import TextField from '../TextField';

const FormikTextField = ({ children, ...props }) => {
  return (
    <Field {...props} component={TextField}>
      {children}
    </Field>
  );
};

if (process.env.NODE_ENV !== 'production') {
  FormikTextField.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
}

export default FormikTextField;
