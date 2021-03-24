<script>
import Icon from '../icon'

export default {
  components: { Icon },
  props: {
    /** Checked state. Mutually exclusive to "indeterminate". */
    modelValue: { type: Boolean, default: false },
    /** Optional controlled indeterminate visual state for checkbox.
     * Setting indeterminate state takes visual precedence
     * over checked prop given but does not affect checked state.
     * This should not be a toggleable state.
     * On load the checkbox will receive indeterminate visual state
     * and after the first user click it should be removed by your
     * supplied onChange callback function exposing the true state
     * of the checkbox.
     */
    indeterminate: { type: Boolean, default: false },
    /** Label to display next to the checkbox. */
    label: { type: String, default: '' },
    /**
     * Allows you to set the checkbox to be at the before (start) or after (end) the label.
     * @values start, end
     */
    boxSide: {
      type: String,
      default: 'start',
      validator: value => !value || ['start', 'end'].includes(value)
    },
    /** Disabled state of the checkbox. */
    disabled: { type: Boolean, default: false },
    /** If true, the checkbox is readonly. */
    readonly: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when an alteration to the CheckBox's value is committed by the user. */
    'update:modelValue',
    /** Raised when an alteration to the indeterminate CheckBox's value is committed by the user. */
    'update:indeterminate'
  ],
  methods: {
    handleClick () {
      if (!this.disabled && !this.readonly) {
        if (this.indeterminate) {
          this.$emit('update:indeterminate', false)
        }
        this.$emit('update:modelValue', !this.modelValue)
      }
    }
  }
}
</script>

<template>
  <label
    class="checkbox"
    :class="{
      indeterminate,
      checked: !indeterminate && modelValue,
      disabled,
      boxSideEnd: boxSide === 'end'
    }"
    @click.stop="handleClick"
  >
    <div class="box">
      <Icon
        class="icon"
        name="CheckMark"
      />
    </div>
    <span
      v-if="label"
      class="label"
      v-text="label"
    />
  </label>
</template>

<style scoped lang="less" src="./checkbox.less"></style>
