<script>
import Item from './item'

export default {
  components: { Item },
  props: {
    /** Collection of options for this select. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    modelValue: { type: undefined, default: undefined },
    /** Disabled state of the associated form field. */
    disabled: { type: Boolean, default: false },
    /** If true, the text field is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the field allow select more than one option. */
    multiple: { type: Boolean, default: false },
    /** Index of the marked item. */
    markedIndex: { type: Number, default: -1 },
    /** Index of the highlighted item. */
    highlightedIndex: { type: Number, default: -1 }
  },
  emits: [
    /** Raised when an alteration to the Select field's value is committed by the user. */
    'update:modelValue',
    /** Raised when a key is pressed. */
    'keydown'
  ],
  data () {
    return {
      /** Collection of items elements */
      refItems: []
    }
  },
  computed: {
    selectedIndices () {
      const { multiple, modelValue, options } = this
      const values = multiple ? modelValue : [modelValue]
      const selectedIndices = []
      for (let index = 0; index < options.length; index += 1) {
        const option = options[index]
        if (
          (!option.type || option.type === 'option') &&
          values.includes(option.value)
        ) {
          selectedIndices.push(index)
        }
      }
      return selectedIndices
    }
  },
  methods: {
    isValueSelected (value) {
      const currentValue = this.multiple ? this.modelValue : [this.modelValue]
      return Array.isArray(currentValue) &&
        currentValue.length > 0 &&
        currentValue.includes(value)
    },
    scrollToOption (index, immediate = false) {
      const item = this.refItems[index]
      if (item) {
        const parent = this.$el
        const element = item.$el
        if (immediate) {
          this.$nextTick(() => (parent.scrollTop = element.offsetTop))
        } else {
          const parentBottom = parent.scrollTop
          const parentTop = parentBottom + parent.getBoundingClientRect().height
          const elementBottom = element.offsetTop
          const elementTop = elementBottom + element.getBoundingClientRect().height
          if (parentBottom > elementBottom) {
            element.scrollIntoView({ block: 'start', behavior: 'smooth' })
          } else if (parentTop < elementTop) {
            element.scrollIntoView({ block: 'end', behavior: 'smooth' })
          }
        }
      }
    },
    getNextOptionIndex (index, increment) {
      const currentItem = this.refItems[index]
      const optionItems = this.refItems.filter(item => item.type === 'option' && !item.disabled)
      const currentOptionIndex = optionItems.indexOf(currentItem)
      const nextOptionIndex = currentOptionIndex > -1
        ? (optionItems.length + currentOptionIndex + increment) % optionItems.length
        : increment < 0
          ? optionItems.length - 1
          : 0
      const nextOptionItem = optionItems[nextOptionIndex]
      return this.refItems.indexOf(nextOptionItem)
    },
    selectIndex (index) {
      const option = this.options[index]
      if (option && (!option.type || option.type === 'option')) {
        this.selectValue(option.value)
      }
    },
    selectValue (selectedValue) {
      if (this.multiple) {
        if (Array.isArray(this.modelValue)) {
          if (this.modelValue.includes(selectedValue)) {
            this.$emit('update:modelValue', this.modelValue.filter(value => value !== selectedValue))
          } else {
            this.$emit('update:modelValue', [...this.modelValue, selectedValue])
          }
        } else {
          this.$emit('update:modelValue', [selectedValue])
        }
      } else if (this.modelValue !== selectedValue) {
        this.$emit('update:modelValue', selectedValue)
      }
    },
    handleKeydown (event) {
      if (!this.disabled && !this.readonly) {
        this.$emit('keydown', event)
      }
    },
    handleItemClick (index) {
      if (!this.readonly) {
        this.selectIndex(index)
      }
    }
  },
  beforeUpdate () {
    this.refItems = []
  }
}
</script>

<template>
  <div
    class="select"
    :tabindex="disabled ? '' : '0'"
    @keydown.stop.prevent="handleKeydown"
  >
    <template v-for="(option, index) in options">
      <!--
        @slot Select's item.
        @binding {object} option Option reference.
        @binding {number} index Option's index.
        @binding {string} type Option's type.
        @binding {string} text Option's text.
        @binding {boolean} multiple Multiple state of the select.
        @binding {boolean} disabled Disable state of the option
        @binding {boolean} selected Selected state of the option.
        @binding {boolean} marked Marked state of the option.
        @binding {boolean} highlighted Highlighted state of the option.
        @binding {function} click Function to select the option.
      -->
      <slot
        :option="option"
        :index="index"
        :type="option.type || 'option'"
        :text="option.text"
        :multiple="multiple"
        :disabled="disabled || option.disabled"
        :selected="isValueSelected(option.value)"
        :marked="index === markedIndex"
        :highlighted="index === highlightedIndex"
        :click="() => handleClick(index)"
      >
        <Item
          :ref="el => refItems.push(el)"
          :key="index"
          :type="option.type"
          :text="option.text"
          :multiple="multiple"
          :disabled="disabled || option.disabled"
          :selected="isValueSelected(option.value)"
          :marked="index === markedIndex"
          :highlighted="index === highlightedIndex"
          @click="handleItemClick(index)"
        />
      </slot>
    </template>
  </div>
</template>

<style scoped lang="less" src="./select.less" />
