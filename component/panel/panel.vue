<script>
import Icon from '../icon'

export default {
  components: { Icon },
  props: {
    /** Type of the panel. */
    type: {
      type: String,
      default: 'custom',
      validator: value => ['custom', 'extraSmall', 'small', 'medium', 'large', 'extraLarge', 'fluid'].includes(value)
    },
    /** Whether the panel renders in the left side or not. */
    left: { type: Boolean, default: false },
    /** Header text for the panel. */
    headerText: { type: String, default: '' },
    /** Has the close button visible. */
    withoutCloseButton: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the close button. */
    'click'
  ]
}
</script>

<template>
  <div
    class="panel"
    :class="[type, { left }]"
  >
    <div
      v-if="!withoutCloseButton"
      class="commands"
    >
      <div class="navigation">
        <div class="header">
          <div v-text="headerText" />
        </div>
        <button @click.stop="$emit('click')">
          <Icon
            class="icon"
            name="Cancel"
          />
        </button>
      </div>
    </div>
    <div class="contentInner">
      <div
        v-if="withoutCloseButton"
        class="header"
      >
        <div v-text="headerText" />
      </div>
      <div class="scrollableContent">
        <div class="content">
          <!-- @slot Panel content -->
          <slot />
        </div>
      </div>
      <div class="footer">
        <div class="footerInner">
          <!-- @slot Footer content -->
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./panel.less" />
