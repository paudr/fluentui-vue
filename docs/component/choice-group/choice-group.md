# choice-group

## Props

| Prop name  | Description                                                                                           | Type    | Values | Default |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| modelValue | Current value of the choice group.                                                                    | string  | -      | null    |
| label      | Descriptive label for the choice group.                                                               | string  | -      | ''      |
| required   | If true, it specifies that an option must be selected in the choice group before submitting the form. | boolean | -      | false   |
| disabled   | Whether the choice group is disabled or not.                                                          | boolean | -      | false   |
| readonly   | If true, the choice group is readonly.                                                                | boolean | -      | false   |
| options    | The options for the choice group.                                                                     | array   | -      |         |
| inRow      | Render the choice group in a row instead of a column.                                                 | boolean | -      | false   |

## Events

| Event name        | Properties | Description                                                                    |
| ----------------- | ---------- | ------------------------------------------------------------------------------ |
| update:modelValue |            | Raised when an alteration to the ChoiceGroup's value is committed by the user. |

---
