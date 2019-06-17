import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import RadioGroupField from '../RadioGroupField';

const FormikRadioGroupField = ({ render, ...props }) => {
  return <Field {...props} component={RadioGroupField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikRadioGroupField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikRadioGroupField;
