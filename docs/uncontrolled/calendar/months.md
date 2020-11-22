# months

## Props

| Prop name    | Description                                                      | Type   | Values | Default |
| ------------ | ---------------------------------------------------------------- | ------ | ------ | ------- |
| currentMonth | The month shown in the calendar.                                 | number | -      |         |
| currentYear  | The year shown in the calendar.                                  | number | -      |         |
| months       | Localized strings to use in the calendar as a month identifiers. | array  | -      |         |
| goToday      | The text in the "Go to today" link shown in the calendar.        | string | -      | ''      |

## Events

| Event name          | Type | Description                                         |
| ------------------- | ---- | --------------------------------------------------- |
| navigate            |      | Raised when user make click in a navigation button. |
| click-go-today      |      | 'Raised when user make click in a go today button.  |
| update:currentMonth |      | Raised when user selects a month.                   |
| update:currentView  |      | Raised when the view was change by an user action.  |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| bottom |             |          |

---
