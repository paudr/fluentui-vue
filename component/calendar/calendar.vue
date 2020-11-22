<script>
import UncontrolledCalendar from '../../uncontrolled/calendar'

export default {
  components: { UncontrolledCalendar },
  props: {
    /** Localized strings to use in the calendar as a day identifiers. */
    days: {
      type: Array,
      default: () => ['d', 'l', 'm', 'x', 'j', 'v', 's'],
      validator: days => days.length === 7 &&
        days.every(day => typeof day === 'string')
    },
    /** Localized strings to use in the calendar as a month identifiers. */
    months: {
      type: Array,
      default: () => [
        'Gener',
        'Febrer',
        'Març',
        'Abril',
        'Maig',
        'Juny',
        'Juliol',
        'Agost',
        'Setembre',
        'Octubre',
        'Novembre',
        'Desembre'
      ],
      validator: months => months.length === 12 &&
        months.every(month => typeof month === 'string')
    },
    /** The first day of the week for your locale. */
    firstDayOfTheWeek: {
      type: Number,
      default: 1,
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
  data () {
    const today = this.today || new Date()
    return {
      currentView: 'Days',
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear()
    }
  },
  emits: [
    /** Raised when an alteration to the Calendar's selected date is committed by the user. */
    'update:modelValue'
  ],
  methods: {
    handleUpdateSelected (value) {
      if (value.getMonth() === this.currentMonth) {
        this.$emit('update:modelValue', value)
      } else {
        this.currentMonth = value.getMonth()
        this.currentYear = value.getFullYear()
      }
    },
    handleUpdateCurrentMonth (value) {
      this.currentMonth = value
      this.currentView = 'Days'
    },
    handleUpdateCurrentYear (value) {
      this.currentYear = value
      this.currentView = 'Days'
    },
    handleNavigate (value) {
      switch (this.currentView) {
        case 'Days': {
          const newMonth = this.currentMonth + value
          if (newMonth < 0) {
            this.currentMonth = newMonth + 12
            this.currentYear = this.currentYear - 1
          } else if (newMonth > 11) {
            this.currentMonth = newMonth - 12
            this.currentYear = this.currentYear + 1
          } else {
            this.currentMonth = newMonth
          }
          break
        }
        case 'Months':
          this.currentYear = this.currentYear + value
          break
        case 'Years':
          this.currentYear = this.currentYear + (value * 12)
          break
      }
    },
    handleClickGoToday () {
      const today = this.today || new Date()
      this.currentMonth = today.getMonth()
      this.currentYear = today.getFullYear()
    }
  },
  watch: {
    modelValue (value) {
      if (value) {
        this.currentMonth = value.getMonth()
        this.currentYear = value.getFullYear()
      }
    }
  }
}
</script>

<template>
  <UncontrolledCalendar
    v-bind="$props"
    :current-month="currentMonth"
    :current-year="currentYear"
    v-model:currentView="currentView"
    @update:model-value="handleUpdateSelected"
    @update:currentMonth="handleUpdateCurrentMonth"
    @update:currentYear="handleUpdateCurrentYear"
    @navigate="handleNavigate"
    @click-go-today="handleClickGoToday"
  />
</template>
