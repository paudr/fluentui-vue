<script>
import Control from '../calendar'
import ChoiceGroup from '../../../component/choice-group'

const daysData = ['d', 'l', 'm', 'x', 'j', 'v', 's']

const monthsData = [
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
]

const padZero = (num, length = 2) => num.toString().padStart(length, '0')

export default {
  components: { Control, ChoiceGroup },
  data () {
    const today = new Date()
    return {
      daysData,
      monthsData,
      currentView: 'Days',
      firstDayOfTheWeek: 1,
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear(),
      todayText: '',
      selectedText: '',
      goToday: ''
    }
  },
  computed: {
    firstDayOfTheWeekText: {
      get () {
        return String(this.firstDayOfTheWeek)
      },
      set (value) {
        this.firstDayOfTheWeek = Number(value)
      }
    },
    currentMonthText: {
      get () {
        return String(this.currentMonth)
      },
      set (value) {
        this.currentMonth = Number(value)
      }
    },
    currentYearText: {
      get () {
        return String(this.currentYear)
      },
      set (value) {
        this.currentYear = Number(value)
      }
    },
    today () {
      const match = this.todayText.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)
      return match
        ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
        : null
    },
    selected: {
      get () {
        const match = this.selectedText.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)
        return match
          ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
          : null
      },
      set (value) {
        if (value) {
          const day = padZero(value.getDate())
          const month = padZero(value.getMonth() + 1)
          const year = padZero(value.getFullYear(), 4)
          this.selectedText = `${year}-${month}-${day}`
        } else {
          this.selectedText = ''
        }
      }
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <Control
        :days="daysData"
        :months="monthsData"
        :first-day-of-the-week="firstDayOfTheWeek"
        :current-view="currentView"
        :current-month="currentMonth"
        :current-year="currentYear"
        :today="today"
        :go-today="goToday"
        v-model="selected"
      />
    </div>
    <div class="props">
      <div>
        <ChoiceGroup
          in-row
          label="Current View"
          :options="[
            { text: 'Days', value: 'Days' },
            { text: 'Months', value: 'Months' },
            { text: 'Years', value: 'Years' }
          ]"
          v-model="currentView"
        />
      </div>
      <div>
        <span class="label">First day of the week:</span>
        <input
          type="number"
          v-model="firstDayOfTheWeekText"
        >
      </div>
      <div>
        <span class="label">Current month:</span>
        <input
          type="number"
          v-model="currentMonthText"
        >
      </div>
      <div>
        <span class="label">Current year:</span>
        <input
          type="number"
          v-model="currentYearText"
        >
      </div>
      <div>
        <span class="label">Today:</span>
        <input
          type="date"
          v-model="todayText"
        >
      </div>
      <div>
        <span class="label">Selected:</span>
        <input
          type="date"
          v-model="selectedText"
        >
      </div>
      <div>
        <span class="label">Go today:</span>
        <input
          type="text"
          v-model="goToday"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./calendar.less" />
