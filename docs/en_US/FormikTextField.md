# FormikTextField

## Prop API

|Name|Type|Default|Description|
|---|---|---|---|
|name|`string`||The name of the input field, see formik docs [field#name](https://jaredpalmer.com/formik/docs/api/field#name)|
|validate|`func`||Validator, see formik docs [field#validate](https://jaredpalmer.com/formik/docs/api/field#validate)|

Any other properties supplied will be spread to the [@material-ui/core/TextField](https://material-ui.com/api/text-field/) component.

## Example

<p align="center">
  <img src="../../media/FormikTextField.gif" alt="FormikTextField" />
</p>

```js
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
});

const initialValues = {
  username: '',
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
            <FormikTextField
              name="username"
              label="Username"
              margin="normal"
              fullWidth
            />
          </Form>
        )}
      </Formik>
    );
  }
}

```