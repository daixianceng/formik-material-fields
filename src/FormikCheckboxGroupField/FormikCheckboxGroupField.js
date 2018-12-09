import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { optionShape } from '../utils/PropTypes';
import CheckboxGroupField from '../CheckboxGroupField';

const FormikCheckboxGroupField = ({ render, ...props}) => {
  return <Field {...props} component={CheckboxGroupField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikCheckboxGroupField.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    row: PropTypes.oneOf([true, false, 'all']),
    label: PropTypes.node,
    helperText: PropTypes.node,
    CheckboxProps: PropTypes.object,
    FormGroupProps: PropTypes.object,
    FormLabelProps: PropTypes.object,
    FormHelperTextProps: PropTypes.object,
    FormControlLabelProps: PropTypes.object,
  };
}

export default FormikCheckboxGroupField;
