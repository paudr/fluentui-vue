# group-header

## Props

| Prop name   | Description                                         | Type    | Values                       | Default |
| ----------- | --------------------------------------------------- | ------- | ---------------------------- | ------- |
| columnCount | Number of cisible columns.                          | number  | -                            |         |
| compact     | Whether to render in compact mode.                  | boolean | -                            | false   |
| selection   | Controls how/if the details list manages selection. | string  | `multiple`, `simple`, `safe` | ''      |
| selected    | Selection state.                                    | boolean | -                            | false   |
| collapsible | Whether the table groups are collapsible or not.    | boolean | -                            | false   |
| name        | Text rendered at the beginning of the data group.   | string  | -                            | ''      |
| level       | Number indicating the level of nested groups.       | number  | -                            | 0       |
| collapsed   | If all the items in the group are collapsed.        | boolean | -                            | false   |

## Events

| Event name     | Properties | Description                                  |
| -------------- | ---------- | -------------------------------------------- |
| click-row      |            | Raised when the user clicks on the row.      |
| click-expander |            | Raised when the user clicks on the expander. |

---
