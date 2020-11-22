<script>
import Label from '../label'

export default {
  components: { Label },
  props: {
    /** Current value of the choice group. */
    modelValue: { type: String, default: null },
    /** Descriptive label for the choice group. */
    label: { type: String, default: '' },
    /** If true, it specifies that an option must be selected in the choice group before submitting the form. */
    required: { type: Boolean, default: false },
    /** Whether the choice group is disabled or not. */
    disabled: { type: Boolean, default: false },
    /** If true, the choice group is readonly. */
    readonly: { type: Boolean, default: false },
    /** The options for the choice group. */
    options: { type: Array, required: true },
    /** Render the choice group in a row instead of a column. */
    inRow: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when an alteration to the ChoiceGroup's value is committed by the user. */
    'update:modelValue'
  ],
  methods: {
    handleClick (option) {
      if (
        !this.disabled &&
        !this.readonly &&
        !option.disabled &&
        option.value !== this.modelValue
      ) {
        this.$emit('update:modelValue', option.value)
      }
    }
  }
}
</script>

<template>
  <div>
    <Label
      v-if="label"
      v-text="label"
      :disabled="disabled"
      :required="required"
    />
    <div
      class="field"
      :class="{ inRow }"
    >
      <div
        v-for="(option, index) in options"
        :key="index"
      >
        <div
          class="option"
          :class="{
            checked: option.value === modelValue,
            disabled: disabled || option.disabled
          }"
          @click.stop="handleClick(option)"
        >
          <label>
            <span v-text="option.text" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./choice-group.less" />
