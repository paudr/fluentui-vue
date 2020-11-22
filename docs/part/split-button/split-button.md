# split-button

## Props

| Prop name      | Description                                                                                 | Type    | Values | Default |
| -------------- | ------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| text           | Text to render button label.                                                                | string  | -      | ''      |
| icon           | The name of the icon to use from the icon font.                                             | string  | -      | ''      |
| iconColor      | The color for render Icon.                                                                  | string  | -      | ''      |
| iconSpace      | Whether the button must to reserve a space for Icon.                                        | boolean | -      | false   |
| expandIcon     | The name of the expand icon to use from the icon font.                                      | string  | -      | ''      |
| mousestopDelay | Time in milliseconds that the mouse must be over the button to trigger the mousestop event. | number  | -      | 800     |

## Events

| Event name       | Type | Description                                                                   |
| ---------------- | ---- | ----------------------------------------------------------------------------- |
| click            |      | Raised when the user clicks on the element.                                   |
| mousestop        |      | Raised when the mouse is over the button for a certain amount of time.        |
| click-expand     |      | Raised when the user clicks on the expand button.                             |
| mousestop-expand |      | Raised when the mouse is over the expand button for a certain amount of time. |

---
