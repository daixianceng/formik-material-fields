# FormikTextField

## 道具 API

|名字|类型|默认|描述|
|---|---|---|---|
|name|`string`||输入框字段的名字，formik [field#name](https://jaredpalmer.com/formik/docs/api/field#name)|
|validate|`func`||验证函数，formik [field#validate](https://jaredpalmer.com/formik/docs/api/field#validate)|

其它道具将会传递到 [@material-ui/core/TextField](https://material-ui.com/api/text-field/) 组件

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