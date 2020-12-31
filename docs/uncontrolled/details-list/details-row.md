# details-row

## Props

| Prop name | Description                                         | Type    | Values                       | Default |
| --------- | --------------------------------------------------- | ------- | ---------------------------- | ------- |
| type      | Type of table row                                   | string  | `header`, `group`, `data`    |         |
| selection | Controls how/if the details list manages selection. | string  | `multiple`, `simple`, `safe` | ''      |
| selected  | Row's checked state                                 | boolean | -                            | false   |
| compact   | Whether to render in compact mode.                  | boolean | -                            | false   |

## Events

| Event name | Properties | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| click      |            | Raised when the user clicks on the element. |

## Slots

| Name    | Description   | Bindings |
| ------- | ------------- | -------- |
| default | Row's content |          |

---
