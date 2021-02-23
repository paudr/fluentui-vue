<script>
import Control from '../select'
import Checkbox from '../../../component/checkbox'
import ChoiceGroup from '../../../component/choice-group'

const options = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd', disabled: true },
  { text: 'Option e', value: 'e' }
]

const vegetables = [
  { type: 'header', text: 'Fruits' },
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange', disabled: true },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' },
  { type: 'divider' },
  { type: 'header', text: 'Vegetables' },
  { text: 'Broccoli', value: 'broccoli' },
  { text: 'Carrot', value: 'carrot' },
  { text: 'Lettuce', value: 'lettuce' }
]

export default {
  components: { Control, Checkbox, ChoiceGroup },
  data () {
    return {
      options,
      vegetables,
      multiple: false,
      selectedData: 'options',
      textValue: '',
      disabled: false,
      readonly: false,
      markedIndexText: '-1',
      highlightedIndexText: '-1'
    }
  },
  computed: {
    selectedOptions () {
      return this[this.selectedData]
    },
    value: {
      get () {
        const { textValue } = this
        if (this.multiple) {
          return (textValue || '').split(',')
            .filter(value => value)
            .map(value => value.trim())
        } else {
          return textValue
        }
      },
      set (value) {
        if (this.multiple) {
          this.textValue = (value || []).join(', ')
        } else {
          this.textValue = value
        }
      }
    },
    markedIndex () {
      return Number(this.markedIndexText)
    },
    highlightedIndex () {
      return Number(this.highlightedIndexText)
    }
  },
  methods: {
    handleSelect (index) {
      const option = this.options[index]
      if (option && (!option.type || option.type === 'option')) {
        if (this.multiple) {
          if (Array.isArray(this.value)) {
            if (this.value.includes(option.value)) {
              this.value = this.value.filter(value => value !== option.value)
            } else {
              this.value = [...this.value, option.value]
            }
          } else {
            this.value = [option.value]
          }
        } else if (this.value !== option.value) {
          this.value = option.value
        }
      }
    }
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <Control
        class="select"
        :options="selectedOptions"
        :multiple="multiple"
        :disabled="disabled"
        :readonly="readonly"
        :marked-index="markedIndex"
        :highlighted-index="highlightedIndex"
        :value="value"
        @select="handleSelect"
        v-slot="slotProps"
      >
        <template v-if="slotProps.option.value === 'e'">
          <div>
            <button
              :style="{ background: slotProps.selected ? 'blue' : '' }"
              :disabled="slotProps.disabled"
              @click="slotProps.click"
            >
              <span>Option e</span>
            </button>
          </div>
        </template>
      </Control>
    </div>
    <div class="props">
      <div>
        <Checkbox
          label="Multiple"
          v-model="multiple"
        />
      </div>
      <div>
        <ChoiceGroup
          in-row
          label="Options"
          :options="[
            { text: 'Options', value: 'options' },
            { text: 'Vegetables', value: 'vegetables' },
          ]"
          v-model="selectedData"
        />
      </div>
      <div>
        <span class="label">Value: </span>
        <input
          type="text"
          v-model="textValue"
        >
      </div>
      <div>
        <Checkbox
          label="Disabled"
          v-model="disabled"
        />
      </div>
      <div>
        <Checkbox
          label="Readonly"
          v-model="readonly"
        />
      </div>
      <div>
        <span class="label">Marked index: </span>
        <input
          type="number"
          v-model="markedIndexText"
        >
      </div>
      <div>
        <span class="label">Highlighted index: </span>
        <input
          type="number"
          v-model="highlightedIndexText"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./select.less" />
