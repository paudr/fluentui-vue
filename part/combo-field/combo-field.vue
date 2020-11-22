<script>
import Label from '../../component/label'

export default {
  components: { Label },
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
    /** Whether or not the panel of the associated form field is rendered. */
    open: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the label of element. */
    'click'
  ]
}
</script>

<template>
  <div
    class="comboField"
    :class="{
      required,
      disabled,
      underlined,
      borderless,
      open,
      requiredPlaceholder: !label && required,
      invalid: invalid || errorMessage
    }"
  >
    <div class="elementWrapper">
      <Label
        v-if="label"
        class="label"
        :required="required"
        :disabled="disabled"
        @click="$emit('click')"
        v-text="label"
      />
      <div class="fieldWrapper">
        <div class="fieldGroup">
          <!-- @slot Field element -->
          <slot />
        </div>
        <div class="dropdownPanel">
          <!-- @slot Dropdown element -->
          <slot name="dropdown" />
        </div>
      </div>
    </div>
    <span v-if="description || errorMessage">
      <span
        v-if="description"
        class="description"
        v-text="description"
      />
      <p
        v-if="errorMessage"
        class="errorMessage slideDownIn20"
      >
        <span v-text="errorMessage" />
      </p>
    </span>
  </div>
</template>

<style scoped lang="less" src="./combo-field.less" />
