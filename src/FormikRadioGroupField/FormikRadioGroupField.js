import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { optionShape } from '../utils/PropTypes';
import RadioGroupField from '../RadioGroupField';

const FormikRadioGroupField = ({ render, ...props }) => {
  return <Field {...props} component={RadioGroupField} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikRadioGroupField.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    row: PropTypes.oneOf([true, false, 'all']),
    label: PropTypes.node,
    helperText: PropTypes.node,
    render: PropTypes.func,
    RadioProps: PropTypes.object,
    RadioGroupProps: PropTypes.object,
    FormLabelProps: PropTypes.object,
    FormHelperTextProps: PropTypes.object,
    FormControlLabelProps: PropTypes.object,
  };
}

export default FormikRadioGroupField;
