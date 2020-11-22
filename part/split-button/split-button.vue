<script>
import CommandButton from '../command-button'

export default {
  components: { CommandButton },
  props: {
    /** Text to render button label. */
    text: { type: String, default: '' },
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: '' },
    /** The color for render Icon. */
    iconColor: { type: String, default: '' },
    /** Whether the button must to reserve a space for Icon. */
    iconSpace: { type: Boolean, default: false },
    /** The name of the expand icon to use from the icon font. */
    expandIcon: { type: String, default: '' },
    /** Time in milliseconds that the mouse must be over the button to trigger the mousestop event. */
    mousestopDelay: { type: Number, default: 800 }
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
  <div class="splitButton">
    <span>
      <CommandButton
        class="action"
        :text="text"
        :icon="icon"
        :icon-space="iconSpace"
        :icon-color="iconColor"
        :mousestop-delay="mousestopDelay"
        @click="$emit('click')"
        @mousestop="$emit('mousestop')"
      />
      <CommandButton
        class="expand"
        :expand-icon="expandIcon"
        :mousestop-delay="mousestopDelay"
        @click="$emit('click-expand')"
        @click-expand="$emit('click-expand')"
        @mousestop="$emit('mousestop-expand')"
      />
      <span class="divisor" />
    </span>
  </div>
</template>

<style scoped lang="less" src="./split-button.less" />
