<script>
import ComboField from '../../part/combo-field'
import Icon from '../icon'
import Calendar from '../calendar'

export default {
  components: { ComboField, Icon, Calendar },
  props: {
    /** Label displayed above the associated form field. */
    label: { type: String, default: '' },
    /** Description displayed below the associated form field to provide additional details about what value to enter. */
    description: { type: String, default: '' },
    /** Render field border with error color. */
    invalid: { type: Boolean, default: false },
    /** Static error message displayed below the associated form field. */
    errorMessage: { type: String, default: '' },
    /** Disabled state of the associated form field. */
    disabled: { type: Boolean, default: false },
    /** Whether the associated form field is required or not. */
    required: { type: Boolean, default: false },
    /** Whether or not the associated form field is borderless. */
    borderless: { type: Boolean, default: false },
    /** Whether or not the associated form field is underlined. */
    underlined: { type: Boolean, default: false },
    /** If true, the text field is readonly. */
    readonly: { type: Boolean, default: false },
    /** Placeholder text for the date picker. */
    placeholder: { type: String, default: '' },
    /** Whether or not the date picker allow keyboard input or not. */
    notWritable: { type: Boolean, default: false },
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
    /** The text in the "Go to today" link shown in the calendar. */
    goToday: {
      type: String,
      default: ''
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
    /** Current value of the date picker. */
    modelValue: {
      type: Date,
      default: null
    },
    /** Function for convert string value to date value. */
    parse: {
      type: Function,
      default: text => {
        const [, day, month, year] =
        text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) || []
        return day && month && year
          ? new Date(Number(year), Number(month) - 1, Number(day))
          : null
      }
    },
    /** Function for convert date value to string value. */
    stringify: {
      type: Function,
      default: date => {
        const padZero = (num, length = 2) => num.toString().padStart(length, '0')
        const day = padZero(date.getDate())
        const month = padZero(date.getMonth() + 1)
        const year = padZero(date.getFullYear(), 4)
        return `${day}/${month}/${year}`
      }
    }
  },
  emits: [
    /** Raised when an alteration to the DatePicker's value is committed by the user. */
    'update:modelValue'
  ],
  data () {
    return {
      open: false,
      fieldValue: this.modelValue ? this.stringify(this.modelValue) : ''
    }
  },
  methods: {
    handleTextChange (event) {
      const date = this.parse(event.target.value)
      if (date) {
        if (date !== this.modelValue) {
          this.$emit('update:modelValue', date)
        }
      } else if (event.target.value === '' && this.modelValue) {
        this.$emit('update:modelValue', null)
      }
    },
    handleTextClick () {
      if (this.notWritable && !this.disabled) {
        this.open = !this.open
      }
    },
    handleIconClick () {
      if (!this.disabled && !this.readonly) {
        this.open = !this.open
      }
    },
    handleCalendarUpdateModelValue (value) {
      this.$emit('update:modelValue', value)
      this.open = false
    }
  },
  watch: {
    modelValue (value) {
      this.fieldValue = this.stringify(value)
    }
  }
}
</script>

<template>
  <ComboField
    v-bind="$props"
    class="datePicker"
    :class="{ notWritable }"
    :open="open && !disabled && !readonly"
    @click="$refs.field.focus()"
  >
    <input
      ref="field"
      type="text"
      class="field"
      :value="fieldValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="notWritable || readonly"
      @change.stop="handleTextChange"
      @click.stop="handleTextClick"
    >
    <Icon
      class="icon"
      name="Calendar"
      @click="handleIconClick"
    />

    <template #dropdown>
      <Calendar
        class="calendar"
        :days="days"
        :months="months"
        :first-day-of-the-week="firstDayOfTheWeek"
        :today="today"
        :model-value="modelValue"
        :go-today="goToday"
        @update:model-value="handleCalendarUpdateModelValue"
      />
    </template>
  </ComboField>
</template>

<style scoped lang="less" src="./date-picker.less" />
