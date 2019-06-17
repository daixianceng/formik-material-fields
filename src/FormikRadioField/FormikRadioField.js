import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Radio from '@material-ui/core/Radio';
import ControlField from '../ControlField';

const FormikRadioField = ({ render, ...props }) => {
  return <Field {...props} component={ControlField} controlComponent={Radio} />;
};

if (process.env.NODE_ENV !== 'production') {
  FormikRadioField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikRadioField;
