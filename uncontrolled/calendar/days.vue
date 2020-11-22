<script>
import Layout from './layout'

export default {
  components: { Layout },
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
    /** Value of today. If null, current time in client machine will be used. */
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
    /** Raised when the view was change by an user action. */
    'update:currentView',
    /** Raised when user make click in a navigation button. */
    'navigate',
    /** 'Raised when user make click in a go today button. */
    'click-go-today'
  ],
  computed: {
    sortedDays () {
      const { days, firstDayOfTheWeek } = this
      return [
        ...days.slice(firstDayOfTheWeek),
        ...days.slice(0, firstDayOfTheWeek)
      ]
    },
    currentWeeks () {
      const { currentMonth, currentYear, firstDayOfTheWeek } = this
      const currentDate = new Date(currentYear, currentMonth, 1)

      while (currentDate.getDay() !== firstDayOfTheWeek) {
        currentDate.setDate(currentDate.getDate() - 1)
      }

      const weeks = []

      while (true) {
        const week = []
        let someDayInCurrentMonth = false

        for (let day = 0; day < 7; day += 1) {
          someDayInCurrentMonth |= currentDate.getMonth() === currentMonth
          week.push(new Date(currentDate.getTime()))
          currentDate.setDate(currentDate.getDate() + 1)
        }

        if (someDayInCurrentMonth) {
          weeks.push(week)
        } else {
          break
        }
      }

      return weeks
    },
    currentMonthName () {
      return this.months[this.currentMonth]
    }
  },
  methods: {
    areSameDay (date1, date2) {
      return (
        date1 &&
        date2 &&
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      )
    }
  }
}
</script>

<template>
  <Layout
    :go-today="goToday"
    @navigate="$emit('navigate', $event)"
    @click-go-today="$emit('click-go-today')"
  >
    <table class="days">
      <thead class="weekday">
        <tr>
          <th
            v-for="(day, index) in sortedDays"
            :key="index"
            v-text="day"
          />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(week, weekIndex) in currentWeeks"
          :key="weekIndex"
        >
          <td
            v-for="(day, dayIndex) in week"
            :key="dayIndex"
            class="day"
            :class="{
              today: areSameDay(day, today),
              otherMonth: day.getMonth() !== currentMonth,
              selected: areSameDay(day, modelValue)
            }"
          >
            <button @click="$emit('update:modelValue', day)">
              <span v-text="day.getDate()" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <template #title>
      <div>
        <span
          @click="$emit('update:currentView', 'Months')"
          v-text="currentMonthName"
        />
        <span>&nbsp;</span>
        <span
          @click="$emit('update:currentView', 'Years')"
          v-text="currentYear"
        />
      </div>
    </template>
    <template #bottom>
      <slot name="bottom" />
    </template>
  </Layout>
</template>

<style scoped lang="less" src="./days.less" />
