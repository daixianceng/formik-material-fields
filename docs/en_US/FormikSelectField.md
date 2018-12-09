# FormikSelectField

## Prop API

|Name|Type|Default|Description|
|---|---|---|---|
|name|`string`||The name of the select field, see formik docs [field#name](https://jaredpalmer.com/formik/docs/api/field#name)|
|native|`bool`|`false`|Whether to use the native drop-down menu|
|options|`array`||Drop-down menu list, each of which is an object like `{ label: 'Male', value: 'male' }`, `value` must be unique|
|validate|`func`||Validator, see formik docs [field#validate](https://jaredpalmer.com/formik/docs/api/field#validate)|

Any other properties supplied will be spread to the [@material-ui/core/TextField](https://material-ui.com/api/text-field/) component.

## Example

<p align="center">
  <img src="../../media/FormikSelectField.gif" alt="FormikSelectField" />
</p>

```js
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikSelectField } from 'formik-material-fields';

const validationSchema = Yup.object().shape({
  gender: Yup.string().required(),
  country: Yup.string().required(),
});

const initialValues = {
  gender: '',
  country: 0,
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
            <FormikSelectField
              name="gender"
              label="Gender"
              margin="normal"
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
              fullWidth
            />
            <FormikSelectField
              name="country"
              label="Country"
              margin="normal"
              options={[
                { label: 'China', value: 0 },
                { label: 'United States', value: 1 },
              ]}
              fullWidth
              native
            />
          </Form>
        )}
      </Formik>
    );
  }
}

```