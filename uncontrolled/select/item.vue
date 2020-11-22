<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    /**
     * Type of item.
     * @values option, header, divider
     */
    type: {
      type: String,
      default: 'option',
      validator: type => ['option', 'header', 'divider'].includes(type)
    },
    /** The label to show in the element.  */
    text: { type: String, default: '' },
    /** Whether the field allow select more than one option.  */
    multiple: { type: Boolean, default: false },
    /** Disabled state of the item. */
    disabled: { type: Boolean, default: false },
    /** Selected state of the item. */
    selected: { type: Boolean, default: false },
    /** Marked state of the item. */
    marked: { type: Boolean, default: false },
    /** Highlighted state of the item. */
    highlighted: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the item. */
    'click'
  ],
  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<template>
  <div
    v-if="type === 'header'"
    class="header"
    :class="{ disabled }"
  >
    <span>{{ text }}</span>
  </div>

  <div
    v-else-if="type === 'divider'"
    class="divider"
  />

  <div
    v-else-if="multiple"
    class="option checkbox"
    :class="{
      selected,
      disabled,
      marked: !disabled && marked,
      highlighted: !disabled && highlighted
    }"
    @click.stop="handleClick"
  >
    <label>
      <div>
        <Icon
          class="icon"
          name="CheckMark"
          @click="handleClick"
        />
      </div>
      <span v-text="text" />
    </label>
  </div>

  <button
    v-else
    class="option button"
    :class="{
      selected,
      disabled,
      marked: !disabled && marked,
      highlighted: !disabled && highlighted
    }"
    :disabled="disabled"
    @click.stop="handleClick"
    v-text="text"
  />
</template>

<style scoped lang="less" src="./item.less" />
