<script>
import DetailsRow from './details-row'
import DataCell from './data-cell'

export default {
  components: { DetailsRow, DataCell },
  props: {
    /** Column defitions. */
    columns: { type: Array, required: true },
    /** The items to render in DetailsList. */
    data: { type: Array, required: true },
    /** First index of data elements to render. */
    startIndex: { type: Number, required: true },
    /** Number of elements to render. */
    count: { type: Number, required: true },
    /**
     * Controls how/if the details list manages selection.
     * @values multiple, simple, safe
     */
    selection: {
      type: String,
      default: '',
      validator: value => ['', 'multiple', 'simple', 'safe'].includes(value)
    },
    /** Indices of the selected rows. */
    selectedIndices: { type: Array, default: () => [] },
    /** Whether to render in compact mode. */
    compact: { type: Boolean, default: false },
    /** Whether the table groups are collapsible or not. */
    collapsible: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on a row selector. */
    'click-row'
  ],
  computed: {
    currentData () {
      return this.data.slice(this.startIndex, this.startIndex + this.count)
    }
  }
}
</script>

<template>
  <tbody>
    <DetailsRow
      v-for="(row, rowIndex) in currentData"
      :key="startIndex + rowIndex"
      type="data"
      :selection="selection"
      :selected="selectedIndices.includes(startIndex + rowIndex)"
      :compact="compact"
      @click="$emit('click-row', startIndex + rowIndex)"
    >
      <td
        v-if="collapsible"
        class="expanderCell"
      />
      <DataCell
        v-for="(column, colIndex) in columns"
        :key="colIndex"
        :content="row[column.key || colIndex]?.toString()"
        :align="column.align"
        :column="column.key || colIndex"
        :row="startIndex + rowIndex"
        v-slot="slotProps"
      >
        <!--
          @slot Cell's content
          @binding {string,number} column Column's key of the current cell.
          @binding {number} row Row's index of the current cell.
          @binding {string} content Content of the current cell.
        -->
        <slot
          :column="slotProps.column"
          :row="slotProps.row"
          :content="slotProps.content"
        />
      </DataCell>
    </DetailsRow>
  </tbody>
</template>

<style scoped lang="less" src="./details-list.less" />
