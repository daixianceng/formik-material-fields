import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import SelectField from '../SelectField';
import { optionShape } from '../utils/PropTypes';

const FormikSelectField = ({ render, ...props }) => {
  return <Field {...props} component={SelectField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikSelectField.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    multiple: PropTypes.bool,
    native: PropTypes.bool,
    render: PropTypes.func,
  };
}

export default FormikSelectField;
