# years

## Props

| Prop name   | Description                                               | Type   | Values | Default |
| ----------- | --------------------------------------------------------- | ------ | ------ | ------- |
| currentYear | The year shown in the calendar.                           | number | -      |         |
| goToday     | The text in the "Go to today" link shown in the calendar. | string | -      | ''      |

## Events

| Event name         | Type | Description                                         |
| ------------------ | ---- | --------------------------------------------------- |
| navigate           |      | Raised when user make click in a navigation button. |
| click-go-today     |      | 'Raised when user make click in a go today button.  |
| update:currentYear |      | Raised when user selects a year.                    |
| update:currentView |      | Raised when the view was change by an user action.  |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| bottom |             |          |

---
