# years

## Props

| Prop name         | Description                                                                    | Type   | Values | Default |
| ----------------- | ------------------------------------------------------------------------------ | ------ | ------ | ------- |
| currentMonth      | (Unused) The month shown in the calendar.                                      | number | -      |         |
| currentYear       | The year shown in the calendar.                                                | number | -      |         |
| days              | (Unused) Localized strings to use in the calendar as a day identifiers.        | array  | -      |         |
| months            | (Unused) Localized strings to use in the calendar as a month identifiers.      | array  | -      |         |
| firstDayOfTheWeek | (Unused) The first day of the week for your locale.                            | number | -      |         |
| today             | (Unused) Value of today. If null, current time in client machine will be used. | date   | -      | null    |
| modelValue        | (Unused) Selected date in the Calendar, if any.                                | date   | -      | null    |
| goToday           | The text in the "Go to today" link shown in the calendar.                      | string | -      | ''      |

## Events

| Event name         | Properties | Description                                         |
| ------------------ | ---------- | --------------------------------------------------- |
| navigate           |            | Raised when user make click in a navigation button. |
| click-go-today     |            | 'Raised when user make click in a go today button.  |
| update:currentYear |            | Raised when user selects a year.                    |
| update:currentView |            | Raised when the view was change by an user action.  |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| bottom |             |          |

---
