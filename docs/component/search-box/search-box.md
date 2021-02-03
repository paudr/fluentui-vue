# search-box

## Props

| Prop name        | Description                                                                                                    | Type    | Values | Default  |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- | ------ | -------- |
| label            | Label displayed above the associated form field.                                                               | string  | -      | ''       |
| description      | Description displayed below the associated form field to provide additional details about what value to enter. | string  | -      | ''       |
| invalid          | Render field border with error color.                                                                          | boolean | -      | false    |
| errorMessage     | Static error message displayed below the associated form field.                                                | string  | -      | ''       |
| disabled         | Disabled state of the associated form field.                                                                   | boolean | -      | false    |
| required         | Whether the associated form field is required or not.                                                          | boolean | -      | false    |
| borderless       | Whether or not the associated form field is borderless.                                                        | boolean | -      | false    |
| underlined       | Whether or not the associated form field is underlined.                                                        | boolean | -      | false    |
| icon             | The name of the icon to use from the icon font.                                                                | string  | -      | 'Search' |
| placeholder      | Placeholder for the search box.                                                                                | string  | -      | 'Search' |
| disableAnimation | Whether or not to animate the SearchBox icon on focus.                                                         | boolean | -      | false    |
| modelValue       | The value of the text in the SearchBox.                                                                        | string  | -      | ''       |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
| search            |            |
| escape            |            |

---
