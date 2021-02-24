# tag-picker

## Props

| Prop name         | Description                                                                                                                                                                                                                                     | Type    | Values | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| label             | Label displayed above the associated form field.                                                                                                                                                                                                | string  | -      | ''      |
| description       | Description displayed below the associated form field to provide additional details about what value to enter.                                                                                                                                  | string  | -      | ''      |
| invalid           | Render field border with error color.                                                                                                                                                                                                           | boolean | -      | false   |
| errorMessage      | Static error message displayed below the associated form field.                                                                                                                                                                                 | string  | -      | ''      |
| disabled          | Disabled state of the associated form field.                                                                                                                                                                                                    | boolean | -      | false   |
| required          | Whether the associated form field is required or not.                                                                                                                                                                                           | boolean | -      | false   |
| borderless        | Whether or not the associated form field is borderless.                                                                                                                                                                                         | boolean | -      | false   |
| underlined        | Whether or not the associated form field is underlined.                                                                                                                                                                                         | boolean | -      | false   |
| open              | Whether or not the options of the dropdown are rendered.                                                                                                                                                                                        | boolean | -      | false   |
| modelValue        | Value or Values of the selected items.                                                                                                                                                                                                          | array   | -      | []      |
| items             | Collection of items for this tag picker.                                                                                                                                                                                                        | array   | -      | []      |
| suggestedIndex    | Index of the suggested item.                                                                                                                                                                                                                    | number  | -      | -1      |
| placeholder       | Placeholder text rendered in the dropdown.                                                                                                                                                                                                      | string  | -      | null    |
| readonly          | If true, the dropdown is readonly.                                                                                                                                                                                                              | boolean | -      | false   |
| autoComplete      | Whether the combo box auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If the combo box is expanded, this will also scroll to the suggested option, and give it a selected style. | boolean | -      | false   |
| accentInsensitive | Whether the tag picker ignore accent when match texts.                                                                                                                                                                                          | boolean | -      | false   |
| maxSelectedItems  | The maximum amount of items that can be selected. -1 to disable limit.                                                                                                                                                                          | number  | -      | 1       |
| loading           | Whether the tag picker shows spinner in the dropdown panel.                                                                                                                                                                                     | boolean | -      | false   |
| loadingText       | The text to display while the results are loading.                                                                                                                                                                                              | string  | -      | ''      |

## Events

| Event name | Properties | Description                                                                             |
| ---------- | ---------- | --------------------------------------------------------------------------------------- |
| remove     |            | Raised when user removes an item.                                                       |
| input      |            | Raised when an alteration to the TagPicker's text field value is committed by the user. |
| keydown    |            | Raised when a key is pressed.                                                           |
| select     |            | Raised when an user selects an item of dropdown's Select.                               |

## Slots

| Name     | Description                | Bindings                                                                                                                           |
| -------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| selected | TagPicker's selected item. | **item** `object` - Item reference.<br>**index** `number` - Item's index.<br>**click** `function` - Function to unselect the item. |
| default  | TagPicker's item.          | **item** `object` - Item reference.<br>**index** `number` - Item's index.<br>**click** `function` - Function to select the item.   |

---
