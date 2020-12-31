# details-list

## Props

| Prop name       | Description                                                  | Type    | Values                       | Default |
| --------------- | ------------------------------------------------------------ | ------- | ---------------------------- | ------- |
| columns         | Column defitions.                                            | array   | -                            |         |
| data            | The items to render.                                         | array   | -                            |         |
| groups          | Grouping instructions.                                       | array   | -                            | []      |
| selectedIndices | Indices of the selected rows.                                | array   | -                            | []      |
| auto            | Whether the column width algorithm is set to auto or static. | boolean | -                            | false   |
| fullAuto        | Whether the table width algorithm is set to auto or full.    | boolean | -                            | false   |
| compact         | Whether to render in compact mode.                           | boolean | -                            | false   |
| selection       | Controls how/if the details list manages selection.          | string  | `multiple`, `simple`, `safe` | ''      |
| collapsible     | Whether the table groups are collapsible or not.             | boolean | -                            | false   |

## Events

| Event name             | Properties | Description                                             |
| ---------------------- | ---------- | ------------------------------------------------------- |
| update:selectedIndices |            | Raised when the user clicks select or unselect any row. |
| click-header           |            | Raised when the user clicks on a column header.         |

---
