<script>
import Days from './days'
import Months from './months'
import Years from './years'

export default {
  components: { Days, Months, Years },
  props: {
    /** The month shown in the calendar. */
    currentMonth: {
      type: Number,
      required: true,
      validator: month => Number.isInteger(month) &&
        month >= 0 &&
        month <= 11
    },
    /** The year shown in the calendar. */
    currentYear: {
      type: Number,
      required: true,
      validator: month => Number.isInteger(month)
    },
    /** Specifies when calendar selects dates, months or years. */
    currentView: {
      type: String,
      default: 'Days',
      validator: view => ['Days', 'Months', 'Years'].includes(view)
    },
    /** Localized strings to use in the calendar as a day identifiers. */
    days: {
      type: Array,
      required: true,
      validator: days => days.length === 7 &&
        days.every(day => typeof day === 'string')
    },
    /** Localized strings to use in the calendar as a month identifiers. */
    months: {
      type: Array,
      required: true,
      validator: months => months.length === 12 &&
        months.every(month => typeof month === 'string')
    },
    /** The first day of the week for your locale. */
    firstDayOfTheWeek: {
      type: Number,
      required: true,
      validator: firstDayOfTheWeek => Number.isInteger(firstDayOfTheWeek) &&
        firstDayOfTheWeek >= 0 &&
        firstDayOfTheWeek <= 6
    },
    /** Value of today. */
    today: {
      type: Date,
      default: null
    },
    /** Selected date in the Calendar, if any. */
    modelValue: {
      type: Date,
      default: null
    },
    /** The text in the "Go to today" link shown in the calendar. */
    goToday: {
      type: String,
      default: ''
    }
  },
  emits: [
    /** Raised when user selects a date. */
    'update:modelValue',
    /** Raised when user selects a month. */
    'update:currentMonth',
    /** Raised when user selects a year. */
    'update:currentYear',
    /** Raised when the view was change by an user action. */
    'update:currentView',
    /** Raised when user make click in a navigation button. */
    'navigate',
    /** 'Raised when user make click in a go today button. */
    'click-go-today'
  ]
}
</script>

<template>
  <component
    :is="currentView"
    class="calendar"
    v-bind="$props"
    @update:model-value="$emit('update:modelValue', $event)"
    @update:currentMonth="$emit('update:currentMonth', $event)"
    @update:currentYear="$emit('update:currentYear', $event)"
    @update:currentView="$emit('update:currentView', $event)"
    @navigate="$emit('navigate', $event)"
    @click-go-today="$emit('click-go-today', $event)"
  >
    <template #bottom>
      <button
        v-if="goToday"
        class="goToday"
        @click="handleGoToday"
        v-text="goToday"
      />
    </template>
  </component>
</template>
