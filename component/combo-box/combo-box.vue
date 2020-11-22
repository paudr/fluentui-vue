<script>
import UncontrolledComboBox from '../../uncontrolled/combo-box'
import { startsWith, equalInsensitive } from '../../utils/text'

export default {
  components: { UncontrolledComboBox },
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
    /** Collection of options for this combo box. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    modelValue: { type: undefined, default: undefined },
    /** If true, the combo box is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the combo box allow select more than one option. */
    multiple: { type: Boolean, default: false },
    /** Whether the combo box is free form, meaning that the user input is not bound to provided options. */
    allowFreeform: { type: Boolean, default: false },
    /** Whether the combo box auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If the combo box is expanded, this will also scroll to the suggested option, and give it a selected style. */
    autoComplete: { type: Boolean, default: false },
    /** Whether the combo box ignore accent when match texts. */
    accentInsensitive: { type: Boolean, default: false },
    /** Placeholder text rendered in the combo box. */
    placeholder: { type: String, default: '' }
  },
  emits: [
    /** Raised when an alteration to the ComboBox's value is committed by the user. */
    'update:modelValue'
  ],
  data () {
    return {
      open: false,
      suggestedIndex: -1
    }
  },
  computed: {
    selectedText () {
      const { multiple, modelValue, options } = this
      if (multiple) {
        return Array.isArray(modelValue)
          ? modelValue.map(selectedValue => options.find(option => option.value === selectedValue))
              .filter(selected => selected)
              .map(selected => selected.text)
              .join(', ')
          : ''
      } else {
        const selected = options.find(option => option.value === modelValue)
        return selected
          ? selected.text
          : ''
      }
    }
  },
  methods: {
    handleKeydown (event) {
      const { select, autofill } = this.$refs.comboBox.$refs
      const { code } = event
      if (code === 'ArrowDown' || code === 'ArrowUp') {
        event.preventDefault()
        const indexIncrement = code === 'ArrowDown' ? 1 : -1
        this.suggestedIndex = select.getNextOptionIndex(this.suggestedIndex, indexIncrement)
        select.scrollToOption(this.suggestedIndex)
        if (this.allowFreeform) {
          this.$nextTick(() => autofill.suggest(this.options[this.suggestedIndex].text, !this.autoComplete))
        } else {
          autofill.$refs.field.value = this.options[this.suggestedIndex].text
        }
      } else if (code === 'Enter') {
        if (!this.allowFreeform || this.autoComplete) {
          select.selectIndex(this.suggestedIndex)
        } else if (this.allowFreeform) {
          const selectedIndex = this.options.findIndex(option =>
            (!option.type || option.type === 'option') &&
            !option.disabled &&
            equalInsensitive(option.text, autofill.$refs.field.value, this.accentInsensitive)
          )
          select.selectIndex(selectedIndex)
        }
      }
    },
    handleClick (event) {
      this.open = !this.open
      if (this.open) {
        this.$refs.comboBox.$refs.autofill.focus()
      }
    },
    handleUpdateValue (event) {
      this.$emit('update:modelValue', event)
      if (!this.multiple) {
        this.open = false
        this.suggestedIndex = -1
      }
      if (this.allowFreeform) {
        this.$refs.comboBox.$refs.autofill.$refs.field.value = ''
      }
    },
    handleInput (value) {
      if (value) {
        this.open = true
      }
      if (this.autoComplete) {
        this.suggestedIndex = this.options.findIndex(option =>
          (!option.type || option.type === 'option') &&
          !option.disabled &&
          startsWith(option.text, value, this.accentInsensitive)
        )
      }
    }
  }
}
</script>
<template>
  <UncontrolledComboBox
    ref="comboBox"
    v-bind="$props"
    :selected-text="selectedText"
    :open="open && !disabled && !readonly"
    :suggested-index="suggestedIndex"
    @keydown="handleKeydown"
    @click="handleClick"
    @update:model-value="handleUpdateValue"
    @input="handleInput"
  />
</template>
