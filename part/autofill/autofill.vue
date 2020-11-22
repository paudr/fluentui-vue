<script>
import { commonStartLength, startsWith } from '../../utils/text'

export default {
  props: {
    /** Current value of the field. */
    modelValue: { type: String, default: '' },
    /** Placeholder text rendered in the autofield. */
    placeholder: { type: String, default: '' },
    /** If true, the autofield is readonly. */
    readonly: { type: Boolean, default: false },
    /** Disabled state of the autofield. */
    disabled: { type: Boolean, default: false },
    /** Whether the autofill must to autofill value or not. */
    autofill: { type: Boolean, default: false },
    /** Whether the autofield ignore accent when match suggested text. */
    accentInsensitive: { type: Boolean, default: false },
    /** The suggested autofill value that will display. */
    suggestedValue: { type: String, default: '' }
  },
  emits: [
    /** Raised when the value of Autofill has been changed. */
    'update:modelValue',
    /** Raised when a key is pressed. */
    'keydown'
  ],
  methods: {
    focus () {
      this.$refs.field.focus()
    },
    suggest (text, fullSelection = false) {
      const { field } = this.$refs
      const { value, selectionStart, selectionEnd } = field
      const maxselectionStart =
        selectionStart !== selectionEnd &&
        selectionEnd === value.length
          ? selectionStart
          : value.length
      const newSelecionStart = fullSelection
        ? 0
        : commonStartLength(
          value,
          text,
          maxselectionStart,
          this.accentInsensitive
        )
      field.focus()
      field.value = text
      field.setSelectionRange(newSelecionStart, text.length, 'backward')
      this.$emit('update:modelValue', field.value)
    },
    writeSuggestion () {
      const { field } = this.$refs
      const { value } = field
      if (
        document.activeElement === field &&
        this.autofill &&
        value &&
        startsWith(this.suggestedValue, value, this.accentInsensitive)
      ) {
        field.value = this.suggestedValue
        field.setSelectionRange(value.length, field.value.length, 'backward')
        this.$emit('update:modelValue', field.value)
      }
    },
    handleInput (event) {
      const { value } = event.target
      if (this.autofill) {
        this.writeSuggestion()
      }
      this.$emit('update:modelValue', value)
    },
    handleKeydown (event) {
      const { target: field } = event
      const { value, selectionStart, selectionEnd } = field

      if (this.autofill && event.code === 'Backspace') {
        if (value && value.length === selectionEnd) {
          if (selectionStart === 0 || selectionStart === 1) {
            event.preventDefault()
            field.value = ''
            this.$emit('update:modelValue', '')
          } else if (selectionStart !== selectionEnd) {
            event.preventDefault()
            const selectionPrev = selectionStart - 1
            field.setSelectionRange(selectionPrev, selectionEnd, 'backward')
            this.$emit('update:modelValue', value.slice(0, selectionPrev))
          }
        }
      }
      this.$emit('keydown', event)
    }
  },
  watch: {
    suggestedValue () {
      if (this.autofill && this.modelValue !== this.suggestedValue) {
        this.writeSuggestion()
      }
    }
  }
}
</script>

<template>
  <input
    type="text"
    ref="field"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    @input.stop="handleInput"
    @keydown.stop="handleKeydown"
  >
</template>
