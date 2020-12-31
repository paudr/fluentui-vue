# item

## Props

| Prop name      | Description                                                                               | Type    | Values                       | Default  |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | ---------------------------- | -------- |
| type           | Type of item                                                                              | string  | `button`, `divider`, `title` | 'button' |
| hasAction      | Indicates if associated item must to trigger an action.                                   | boolean | -                            | false    |
| hasChilds      | Indicates if associated item has child items.                                             | boolean | -                            | false    |
| text           | Text to render item label.                                                                | string  | -                            | ''       |
| icon           | The name of the icon to use from the icon font.                                           | string  | -                            | ''       |
| iconColor      | The color for render Icon.                                                                | string  | -                            | ''       |
| iconSpace      | Whether the button must to reserve a space for Icon.                                      | boolean | -                            | false    |
| mousestopDelay | Time in milliseconds that the mouse must be over the item to trigger the mousestop event. | number  | -                            | 800      |
| disabled       | Disabled state of the associated item.                                                    | boolean | -                            | false    |

## Events

| Event name       | Properties | Description                                                                   |
| ---------------- | ---------- | ----------------------------------------------------------------------------- |
| click            |            | Raised when the user clicks on the element.                                   |
| click-expand     |            | Raised when the user clicks on the expand button.                             |
| mousestop        |            | Raised when the mouse is over the button for a certain amount of time.        |
| mousestop-expand |            | Raised when the mouse is over the expand button for a certain amount of time. |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
