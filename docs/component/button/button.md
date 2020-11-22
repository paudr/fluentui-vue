# button

## Props

| Prop name     | Description                                                                                                                                                        | Type    | Values                                             | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | -------------------------------------------------- | --------- |
| type          | Type of button.                                                                                                                                                    | string  | `default`, `action`, `command`, `compound`, `icon` | 'default' |
| primary       | Changes the visual presentation of the button to be emphasized.                                                                                                    | boolean | -                                                  | false     |
| text          | Text to render button label. If text is supplied, it will override any string in button children. Other children components will be passed through after the text. | string  | -                                                  | ''        |
| secondaryText | Description of the action this button takes. Only used for compound buttons.                                                                                       | string  | -                                                  | ''        |
| icon          | The name of the icon to use from the icon font.                                                                                                                    | string  | -                                                  | ''        |
| href          | If provided, this component will be rendered as an anchor.                                                                                                         | string  | -                                                  | ''        |
| target        | Target attribute of the anchor element. 'href' attribute must to be populated.                                                                                     | string  | -                                                  | ''        |
| checked       | Whether the button is checked.                                                                                                                                     | boolean | -                                                  | false     |
| disabled      | Whether the button is disabled.                                                                                                                                    | boolean | -                                                  | false     |

## Events

| Event name | Type | Description                                 |
| ---------- | ---- | ------------------------------------------- |
| click      |      | Raised when the user clicks on the element. |

---
