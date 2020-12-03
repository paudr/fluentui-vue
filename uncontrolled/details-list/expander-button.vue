<script>
import Icon from '../../component/icon'
export default {
  components: { Icon },
  props: {
    /** Current state of the expander button. */
    expanded: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click'
  ]
}
</script>

<template>
  <div
    :class="{ expanded }"
    @click.stop="$emit('click')"
  >
    <Icon
      class="icon"
      name="ChevronRightMed"
    />
  </div>
</template>

<style scoped lang="less" src="./expander-button.less" />
