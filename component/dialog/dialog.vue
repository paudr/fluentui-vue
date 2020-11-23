<script>
import Icon from '../icon'

export default {
  components: { Icon },
  props: {
    /** The type of Dialog to display. */
    type: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'largeHeader', 'close'].includes(value)
    },
    /** The title text to display at the top of the dialog. */
    header: { type: String, default: '' },
    /** The text to display in the dialog. */
    text: { type: String, default: '' }
  },
  emits: [
    /** Raised when the user clicks on the close button. */
    'click'
  ]
}
</script>

<template>
  <div
    class="dialog"
    :class="type"
  >
    <div class="header">
      <div
        class="title"
        v-text="header"
      />
      <div
        v-if="type === 'close'"
        class="topButton"
      >
        <button @click.stop="$emit('click')">
          <Icon
            class="icon"
            name="Cancel"
          />
        </button>
      </div>
    </div>
    <div class="inner">
      <div class="content">
        <p
          v-if="text"
          class="subText"
          v-text="text"
        />
        <!-- @slot Dialog content -->
        <slot />
      </div>
      <!-- @slot Footer content -->
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="less" src="./dialog.less" />
