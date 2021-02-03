<script>
import InputField from '../../part/input-field'
import Icon from '../icon'

export default {
  components: {
    InputField,
    Icon
  },
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
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: 'Search' },
    /** Placeholder for the search box. */
    placeholder: { type: String, default: 'Search' },
    /** Whether or not to animate the SearchBox icon on focus. */
    disableAnimation: { type: Boolean, default: false },
    /** The value of the text in the SearchBox. */
    modelValue: { type: String, default: '' }
  },
  emits: [
    'update:modelValue', 'search', 'escape'
  ],
  methods: {
    handleKeydown (event) {
      const { code } = event
      if (code === 'Escape') {
        event.stopPropagation()
        event.preventDefault()
        this.clear()
        this.$emit('escape')
      } else if (code === 'Enter') {
        event.stopPropagation()
        event.preventDefault()
        this.$emit('search', event.target.value)
      }
    },
    clear () {
      this.$refs.field.value = ''
      this.$emit('update:modelValue', '')
    }
  }
}
</script>

<template>
  <InputField
    class="searchBox"
    :class="{ disabled, underlined }"
    :label="label"
    :description="description"
    :invalid="invalid"
    :error-message="errorMessage"
    :disabled="disabled"
    :required="required"
    :borderless="borderless"
    :underlined="underlined"
    @click-label="$refs.field.focus()"
  >
    <div
      class="icon"
      :class="{ disableAnimation }"
    >
      <Icon :name="icon" />
    </div>

    <input
      type="text"
      class="field"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input.stop="$emit('update:modelValue', $event.target.value)"
      @keydown="handleKeydown"
    >
    <div
      v-if="modelValue && !disabled"
      class="clear"
    >
      <button @click="clear">
        <span>
          <Icon name="Clear" />
        </span>
      </button>
    </div>
  </InputField>
</template>

<style scoped lang="less" src="./search-box.less" />
