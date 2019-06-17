# FormikRadioField, FormikCheckboxField, FormikSwitchField

## 道具 API

|名字|类型|默认|描述|
|---|---|---|---|
|controlLabel|`node`||按钮文字|
|ControlProps|`object`||附加到 [@material-ui/core/Radio](https://material-ui.com/api/radio/) 或 [@material-ui/core/Checkbox](https://material-ui.com/api/checkbox/) 或 [@material-ui/core/Switch](https://material-ui.com/api/switch/) 上的道具|
|falseValue|`any`|`false`|未选中时的值|
|FormControlLabelProps|`object`||附加到 [@material-ui/core/FormControlLabel](https://material-ui.com/api/form-control-label/) 上的道具|
|FormHelperTextProps|`object`||附加到 [@material-ui/core/FormHelperText](https://material-ui.com/api/form-helper-text/) 上的道具|
|FormLabelProps|`object`||附加到 [@material-ui/core/FormLabel](https://material-ui.com/api/form-label/) 上的道具|
|name|`string`||字段的名字，见formik文档 [field#name](https://jaredpalmer.com/formik/docs/api/field#name)|
|row|`bool`|`false`|是否使用行布局|
|trueValue|`any`|`true`|选中时的值|
|validate|`func`||验证函数，见formik文档 [field#validate](https://jaredpalmer.com/formik/docs/api/field#validate)|

其它道具将会传递到 [@material-ui/core/FormControl](https://material-ui.com/api/form-control/) 组件

## 例子

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