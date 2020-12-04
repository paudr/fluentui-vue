<script>
import Control from '../date-picker'
import Checkbox from '../../checkbox'

export default {
  components: { Control, Checkbox },
  data () {
    return {
      textValue: '',
      textToday: '',
      goToday: '',
      notWritable: false
    }
  },
  computed: {
    value: {
      get () {
        const match = this.textValue.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)
        return match
          ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
          : null
      },
      set (value) {
        const padZero = (num, length = 2) => num.toString().padStart(length, '0')
        const day = padZero(value.getDate())
        const month = padZero(value.getMonth() + 1)
        const year = padZero(value.getFullYear(), 4)
        this.textValue = `${year}-${month}-${day}`
      }
    },
    today () {
      const match = this.textToday.match(/(\d{4})-(\d{1,2})-(\d{1,2})/)
      return match
        ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
        : null
    }
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <Control
        label="DatePicker"
        :today="today"
        :go-today="goToday"
        :not-writable="notWritable"
        v-model="value"
      />
    </div>
    <div class="props">
      <div>
        <Checkbox
          label="Not writable"
          v-model="notWritable"
        />
      </div>

      <div>
        <span class="label">Value: </span>
        <input
          type="date"
          v-model="textValue"
        >
      </div>
      <div>
        <span class="label">Today: </span>
        <input
          type="date"
          v-model="textToday"
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

<style scoped lang="less" src="./date-picker.less" />
