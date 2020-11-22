# text-field

## Props

| Prop name        | Description                                                                                                    | Type    | Values | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| label            | Label displayed above the associated form field.                                                               | string  | -      | ''      |
| description      | Description displayed below the associated form field to provide additional details about what value to enter. | string  | -      | ''      |
| invalid          | Render field border with error color.                                                                          | boolean | -      | false   |
| errorMessage     | Static error message displayed below the associated form field.                                                | string  | -      | ''      |
| disabled         | Disabled state of the associated form field.                                                                   | boolean | -      | false   |
| required         | Whether the associated form field is required or not.                                                          | boolean | -      | false   |
| borderless       | Whether or not the associated form field is borderless.                                                        | boolean | -      | false   |
| underlined       | Whether or not the associated form field is underlined.                                                        | boolean | -      | false   |
| placeholder      | Placeholder text rendered in the text field.                                                                   | string  | -      | ''      |
| prefix           | Prefix displayed before the text field contents. This is not included in the value.                            | string  | -      | ''      |
| sufix            | Suffix displayed after the text field contents. This is not included in the value.                             | string  | -      | ''      |
| multiline        | Whether or not the text field is a multiline text field.                                                       | boolean | -      | false   |
| icon             | The name of the icon to use from the icon font.                                                                | string  | -      | ''      |
| readonly         | If true, the text field is readonly.                                                                           | boolean | -      | false   |
| maxlength        | Maximum length (number of characters) of value.                                                                | number  | -      | -1      |
| unresizable      | For multiline text fields, whether or not the field is resizable.                                              | boolean | -      | false   |
| autoAdjustHeight | For multiline text fields, whether or not to auto adjust text field height.                                    | boolean | -      | false   |
| modelValue       | Current value of the text field.                                                                               | string  | -      | ''      |

## Events

| Event name        | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| update:modelValue | undefined | Raised when the value of TextField has been changed.  |
| click             |           | Raised when the user clicks on the icon of TextField. |

---
