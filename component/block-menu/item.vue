<script>
import CommandButton from '../../part/command-button'
import SplitButton from '../../part/split-button'
import Icon from '../icon'

export default {
  components: { CommandButton, SplitButton, Icon },
  props: {
    /**
     * Type of item
     * @values button, divider, title
     */
    type: {
      type: String,
      default: 'button',
      validator: type => ['button', 'divider', 'title'].includes(type)
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
    /** Whether the button must to reserve a space for Icon. */
    iconSpace: { type: Boolean, default: false },
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
  ]
}
</script>

<template>
  <li :class="type">
    <SplitButton
      v-if="type === 'button' && hasAction && hasChilds"
      class="button"
      :text="text"
      :icon="icon"
      :icon-color="iconColor"
      :icon-space="iconSpace"
      :mousestop-delay="mousestopDelay"
      :disabled="disabled"
      expand-icon="ChevronRight"
      @click="$emit('click')"
      @click-expand="$emit('click-expand')"
      @mousestop="$emit('mousestop')"
      @mousestop-expand="$emit('mousestop-expand')"
    />
    <CommandButton
      v-else-if="type === 'button'"
      class="button"
      :text="text"
      :icon="icon"
      :icon-color="iconColor"
      :icon-space="iconSpace"
      :mousestop-delay="mousestopDelay"
      :expand-icon="hasChilds ? 'ChevronRight' : ''"
      :disabled="disabled"
      @click="$emit('click')"
      @click-expand="$emit('click-expand')"
      @mousestop="$emit('mousestop')"
    />
    <div
      v-else-if="type === 'title'"
    >
      <Icon
        class="icon"
        :name="icon"
        :style="{ color: iconColor }"
      />
      <span v-text="text" />
    </div>
    <slot />
  </li>
</template>

<style scoped lang="less" src="./item.less" />
