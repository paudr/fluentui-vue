<script>
import ComboField from '../../part/combo-field'
import Autofill from '../../part/autofill'
import UncontrolledSelect from '../select'
import Icon from '../../component/icon'
import Spinner from '../../component/spinner'

export default {
  components: {
    ComboField,
    UncontrolledSelect,
    Autofill,
    Icon,
    Spinner
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
    /** Collection of options for this combo box. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    value: { type: undefined, default: undefined },
    /** Description text of the selected items. */
    selectedText: { type: String, default: '' },
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
    placeholder: { type: String, default: '' },
    /** Index of the suggested option. */
    suggestedIndex: { type: Number, default: -1 },
    /** Whether the combo box must to render options or loading progress. */
    optionsLoaded: { type: Boolean, default: true },
    /** The text to display while the results are loading. */
    loadingText: { type: String, default: '' }
  },
  emits: [
    /** Raised when an user selects an item of dropdown's Select. */
    'select',
    /** Raised when a key is pressed. */
    'keydown',
    /** Raised when the user clicks on the caret of the ComboBox. */
    'click',
    /** Raised when an alteration to the ComboBox's text field value is committed by the user. */
    'input'
  ],
  computed: {
    suggestedText () {
      const suggestedOption = this.options[this.suggestedIndex]
      return suggestedOption?.text ?? ''
    },
    autofillPlaceholder () {
      const { selectedText, placeholder } = this
      return selectedText || placeholder || ''
    }
  },
  methods: {
    handleCaretClick (event) {
      if (!this.disabled && !this.readonly) {
        this.$emit('click')
      }
    },
    handleAutofillClick (event) {
      if (!this.disabled && !this.readonly && !this.allowFreeform) {
        this.$emit('click')
      }
    }
  },
  watch: {
    suggestedIndex (index) {
      if (this.open && index in this.options) {
        this.$refs.select.scrollToOption(index)
      }
    },
    open (open) {
      if (open) {
        const { select } = this.$refs
        if (this.suggestedIndex in this.options) {
          select.scrollToOption(this.suggestedIndex, true)
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
    class="comboBox"
    :label="label"
    :description="description"
    :invalid="invalid"
    :error-message="errorMessage"
    :disabled="disabled"
    :required="required"
    :borderless="borderless"
    :underlined="underlined"
    :open="open && !disabled && !readonly"
    @click="$refs.autofill.focus()"
  >
    <div class="title">
      <Autofill
        ref="autofill"
        class="autofill"
        :autofill="autoComplete"
        :placeholder="autofillPlaceholder"
        :disabled="disabled"
        :readonly="!allowFreeform"
        :accent-insensitive="accentInsensitive"
        :suggested-value="autoComplete ? suggestedText : ''"
        @click="handleAutofillClick"
        @update:model-value="$emit('input', $event)"
        @keydown="$emit('keydown', $event)"
      />
    </div>
    <button
      class="caret"
      :disabled="disabled"
      @click.stop="handleCaretClick"
    >
      <span>
        <Icon
          class="icon"
          name="ChevronDown"
          @click.stop="handleCaretClick"
        />
      </span>
    </button>
    <template #dropdown>
      <UncontrolledSelect
        v-if="optionsLoaded"
        ref="select"
        class="select"
        :options="options"
        :value="value"
        :multiple="multiple"
        :marked-index="suggestedIndex"
        @select="$emit('select', $event)"
        @keydown="$emit('keydown', $event)"
        v-slot="slotProps"
      >
        <!--
          @slot ComboBox's item.
          @binding {object} option Option reference.
          @binding {number} index Option's index.
          @binding {boolean} multiple Multiple state of the select.
          @binding {boolean} selected Selected state of the option.
          @binding {boolean} marked Marked state of the option.
          @binding {boolean} highlighted Highlighted state of the option.
          @binding {function} click Function to select the option.
        -->
        <slot
          :option="slotProps.option"
          :index="slotProps.index"
          :multiple="slotProps.multiple"
          :selected="slotProps.selected"
          :marked="slotProps.marked"
          :highlighted="slotProps.highlighted"
          :click="slotProps.click"
        />
      </UncontrolledSelect>
      <Spinner
        v-else
        class="spinner"
        :label="loadingText"
      />
    </template>
  </ComboField>
</template>
<style scoped lang="less" src="./combo-box.less" />
