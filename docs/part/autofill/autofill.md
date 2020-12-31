# autofill

## Props

| Prop name         | Description                                                    | Type    | Values | Default |
| ----------------- | -------------------------------------------------------------- | ------- | ------ | ------- |
| modelValue        | Current value of the field.                                    | string  | -      | ''      |
| placeholder       | Placeholder text rendered in the autofield.                    | string  | -      | ''      |
| readonly          | If true, the autofield is readonly.                            | boolean | -      | false   |
| disabled          | Disabled state of the autofield.                               | boolean | -      | false   |
| autofill          | Whether the autofill must to autofill value or not.            | boolean | -      | false   |
| accentInsensitive | Whether the autofield ignore accent when match suggested text. | boolean | -      | false   |
| suggestedValue    | The suggested autofill value that will display.                | string  | -      | ''      |

## Events

| Event name        | Properties | Description                                         |
| ----------------- | ---------- | --------------------------------------------------- |
| update:modelValue |            | Raised when the value of Autofill has been changed. |
| keydown           |            | Raised when a key is pressed.                       |

---
