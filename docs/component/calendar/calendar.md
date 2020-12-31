# calendar

## Props

| Prop name         | Description                                                      | Type   | Values | Default                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------- | ------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| days              | Localized strings to use in the calendar as a day identifiers.   | array  | -      | ['d', 'l', 'm', 'x', 'j', 'v', 's']                                                                                                                                         |
| months            | Localized strings to use in the calendar as a month identifiers. | array  | -      | [<br> 'Gener',<br> 'Febrer',<br> 'Març',<br> 'Abril',<br> 'Maig',<br> 'Juny',<br> 'Juliol',<br> 'Agost',<br> 'Setembre',<br> 'Octubre',<br> 'Novembre',<br> 'Desembre'<br>] |
| firstDayOfTheWeek | The first day of the week for your locale.                       | number | -      | 1                                                                                                                                                                           |
| today             | Value of today.                                                  | date   | -      | null                                                                                                                                                                        |
| modelValue        | Selected date in the Calendar, if any.                           | date   | -      | null                                                                                                                                                                        |
| goToday           | The text in the "Go to today" link shown in the calendar.        | string | -      | ''                                                                                                                                                                          |

## Events

| Event name        | Properties | Description                                                                         |
| ----------------- | ---------- | ----------------------------------------------------------------------------------- |
| update:modelValue |            | Raised when an alteration to the Calendar's selected date is committed by the user. |

---
