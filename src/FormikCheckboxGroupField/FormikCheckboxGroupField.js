import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import CheckboxGroupField from '../CheckboxGroupField';

const FormikCheckboxGroupField = ({ render, ...props }) => {
  return <Field {...props} component={CheckboxGroupField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikCheckboxGroupField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikCheckboxGroupField;
