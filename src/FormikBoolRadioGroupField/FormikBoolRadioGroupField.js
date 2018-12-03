import React from 'react';

import FormikRadioGroupField from '../FormikRadioGroupField';

const options = [{ label: '是', value: '1' }, { label: '否', value: '0' }];

const FormikBoolRadioGroupField = props => {
  return <FormikRadioGroupField {...props} options={options} />;
};

export default FormikBoolRadioGroupField;
