<script>
import UncontrolledSelect from '../../uncontrolled/select'

export default {
  components: { UncontrolledSelect },
  props: {
    /** Collection of options for this select. */
    options: { type: Array, required: true },
    /** Value or Values of the selected items. */
    modelValue: { type: undefined, default: undefined },
    /** Disabled state of the associated form field. */
    disabled: { type: Boolean, default: false },
    /** If true, the text field is readonly. */
    readonly: { type: Boolean, default: false },
    /** Whether the field allow select more than one option. */
    multiple: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when an alteration to the Select field's value is committed by the user. */
    'update:modelValue'
  ],
  data () {
    return { markedIndex: -1 }
  },
  methods: {
    handleKeydown ({ code }) {
      const { select } = this.$refs
      if (code === 'ArrowDown') {
        this.markedIndex = select.getNextOptionIndex(this.markedIndex, 1)
        select.scrollToOption(this.markedIndex)
      } else if (code === 'ArrowUp') {
        this.markedIndex = select.getNextOptionIndex(this.markedIndex, -1)
        select.scrollToOption(this.markedIndex)
      } else if (code === 'Space' || code === 'Enter') {
        select.selectIndex(this.markedIndex)
        this.markedIndex = null
      }
    }
  }
}
</script>

<template>
  <UncontrolledSelect
    ref="select"
    :options="options"
    :model-value="modelValue"
    :disabled="disabled"
    :readonly="readonly"
    :multiple="multiple"
    :marked-index="markedIndex"
    @keydown="handleKeydown"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-slot="slotProps"
  >
    <!--
      @slot Select's item.
      @binding {object} option Option reference.
      @binding {number} index Option's index.
      @binding {boolean} selected Selected state of the option.
      @binding {boolean} marked Marked state of the option.
      @binding {boolean} highlighted Highlighted state of the option.
      @binding {function} click Functio to select the option.
    -->
    <slot
      :option="slotProps.option"
      :index="slotProps.index"
      :selected="slotProps.selected"
      :marked="slotProps.marked"
      :highlighted="slotProps.highlighted"
      :click="slotProps.click"
    />
  </UncontrolledSelect>
</template>
