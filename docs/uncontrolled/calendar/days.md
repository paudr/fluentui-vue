# days

## Props

| Prop name         | Description                                                           | Type   | Values | Default |
| ----------------- | --------------------------------------------------------------------- | ------ | ------ | ------- |
| currentMonth      | The month shown in the calendar.                                      | number | -      |         |
| currentYear       | The year shown in the calendar.                                       | number | -      |         |
| days              | Localized strings to use in the calendar as a day identifiers.        | array  | -      |         |
| months            | Localized strings to use in the calendar as a month identifiers.      | array  | -      |         |
| firstDayOfTheWeek | The first day of the week for your locale.                            | number | -      |         |
| today             | Value of today. If null, current time in client machine will be used. | date   | -      | null    |
| modelValue        | Selected date in the Calendar, if any.                                | date   | -      | null    |
| goToday           | The text in the "Go to today" link shown in the calendar.             | string | -      | ''      |

## Events

| Event name         | Type | Description                                         |
| ------------------ | ---- | --------------------------------------------------- |
| navigate           |      | Raised when user make click in a navigation button. |
| click-go-today     |      | 'Raised when user make click in a go today button.  |
| update:modelValue  |      | Raised when user selects a date.                    |
| update:currentView |      | Raised when the view was change by an user action.  |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| bottom |             |          |

---
