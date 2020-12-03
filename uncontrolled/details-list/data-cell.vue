<script>
export default {
  props: {
    /** Text to render in the cell. */
    content: { type: String, default: '' },
    /** Alignment of the rendered text. */
    align: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].includes(value)
    }
  }
}
</script>

<template>
  <td :class="align">
    <div v-text="content" />
  </td>
</template>

<style scoped lang="less" src="./data-cell.less" />
