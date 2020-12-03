<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    /** Text to render in the cell. */
    title: { type: String, default: '' },
    /** Alignment of the rendered text. */
    align: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].includes(value)
    },
    /** Width of the column. */
    width: { type: String, default: '' },
    /** Icon rendered in the cell. */
    icon: { type: String, default: '' }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click'
  ]
}
</script>

<template>
  <th
    :style="{ width }"
    :class="align"
    @click.stop="$emit('click')"
  >
    <div>
      <span v-text="title" />
      <Icon
        v-if="icon"
        class="icon"
        :name="icon"
      />
    </div>
  </th>
</template>

<style scoped lang="less" src="./header-cell.less" />
