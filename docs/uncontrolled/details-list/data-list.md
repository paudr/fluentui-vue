# data-list

## Props

| Prop name       | Description                                         | Type    | Values                       | Default |
| --------------- | --------------------------------------------------- | ------- | ---------------------------- | ------- |
| columns         | Column defitions.                                   | array   | -                            |         |
| data            | The items to render in DetailsList.                 | array   | -                            |         |
| startIndex      | First index of data elements to render.             | number  | -                            |         |
| count           | Number of elements to render.                       | number  | -                            |         |
| selection       | Controls how/if the details list manages selection. | string  | `multiple`, `simple`, `safe` | ''      |
| selectedIndices | Indices of the selected rows.                       | array   | -                            | []      |
| compact         | Whether to render in compact mode.                  | boolean | -                            | false   |
| collapsible     | Whether the table groups are collapsible or not.    | boolean | -                            | false   |

## Events

| Event name | Properties | Description                                    |
| ---------- | ---------- | ---------------------------------------------- |
| click-row  |            | Raised when the user clicks on a row selector. |

---
