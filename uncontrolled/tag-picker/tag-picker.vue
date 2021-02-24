<script>
import ComboField from '../../part/combo-field'
import Autofill from '../../part/autofill'
import UncontrolledSelect from '../select'
import Spinner from '../../component/spinner'
import Item from './item'

export default {
  components: {
    ComboField,
    Autofill,
    UncontrolledSelect,
    Spinner,
    Item
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
    /** Value or Values of the selected items. */
    modelValue: { type: Array, default: () => [] },
    /** Collection of items for this tag picker. */
    items: { type: Array, default: () => [] },
    /** Index of the suggested item. */
    suggestedIndex: { type: Number, default: -1 },
    /** Placeholder text rendered in the dropdown. */
    placeholder: { type: String, default: null },
    /** If true, the dropdown is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the combo box auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If the combo box is expanded, this will also scroll to the suggested option, and give it a selected style. */
    autoComplete: { type: Boolean, default: false },
    /** Whether the tag picker ignore accent when match texts. */
    accentInsensitive: { type: Boolean, default: false },
    /** The maximum amount of items that can be selected. -1 to disable limit. */
    maxSelectedItems: { type: Number, default: 1 },
    /** Whether the tag picker shows spinner in the dropdown panel. */
    loading: { type: Boolean, default: false },
    /** The text to display while the results are loading. */
    loadingText: { type: String, default: '' }
  },
  computed: {
    suggestedText () {
      const suggestedOption = this.options[this.suggestedIndex]
      return suggestedOption?.text ?? ''
    }
  },
  emits: [
    /** Raised when user removes an item. */
    'remove',
    /** Raised when a key is pressed. */
    'keydown',
    /** Raised when an alteration to the TagPicker's text field value is committed by the user. */
    'input',
    /** Raised when an user selects an item of dropdown's Select. */
    'select'
  ]
}
</script>

<template>
  <ComboField
    class="tagPicker"
    :class="{ disabled }"
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
    <div class="field">
      <span
        v-if="modelValue.length > 0"
        class="itemsWrapper"
      >
        <template v-for="(item, index) in modelValue">
          <!--
            @slot TagPicker's selected item.
            @binding {object} item Item reference.
            @binding {number} index Item's index.
            @binding {function} click Function to unselect the item.
          -->
          <slot
            name="selected"
            :item="item"
            :index="index"
            :click="() => $emit('remove', index)"
          >
            <Item
              :key="index"
              :text="item.text"
              :disabled="disabled"
              @click="$emit('remove', index)"
            />
          </slot>
        </template>
      </span>
      <Autofill
        ref="autofill"
        class="autofill"
        :autofill="autoComplete"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :accent-insensitive="accentInsensitive"
        :suggested-value="autoComplete ? suggestedText : ''"
        @update:model-value="$emit('input', $event)"
        @keydown="$emit('keydown', $event)"
      />
    </div>
    <template #dropdown>
      <div class="dropdownWrapper">
        <UncontrolledSelect
          ref="select"
          class="select"
          :options="items"
          @select="$emit('select', $event)"
          @keydown="$emit('keydown', $event)"
          v-slot="slotProps"
        >
          <!--
            @slot TagPicker's item.
            @binding {object} item Item reference.
            @binding {number} index Item's index.
            @binding {function} click Function to select the item.
          -->
          <slot
            :item="slotProps.option"
            :index="slotProps.index"
            :click="slotProps.click"
          />
        </UncontrolledSelect>
        <Spinner
          v-if="loading"
          class="spinner"
          :label="loadingText"
        />
      </div>
    </template>
  </ComboField>
</template>

<style scoped lang="less" src="./tag-picker.less" />
