# select

## Props

| Prop name        | Description                                          | Type      | Values | Default   |
| ---------------- | ---------------------------------------------------- | --------- | ------ | --------- |
| options          | Collection of options for this select.               | array     | -      |           |
| modelValue       | Value or Values of the selected items.               | undefined | -      | undefined |
| disabled         | Disabled state of the associated form field.         | boolean   | -      | false     |
| readonly         | If true, the text field is readonly.                 | boolean   | -      | false     |
| multiple         | Whether the field allow select more than one option. | boolean   | -      | false     |
| markedIndex      | Index of the marked item.                            | number    | -      | -1        |
| highlightedIndex | Index of the highlighted item.                       | number    | -      | -1        |

## Events

| Event name        | Properties | Description                                                                     |
| ----------------- | ---------- | ------------------------------------------------------------------------------- |
| update:modelValue |            | Raised when an alteration to the Select field's value is committed by the user. |
| keydown           |            | Raised when a key is pressed.                                                   |

## Slots

| Name    | Description    | Bindings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | Select's item. | **option** `object` - Option reference.<br>**index** `number` - Option's index.<br>**type** `string` - Option's type.<br>**text** `string` - Option's text.<br>**multiple** `boolean` - Multiple state of the select.<br>**disabled** `boolean` - Disable state of the option<br>**selected** `boolean` - Selected state of the option.<br>**marked** `boolean` - Marked state of the option.<br>**highlighted** `boolean` - Highlighted state of the option.<br>**click** `function` - Function to select the option. |

---
