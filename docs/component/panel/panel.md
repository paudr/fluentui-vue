# panel

## Props

| Prop name          | Description                                        | Type    | Values                                                                    | Default  |
| ------------------ | -------------------------------------------------- | ------- | ------------------------------------------------------------------------- | -------- |
| type               | Type of the panel.                                 | string  | `custom`, `extraSmall`, `small`, `medium`, `large`, `extraLarge`, `fluid` | 'custom' |
| left               | Whether the panel renders in the left side or not. | boolean | -                                                                         | false    |
| headerText         | Header text for the panel.                         | string  | -                                                                         | ''       |
| withoutCloseButton | Has the close button visible.                      | boolean | -                                                                         | false    |

## Events

| Event name | Type | Description                                      |
| ---------- | ---- | ------------------------------------------------ |
| click      |      | Raised when the user clicks on the close button. |

## Slots

| Name    | Description    | Bindings |
| ------- | -------------- | -------- |
| default | Panel content  |          |
| footer  | Footer content |          |

---
