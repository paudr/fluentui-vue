<script>
import UncontrolledDropdown from '../../uncontrolled/dropdown'
import { equalInsensitive } from '../../utils/text'

export default {
  components: { UncontrolledDropdown },
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
    /** Collection of options for this dropdown. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    modelValue: { type: undefined, default: undefined },
    /** Placeholder text rendered in the dropdown. */
    placeholder: { type: String, default: null },
    /** If true, the dropdown is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the dropdown allow select more than one option. */
    multiple: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the input element of the Dropdown. */
    'update:modelValue'
  ],
  data () {
    return {
      open: false,
      markedIndex: -1
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
    handleKeydown ({ code, key }) {
      if (this.open) {
        const { select } = this.$refs.dropdown.$refs
        if (code === 'ArrowDown') {
          this.markedIndex = select.getNextOptionIndex(this.markedIndex, 1)
          select.scrollToOption(this.markedIndex)
        } else if (code === 'ArrowUp') {
          this.markedIndex = select.getNextOptionIndex(this.markedIndex, -1)
          select.scrollToOption(this.markedIndex)
        } else if (code === 'Space' || code === 'Enter') {
          select.selectIndex(this.markedIndex)
        } else if (code.startsWith('Key')) {
          const index = select.options.findIndex(option =>
            option.text && equalInsensitive(option.text[0], key, true)
          )
          if (index >= 0) {
            this.markedIndex = index
            select.scrollToOption(this.markedIndex)
          }
        } else if (code === 'Escape' || code === 'Backspace') {
          this.open = false
        }
      } else {
        this.open = true
      }
    },
    handleClick () {
      if (!this.disabled && !this.readonly) {
        this.open = !this.open
      }
    },
    handleUpdateValue (value) {
      this.$emit('update:modelValue', value)
      this.markedIndex = -1
      if (!this.multiple) {
        this.open = false
      }
    }
  }
}
</script>

<template>
  <UncontrolledDropdown
    ref="dropdown"
    :label="label"
    :description="description"
    :invalid="invalid"
    :error-message="errorMessage"
    :disabled="disabled"
    :required="required"
    :borderless="borderless"
    :underlined="underlined"
    :open="open && !disabled && !readonly"
    :options="options"
    :model-value="modelValue"
    :selected-text="selectedText"
    :placeholder="placeholder"
    :readonly="readonly"
    :multiple="multiple"
    :marked-index="markedIndex"
    @keydown="handleKeydown"
    @click="handleClick"
    @update:modelValue="handleUpdateValue"
  />
</template>
