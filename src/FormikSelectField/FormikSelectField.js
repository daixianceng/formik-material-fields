import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import SelectField from '../SelectField';

const FormikSelectField = ({ render, ...props }) => {
  return <Field {...props} component={SelectField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikSelectField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikSelectField;
