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
    },
    column: { type: [String, Number], required: true },
    row: { type: Number, required: true }
  }
}
</script>

<template>
  <td :class="align">
    <!--
      @slot Cell's content
      @binding {string,number} column Column's key of the current cell.
      @binding {number} row Row's index of the current cell.
      @binding {string} content Content of the current cell.
    -->
    <slot
      :column="column"
      :row="row"
      :content="content"
    >
      <div v-text="content" />
    </slot>
  </td>
</template>

<style scoped lang="less" src="./data-cell.less" />
