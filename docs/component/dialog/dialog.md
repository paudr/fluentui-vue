# dialog

## Props

| Prop name | Description                                         | Type   | Values                           | Default  |
| --------- | --------------------------------------------------- | ------ | -------------------------------- | -------- |
| type      | The type of Dialog to display.                      | string | `normal`, `largeHeader`, `close` | 'normal' |
| header    | The title text to display at the top of the dialog. | string | -                                | ''       |
| text      | The text to display in the dialog.                  | string | -                                | ''       |

## Events

| Event name | Type | Description                                      |
| ---------- | ---- | ------------------------------------------------ |
| click      |      | Raised when the user clicks on the close button. |

## Slots

| Name    | Description    | Bindings |
| ------- | -------------- | -------- |
| default | Dialog content |          |
| footer  | Footer content |          |

---
