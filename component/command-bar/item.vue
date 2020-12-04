<script>
import CommandButton from '../../part/command-button'
import SplitButton from '../../part/split-button'

export const more = Symbol('more')
export const option = Symbol('option')

export default {
  components: { CommandButton, SplitButton },
  props: {
    /**
     * Type of item
     * @values more, option
     */
    type: {
      type: Symbol,
      default: option
    },
    /** Indicates if associated item must to trigger an action. */
    hasAction: { type: Boolean, default: false },
    /** Indicates if associated item has child items. */
    hasChilds: { type: Boolean, default: false },
    /** Text to render item label. */
    text: { type: String, default: '' },
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: '' },
    /** The color for render Icon. */
    iconColor: { type: String, default: '' },
    /** Time in milliseconds that the mouse must be over the item to trigger the mousestop event. */
    mousestopDelay: { type: Number, default: 800 },
    /** Disabled state of the associated item. */
    disabled: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click',
    /** Raised when the user clicks on the expand button. */
    'click-expand',
    /** Raised when the mouse is over the button for a certain amount of time. */
    'mousestop',
    /** Raised when the mouse is over the expand button for a certain amount of time. */
    'mousestop-expand'
  ],
  computed: {
    more () { return more },
    option () { return option }
  }
}
</script>

<template>
  <div class="item">
    <CommandButton
      v-if="type === more"
      class="more"
      icon="More"
      :mousestop-delay="mousestopDelay"
      :disabled="disabled"
      @click="$emit('click-expand')"
      @mousestop="$emit('mousestop-expand')"
    />
    <SplitButton
      v-else-if="hasAction && hasChilds"
      :text="text"
      :icon="icon"
      :icon-color="iconColor"
      :mousestop-delay="mousestopDelay"
      :disabled="disabled"
      expand-icon="ChevronDown"
      @click="$emit('click')"
      @click-expand="$emit('click-expand')"
      @mousestop="$emit('mousestop')"
      @mousestop-expand="$emit('mousestop-expand')"
    />
    <CommandButton
      v-else
      :text="text"
      :icon="icon"
      :icon-color="iconColor"
      :mousestop-delay="mousestopDelay"
      :expand-icon="hasChilds ? 'ChevronDown' : ''"
      :disabled="disabled"
      @click="$emit('click')"
      @click-expand="$emit('click-expand')"
      @mousestop="$emit('mousestop')"
    />
    <slot />
  </div>
</template>

<style scoped lang="less" src="./item.less" />
