import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Switch from '@material-ui/core/Switch';
import ControlField from '../ControlField';

const FormikSwitchField = ({ render, ...props }) => {
  return (
    <Field {...props} component={ControlField} controlComponent={Switch} />
  );
};

if (process.env.NODE_ENV !== 'production') {
  FormikSwitchField.propTypes = {
    render: PropTypes.func,
  };
}

export default FormikSwitchField;
