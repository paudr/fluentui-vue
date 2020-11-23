<script>
import Layout from './layout'

export default {
  components: { Layout },
  props: {
    /** (Unused) The month shown in the calendar. */
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
    /** (Unused) Localized strings to use in the calendar as a day identifiers. */
    days: {
      type: Array,
      required: true,
      validator: days => days.length === 7 &&
        days.every(day => typeof day === 'string')
    },
    /** (Unused) Localized strings to use in the calendar as a month identifiers. */
    months: {
      type: Array,
      required: true,
      validator: months => months.length === 12 &&
        months.every(month => typeof month === 'string')
    },
    /** (Unused) The first day of the week for your locale. */
    firstDayOfTheWeek: {
      type: Number,
      required: true,
      validator: firstDayOfTheWeek => Number.isInteger(firstDayOfTheWeek) &&
        firstDayOfTheWeek >= 0 &&
        firstDayOfTheWeek <= 6
    },
    /** (Unused) Value of today. If null, current time in client machine will be used. */
    today: {
      type: Date,
      default: null
    },
    /** (Unused) Selected date in the Calendar, if any. */
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
    /** Raised when user selects a year. */
    'update:currentYear',
    /** Raised when the view was change by an user action. */
    'update:currentView',
    /** Raised when user make click in a navigation button. */
    'navigate',
    /** 'Raised when user make click in a go today button. */
    'click-go-today'
  ],
  computed: {
    rows () {
      const { currentYear } = this
      const getRow = year => [year, year + 1, year + 2, year + 3]
      return [
        getRow(currentYear),
        getRow(currentYear + 4),
        getRow(currentYear + 8)
      ]
    },
    currentYearRange () {
      return `${this.currentYear} - ${this.currentYear + 11}`
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
    <div class="grid">
      <div
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
      >
        <button
          v-for="(year, yearIndex) in row"
          :key="yearIndex"
          class="button"
          :class="{ selected: year === currentYear }"
          @click="$emit('update:currentYear', year)"
          v-text="year"
        />
      </div>
    </div>
    <template #title>
      <div
        @click="$emit('update:currentView', 'Days')"
        v-text="currentYearRange"
      />
    </template>
    <template #bottom>
      <slot name="bottom" />
    </template>
  </Layout>
</template>

<style scoped lang="less" src="./grid.less" />
