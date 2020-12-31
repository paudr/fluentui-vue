# combo-field

## Props

| Prop name    | Description                                                                                                    | Type    | Values | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| label        | Label displayed above the associated form field.                                                               | string  | -      | ''      |
| description  | Description displayed below the associated form field to provide additional details about what value to enter. | string  | -      | ''      |
| invalid      | Render field border with error color.                                                                          | boolean | -      | false   |
| errorMessage | Static error message displayed below the associated form field.                                                | string  | -      | ''      |
| disabled     | Disabled state of the associated form field.                                                                   | boolean | -      | false   |
| required     | Whether the associated form field is required or not.                                                          | boolean | -      | false   |
| borderless   | Whether or not the associated form field is borderless.                                                        | boolean | -      | false   |
| underlined   | Whether or not the associated form field is underlined.                                                        | boolean | -      | false   |
| open         | Whether or not the panel of the associated form field is rendered.                                             | boolean | -      | false   |

## Events

| Event name | Properties | Description                                          |
| ---------- | ---------- | ---------------------------------------------------- |
| click      |            | Raised when the user clicks on the label of element. |

## Slots

| Name     | Description      | Bindings |
| -------- | ---------------- | -------- |
| default  | Field element    |          |
| dropdown | Dropdown element |          |

---
