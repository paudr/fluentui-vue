# dropdown

## Props

| Prop name    | Description                                                                                                    | Type      | Values | Default   |
| ------------ | -------------------------------------------------------------------------------------------------------------- | --------- | ------ | --------- |
| label        | Label displayed above the associated form field.                                                               | string    | -      | ''        |
| description  | Description displayed below the associated form field to provide additional details about what value to enter. | string    | -      | ''        |
| invalid      | Render field border with error color.                                                                          | boolean   | -      | false     |
| errorMessage | Static error message displayed below the associated form field.                                                | string    | -      | ''        |
| disabled     | Disabled state of the associated form field.                                                                   | boolean   | -      | false     |
| required     | Whether the associated form field is required or not.                                                          | boolean   | -      | false     |
| borderless   | Whether or not the associated form field is borderless.                                                        | boolean   | -      | false     |
| underlined   | Whether or not the associated form field is underlined.                                                        | boolean   | -      | false     |
| options      | Collection of options for this dropdown.                                                                       | array     | -      |           |
| modelValue   | Value or Values of the selected items.                                                                         | undefined | -      | undefined |
| placeholder  | Placeholder text rendered in the dropdown.                                                                     | string    | -      | null      |
| readonly     | If true, the dropdown is readonly.                                                                             | boolean   | -      | false     |
| multiple     | Whether the dropdown allow select more than one option.                                                        | boolean   | -      | false     |

## Events

| Event name        | Properties | Description                                                       |
| ----------------- | ---------- | ----------------------------------------------------------------- |
| update:modelValue |            | Raised when the user clicks on the input element of the Dropdown. |

---
