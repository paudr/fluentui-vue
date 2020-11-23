<script>
import ComboField from '../../part/combo-field'
import UncontrolledSelect from '../select'
import Icon from '../../component/icon'

export default {
  components: {
    ComboField,
    UncontrolledSelect,
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
    /** Whether or not the options of the dropdown are rendered. */
    open: { type: Boolean, default: false },
    /** Collection of options for this dropdown. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    modelValue: { type: undefined, default: undefined },
    /** Description text of the selected items. */
    selectedText: { type: String, default: '' },
    /** Placeholder text rendered in the dropdown. */
    placeholder: { type: String, default: null },
    /** If true, the dropdown is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the dropdown allow select more than one option. */
    multiple: { type: Boolean, default: false },
    /** Index of the marked option. */
    markedIndex: { type: Number, default: -1 }
  },
  emits: [
    /** Raised when an alteration to the Dropdown's value is committed by the user. */
    'update:modelValue',
    /** Raised when a key is pressed. */
    'keydown',
    /** Raised when the user clicks on the input element of the Dropdown. */
    'click'
  ],
  watch: {
    markedIndex (index) {
      if (this.open && index in this.options) {
        this.$refs.select.scrollToOption(index)
      }
    },
    open (open) {
      if (open) {
        const { select } = this.$refs
        if (this.markedIndex in this.options) {
          select.scrollToOption(this.markedIndex, true)
        } else if (select.selectedIndices.length > 0) {
          select.scrollToOption(select.selectedIndices[0], true)
        }
      }
    }
  }
}
</script>

<template>
  <ComboField
    class="dropdown"
    v-bind="$props"
    :open="open && !disabled && !readonly"
    @click="$refs.container.focus()"
  >
    <div
      ref="container"
      class="container"
      :tabindex="disabled ? '' : '0'"
      @click.stop="$emit('click')"
      @keydown.stop.prevent="$emit('keydown', $event)"
    >
      <span class="title">{{ selectedText || placeholder }}</span>
      <span class="caret">
        <Icon
          class="icon"
          name="ChevronDown"
          @click="$emit('click')"
        />
      </span>
    </div>
    <template #dropdown>
      <UncontrolledSelect
        ref="select"
        class="select"
        :options="options"
        :model-value="modelValue"
        :multiple="multiple"
        :marked-index="markedIndex"
        @update:model-value="$emit('update:modelValue', $event)"
        @keydown="$emit('keydown', $event)"
      />
    </template>
  </ComboField>
</template>

<style scoped lang="less" src="./dropdown.less" />
