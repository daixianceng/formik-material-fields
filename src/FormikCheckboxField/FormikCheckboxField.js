import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Checkbox from '@material-ui/core/Checkbox';
import ControlField from '../ControlField';

const FormikCheckboxField = ({ render, ...props }) => {
  return (
    <Field {...props} component={ControlField} controlComponent={Checkbox} />
  );
};

if (process.env.NODE_ENV !== 'production') {
  FormikCheckboxField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikCheckboxField;
