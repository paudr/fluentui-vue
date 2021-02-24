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
        return selected?.text ?? ''
      }
    }
  },
  methods: {
    selectOption (index) {
      const option = this.options[index]
      if (option && (!option.type || option.type === 'option')) {
        if (this.multiple) {
          if (Array.isArray(this.modelValue)) {
            const newValue = this.modelValue.includes(option.value)
              ? this.modelValue.filter(value => value !== option.value)
              : [...this.modelValue, option.value]
            this.$emit('update:modelValue', newValue)
          } else {
            this.$emit('update:modelValue', [option.value])
          }
        } else {
          const newValue = this.modelValue !== option.value
            ? option.value
            : null
          this.$emit('update:modelValue', newValue)
        }
      }
    },
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
          this.handleSelect(this.suggestedIndex)
        } else if (this.allowFreeform) {
          const selectedIndex = this.options.findIndex(option =>
            (!option.type || option.type === 'option') &&
            !option.disabled &&
            equalInsensitive(option.text, autofill.$refs.field.value, this.accentInsensitive)
          )
          this.handleSelect(selectedIndex)
        }
      }
    },
    handleClick (event) {
      this.open = !this.open
      if (this.open) {
        this.$refs.comboBox.$refs.autofill.focus()
      }
    },
    handleSelect (index) {
      this.selectOption(index)
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
    :label="label"
    :description="description"
    :invalid="invalid"
    :error-message="errorMessage"
    :disabled="disabled"
    :required="required"
    :borderless="borderless"
    :underlined="underlined"
    :options="options"
    :value="modelValue"
    :readonly="readonly"
    :multiple="multiple"
    :allow-freeform="allowFreeform"
    :auto-complete="autoComplete"
    :accent-insensitive="accentInsensitive"
    :placeholder="placeholder"
    :selected-text="selectedText"
    :open="open && !disabled && !readonly"
    :suggested-index="suggestedIndex"
    @keydown="handleKeydown"
    @click="handleClick"
    @select="handleSelect"
    @input="handleInput"
    v-slot="slotProps"
  >
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
      :option="slotProps.option"
      :index="slotProps.index"
      :type="slotProps.type"
      :text="slotProps.text"
      :multiple="slotProps.multiple"
      :disabled="slotProps.disabled"
      :selected="slotProps.selected"
      :marked="slotProps.marked"
      :highlighted="slotProps.highlighted"
      :click="slotProps.click"
    />
  </UncontrolledComboBox>
</template>
