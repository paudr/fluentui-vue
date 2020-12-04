<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    /** Text to render button label. */
    text: { type: String, default: '' },
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: '' },
    /** The color for render Icon. */
    iconColor: { type: String, default: '' },
    /** Whether the button must to reserve a space for Icon. */
    iconSpace: { type: Boolean, default: false },
    /** The name of the icon to use from the icon font. */
    expandIcon: { type: String, default: '' },
    /** Time in milliseconds that the mouse must be over the button to trigger the mousestop event. */
    mousestopDelay: { type: Number, default: 800 },
    /** Disabled state of the associated button. */
    disabled: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click',
    /** Raised when the user clicks on the expand icon. */
    'click-expand',
    /** Raised when the mouse is over the button for a certain amount of time. */
    'mousestop'
  ],
  methods: {
    handleClick () {
      this.clearMouseHandler()
      if (!this.disabled) {
        this.$emit('click')
      }
    },
    handleExpandClick () {
      this.clearMouseHandler()
      if (!this.disabled) {
        this.$emit('click-expand')
      }
    },
    handleMouseover () {
      this.mouseHandler = setTimeout(() => this.$emit('mousestop'), this.mousestopDelay)
    },
    clearMouseHandler () {
      if (this.mouseHandler) {
        clearTimeout(this.mouseHandler)
        this.mouseHandler = null
      }
    }
  }
}
</script>

<template>
  <button
    :disabled="disabled"
    @click.stop="handleClick"
    @mouseover.stop="handleMouseover"
    @mouseout.stop="clearMouseHandler"
  >
    <span>
      <Icon
        v-if="iconSpace || icon"
        class="icon"
        :style="{ color: iconColor }"
        :name="icon"
        @click="handleClick"
      />
      <span
        v-if="text"
        class="text"
      >
        <span v-text="text" />
      </span>
      <Icon
        v-if="expandIcon"
        class="expand"
        :name="expandIcon"
        @click="handleExpandClick"
      />
    </span>
  </button>
</template>

<style scoped lang="less" src="./command-button.less" />
