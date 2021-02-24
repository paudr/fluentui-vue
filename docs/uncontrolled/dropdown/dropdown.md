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
| open         | Whether or not the options of the dropdown are rendered.                                                       | boolean   | -      | false     |
| options      | Collection of options for this dropdown.                                                                       | array     | -      |           |
| value        | Value or Values of the selected items.                                                                         | undefined | -      | undefined |
| selectedText | Description text of the selected items.                                                                        | string    | -      | ''        |
| placeholder  | Placeholder text rendered in the dropdown.                                                                     | string    | -      | null      |
| readonly     | If true, the dropdown is readonly.                                                                             | boolean   | -      | false     |
| multiple     | Whether the dropdown allow select more than one option.                                                        | boolean   | -      | false     |
| markedIndex  | Index of the marked option.                                                                                    | number    | -      | -1        |

## Events

| Event name | Properties | Description                                                       |
| ---------- | ---------- | ----------------------------------------------------------------- |
| click      |            | Raised when the user clicks on the input element of the Dropdown. |
| keydown    |            | Raised when a key is pressed.                                     |
| select     |            | Raised when an user selects an item of dropdown's Select.         |

## Slots

| Name    | Description      | Bindings                                                                                                                                                                                                                                                                                                                                                                           |
| ------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Dropdown's item. | **option** `object` - Option reference.<br>**index** `number` - Option's index.<br>**multiple** `boolean` - Multiple state of the select.<br>**selected** `boolean` - Selected state of the option.<br>**marked** `boolean` - Marked state of the option.<br>**highlighted** `boolean` - Highlighted state of the option.<br>**click** `function` - Function to select the option. |

---
