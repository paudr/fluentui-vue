# select

## Props

| Prop name        | Description                                          | Type      | Values | Default   |
| ---------------- | ---------------------------------------------------- | --------- | ------ | --------- |
| options          | Collection of options for this select.               | array     | -      |           |
| value            | Value or Values of the selected items.               | undefined | -      | undefined |
| disabled         | Disabled state of the associated form field.         | boolean   | -      | false     |
| readonly         | If true, the text field is readonly.                 | boolean   | -      | false     |
| multiple         | Whether the field allow select more than one option. | boolean   | -      | false     |
| markedIndex      | Index of the marked item.                            | number    | -      | -1        |
| highlightedIndex | Index of the highlighted item.                       | number    | -      | -1        |

## Events

| Event name | Properties | Description                       |
| ---------- | ---------- | --------------------------------- |
| select     |            | Raised when user selects an item. |
| keydown    |            | Raised when a key is pressed.     |

## Slots

| Name    | Description    | Bindings                                                                                                                                                                                                                                                                                                                 |
| ------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| default | Select's item. | **option** `object` - Option reference.<br>**index** `number` - Option's index.<br>**selected** `boolean` - Selected state of the option.<br>**marked** `boolean` - Marked state of the option.<br>**highlighted** `boolean` - Highlighted state of the option.<br>**click** `function` - Function to select the option. |

---
