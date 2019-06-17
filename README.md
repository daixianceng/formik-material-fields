# formik-material-fields

A set of material style fields for [formik](https://github.com/jaredpalmer/formik)

`formik-material-fields` = [formik](https://github.com/jaredpalmer/formik) + [material-ui](https://github.com/mui-org/material-ui)

This library provides the following components:

- `FormikTextField`
- `FormikSelectField`
- `FormikRadioField`
- `FormikRadioGroupField`
- `FormikCheckboxField`
- `FormikCheckboxGroupField`
- `FormikSwitchField`

## Documentation

- [English Documentation](./docs/en_US/)
- [中文文档](./docs/zh_CN/)

## Installation

Using `npm`:

```
$ npm install --save formik-material-fields
```

Using `yarn`:

```
$ yarn add formik-material-fields
```

## Usage

<p align="center">
  <img src="./media/FormikTextField.gif" alt="FormikTextField" />
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

## License

**formik-material-fields** is released under the FSB License. See the bundled `LICENSE` for details.
