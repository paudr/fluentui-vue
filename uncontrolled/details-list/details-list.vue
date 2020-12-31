<script>
import DetailsRow from './details-row'
import HeaderCell from './header-cell'
import GroupHeader from './group-header'
import DataList from './data-list'
import ExpanderButton from './expander-button'

export default {
  components: { DetailsRow, HeaderCell, GroupHeader, DataList, ExpanderButton },
  props: {
    /** Column defitions. */
    columns: {
      type: Array,
      required: true,
      validator: columns => Array.isArray(columns) &&
        columns.every(column =>
          typeof (column.title || '') === 'string' &&
          typeof (column.key || '') === 'string' &&
          typeof (column.align || '') === 'string' &&
          typeof (column.width || '') === 'string' &&
          typeof (column.icon || '') === 'string'
        )
    },
    /** The items to render. */
    data: { type: Array, required: true },
    /** Grouping instructions. */
    groups: {
      type: Array,
      default: () => [],
      validator: groups => Array.isArray(groups) &&
        groups.every(group =>
          Number.isInteger(group.startIndex) &&
          Number.isInteger(group.count) &&
          Number.isInteger(group.level || 0) &&
          typeof group.name === 'string')
    },
    /** Indices of the selected rows. */
    selectedIndices: { type: Array, default: () => [] },
    /** Whether the column width algorithm is set to auto or static. */
    auto: { type: Boolean, default: false },
    /** Whether the table width algorithm is set to auto or full. */
    fullAuto: { type: Boolean, default: false },
    /** Whether to render in compact mode. */
    compact: { type: Boolean, default: false },
    /**
     * Controls how/if the details list manages selection.
     * @values multiple, simple, safe
     */
    selection: {
      type: String,
      default: '',
      validator: value => ['', 'multiple', 'simple', 'safe'].includes(value)
    },
    /** Whether the table groups are collapsible or not. */
    collapsible: { type: Boolean, default: false },
    /** Indices of the collapsed groups. */
    collapsedIndices: { type: Set, default: () => new Set() }
  },
  emits: [
    /** Raised when the user clicks on a data row. */
    'click-select-row',
    /** Raised when the user clicks on a group row. */
    'click-select-group',
    /** Raised when the user clicks on the header row. */
    'click-select-all',
    /** Raised when the user clicks on a group expander. */
    'click-expand',
    /** Raised when the user clicks on the header expander. */
    'click-expand-all',
    /** Raised when the user clicks on a column header. */
    'click-header'
  ],
  computed: {
    columnCount () {
      return this.columns.length
    },
    allCollapsed () {
      const { collapsible, groups, collapsedIndices } = this
      const groupIndices = Array.from(groups.keys())
      return collapsible && groupIndices.every(index => collapsedIndices.has(index))
    },
    allSelected () {
      const { data, selectedIndices } = this
      const allIndices = Array.from(data.keys())
      return allIndices.every(index => selectedIndices.includes(index))
    }
  },
  methods: {
    getChildGroupIndices (groupIndex) {
      const { groups } = this
      const indices = []
      const level = groups[groupIndex].level || 0
      let index = groupIndex + 1
      while (groups[index] && groups[index].level > level) {
        indices.push(index)
        index += 1
      }
      return indices
    },
    getDataGroupIndices (groupIndex) {
      const getIndicesRange = (startIndex, count) => Array.from(Array(count).keys()).map(key => startIndex + key)
      const groupIndices = [groupIndex, ...this.getChildGroupIndices(groupIndex)]
      return groupIndices
        .map(groupIndex => this.groups[groupIndex])
        .flatMap(group => getIndicesRange(group.startIndex, group.count))
    },
    isGroupSelected (groupIndex) {
      const dataIndices = this.getDataGroupIndices(groupIndex)
      return dataIndices.length > 0 &&
        dataIndices.every(index => this.selectedIndices.includes(index))
    }
  }
}
</script>

<template>
  <table :class="{ auto, fullAuto }">
    <thead class="header">
      <DetailsRow
        type="header"
        :selection="selection"
        :compact="compact"
        :selected="allSelected"

        :checkbox="selection === 'multiple'"
        :checkbox-space="!!selection"
        selected-always-visible
        @click="$emit('click-select-all')"
      >
        <th
          v-if="collapsible"
          class="expanderCell"
        >
          <ExpanderButton
            :expanded="!allCollapsed"
            @click="$emit('click-expand-all', !allCollapsed)"
          />
        </th>
        <HeaderCell
          v-for="(column, index) in columns"
          :key="index"
          :title="column.title"
          :align="column.align"
          :width="column.width"
          :icon="column.icon"
          @click="$emit('click-header', index)"
        />
      </DetailsRow>
    </thead>
    <template v-if="groups && groups.length > 0">
      <template
        v-for="(group, index) in groups"
        :key="index"
      >
        <GroupHeader
          :column-count="columnCount"
          :selection="selection"
          :compact="compact"
          :collapsible="collapsible"
          :name="group.name"
          :level="group.level || 0"
          :selected="isGroupSelected(index)"
          :collapsed="collapsedIndices.has(index)"
          @click-expander="$emit('click-expand', index)"
          @click-row="$emit('click-select-group', index)"
        />
        <DataList
          v-if="!collapsedIndices.has(index)"
          :columns="columns"
          :data="data"
          :start-index="group.startIndex"
          :count="group.count"
          :selection="selection"
          :selected-indices="selectedIndices"
          :compact="compact"
          :collapsible="collapsible"
          @click-row="$emit('click-select-row', $event)"
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
        </DataList>
      </template>
    </template>
    <DataList
      v-else
      :columns="columns"
      :data="data"
      :start-index="0"
      :count="data.length"
      :selection="selection"
      :selected-indices="selectedIndices"
      :compact="compact"
      :collapsible="collapsible"
      @click-row="$emit('click-select-row', $event)"
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
    </DataList>
  </table>
</template>

<style scoped lang="less" src="./details-list.less" />
