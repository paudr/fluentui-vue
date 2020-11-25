# number-field

## Props

| Prop name                | Description                                                                                                    | Type    | Values                                   | Default          |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------- | ---------------- |
| label                    | Label displayed above the associated form field.                                                               | string  | -                                        | ''               |
| description              | Description displayed below the associated form field to provide additional details about what value to enter. | string  | -                                        | ''               |
| invalid                  | Render field border with error color.                                                                          | boolean | -                                        | false            |
| errorMessage             | Static error message displayed below the associated form field.                                                | string  | -                                        | ''               |
| disabled                 | Disabled state of the associated form field.                                                                   | boolean | -                                        | false            |
| required                 | Whether the associated form field is required or not.                                                          | boolean | -                                        | false            |
| borderless               | Whether or not the associated form field is borderless.                                                        | boolean | -                                        | false            |
| underlined               | Whether or not the associated form field is underlined.                                                        | boolean | -                                        | false            |
| placeholder              | Placeholder text rendered in the text field.                                                                   | string  | -                                        | ''               |
| prefix                   | Prefix displayed before the text field contents. This is not included in the value.                            | string  | -                                        | ''               |
| sufix                    | Suffix displayed after the text field contents. This is not included in the value.                             | string  | -                                        | ''               |
| multiline                | Whether or not the text field is a multiline text field.                                                       | boolean | -                                        | false            |
| icon                     | The name of the icon to use from the icon font.                                                                | string  | -                                        | ''               |
| readonly                 | If true, the text field is readonly.                                                                           | boolean | -                                        | false            |
| maxlength                | Maximum length (number of characters) of value.                                                                | number  | -                                        | -1               |
| unresizable              | For multiline text fields, whether or not the field is resizable.                                              | boolean | -                                        | false            |
| autoAdjustHeight         | For multiline text fields, whether or not to auto adjust text field height.                                    | boolean | -                                        | false            |
| modelValue               | Current value of the number field.                                                                             | number  | -                                        | null             |
| formatStyle              | The number formatting style to use.                                                                            | string  | `decimal`, `currency`, `percent`, `unit` | 'decimal'        |
| useGrouping              | Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.            | boolean | -                                        | false            |
| minimumIntegerDigits     | The minimum number of integer digits to use. Possible values are from 1 to 21.                                 | number  | -                                        | 1                |
| minimumFractionDigits    | The minimum number of fraction digits to use.                                                                  | number  | -                                        | 0                |
| maximumFractionDigits    | The maximum number of fraction digits to use.                                                                  | number  | -                                        | 20               |
| minimumSignificantDigits | The maximum number of fraction digits to use.                                                                  | number  | -                                        | 0                |
| maximumSignificantDigits | The maximum number of significant digits to use.                                                               | number  | -                                        | 0                |
| parse                    | Function for convert string value to a numeric value.                                                          | func    | -                                        | defaultParse     |
| stringify                | Function for convert numeric value to a string value.                                                          | func    | -                                        | defaultStringify |
| align                    | Text align when NumberField has no focus<br>values left, center, right                                         | string  | `left`, `center`, `right`                | 'left'           |
| alignFocus               | Text align when NumberField has focus<br>values left, center, right                                            | string  | `left`, `center`, `right`                | 'left'           |

## Events

| Event name        | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| click             |           | Raised when the user clicks on the icon of TextField. |
| update:modelValue | undefined | Raised when the value of TextField has been changed.  |

---
