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
    /** Placeholder text rendered in the text field. */
    placeholder: { type: String, default: '' },
    /** Prefix displayed before the text field contents. This is not included in the value. */
    prefix: { type: String, default: '' },
    /** Suffix displayed after the text field contents. This is not included in the value. */
    sufix: { type: String, default: '' },
    /** Whether or not the text field is a multiline text field. */
    multiline: { type: Boolean, default: false },
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: '' },
    /** If true, the text field is readonly. */
    readonly: { type: Boolean, default: false },
    /** Maximum length (number of characters) of value. */
    maxlength: { type: Number, default: -1 },
    /** For multiline text fields, whether or not the field is resizable. */
    unresizable: { type: Boolean, default: false },
    /** For multiline text fields, whether or not to auto adjust text field height. */
    autoAdjustHeight: { type: Boolean, default: false },
    /** Current value of the text field. */
    modelValue: { type: String, default: '' }
  },
  emits: [
    /** Raised when the value of TextField has been changed. */
    'update:modelValue',
    /** Raised when the user clicks on the icon of TextField. */
    'click'
  ],
  methods: {
    handleTextareaInput (event) {
      if (this.multiline && this.autoAdjustHeight) {
        const { field } = this.$refs
        if (field && field.tagName === 'TEXTAREA') {
          field.style.height = ''
          field.style.height = `${field.scrollHeight + 2}px` // +2 to avoid vertical scroll bars
        }
      }
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template>
  <InputField
    class="textField"
    :class="{ multiline }"
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
      v-if="prefix"
      class="prefix"
    >
      <span v-text="prefix" />
    </div>

    <textarea
      v-if="multiline"
      ref="field"
      class="field"
      :class="{
        hasIcon: icon,
        unresizable
      }"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input.stop="handleTextareaInput"
    />
    <input
      v-else
      ref="field"
      type="text"
      class="field"
      :class="{ hasIcon: icon }"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input.stop="$emit('update:modelValue', $event.target.value)"
    >

    <Icon
      v-if="icon"
      class="icon"
      :name="icon"
      @click="$emit('click')"
    />

    <div
      v-if="sufix"
      class="sufix"
    >
      <span v-text="sufix" />
    </div>
  </InputField>
</template>

<style scoped lang="less" src="./text-field.less" />
