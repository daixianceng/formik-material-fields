# FormikRadioField, FormikCheckboxField, FormikSwitchField

## Prop API

|Name|Type|Default|Description|
|---|---|---|---|
|controlLabel|`node`||Label of the control|
|ControlProps|`object`||Properties applied to the [@material-ui/core/Radio](https://material-ui.com/api/radio/) or [@material-ui/core/Checkbox](https://material-ui.com/api/checkbox/) or [@material-ui/core/Switch](https://material-ui.com/api/switch/) component|
|falseValue|`any`|`false`|Value of the control if it's not checked|
|FormControlLabelProps|`object`||Properties applied to the [@material-ui/core/FormControlLabel](https://material-ui.com/api/form-control-label/) component|
|FormHelperTextProps|`object`||Properties applied to the [@material-ui/core/FormHelperText](https://material-ui.com/api/form-helper-text/) component|
|FormLabelProps|`object`||Properties applied to the [@material-ui/core/FormLabel](https://material-ui.com/api/form-label/) component|
|name|`string`||The name of the field, see formik docs [field#name](https://jaredpalmer.com/formik/docs/api/field#name)|
|row|`bool`|`false`|Whether to use the row layout|
|trueValue|`any`|`true`|Value of the control if it's checked|
|validate|`func`||Validator, see formik docs [field#validate](https://jaredpalmer.com/formik/docs/api/field#validate)|

Any other properties supplied will be spread to the [@material-ui/core/FormControl](https://material-ui.com/api/form-control/) component.

## Example

```js
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikCheckboxField, FormikSwitchField } from 'formik-material-fields';

const validationSchema = Yup.object().shape({
  gender: Yup.string().required(),
});

const initialValues = {
  gender: '',
};

class MyForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <FormikCheckboxField
              name="gender"
              label="Gender"
              margin="normal"
              trueValue="male"
              falseValue="female"
              controlLabel="Male"
            />
            <FormikSwitchField
              name="gender"
              label="Gender"
              margin="normal"
              trueValue="male"
              falseValue="female"
              controlLabel="Male"
            />
          </Form>
        )}
      </Formik>
    );
  }
}

```