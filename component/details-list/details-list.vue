<script>
import UncontrolledDetailsList from '../../uncontrolled/details-list'

export default {
  components: { UncontrolledDetailsList },
  props: {
    /** Column defitions. */
    columns: { type: Array, required: true },
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
    collapsible: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks select or unselect any row. */
    'update:selectedIndices',
    /** Raised when the user clicks on a column header. */
    'click-header'
  ],
  data () {
    return {
      collapsedIndices: new Set()
    }
  },
  methods: {
    toggleGroupCollapsed (groupIndex) {
      const { collapsedIndices } = this
      if (collapsedIndices.has(groupIndex)) {
        collapsedIndices.delete(groupIndex)
        const indicesToDelete = this.$refs.detailsList.getChildGroupIndices(groupIndex)
        indicesToDelete.forEach(index => collapsedIndices.delete(index))
      } else {
        collapsedIndices.add(groupIndex)
        const indicesToAdd = this.$refs.detailsList.getChildGroupIndices(groupIndex)
        indicesToAdd.forEach(index => collapsedIndices.add(index))
      }
    },
    toggleAllCollapsed (allCollapsed) {
      if (allCollapsed) {
        this.collapsedIndices = new Set(Array.from(this.groups.keys()))
      } else {
        this.collapsedIndices.clear()
      }
    },
    toggleSelectedRow (dataIndex) {
      if (this.selection === 'multiple') {
        if (this.selectedIndices.includes(dataIndex)) {
          this.$emit('update:selectedIndices', this.selectedIndices.filter(index => index !== dataIndex))
        } else {
          this.$emit('update:selectedIndices', [...this.selectedIndices, dataIndex])
        }
      } else if (this.selection === 'simple') {
        if (this.selectedIndices.includes(dataIndex)) {
          this.$emit('update:selectedIndices', [])
        } else {
          this.$emit('update:selectedIndices', [dataIndex])
        }
      } else if (this.selection === 'safe') {
        if (this.selectedIndices.length === 0) {
          this.$emit('update:selectedIndices', [dataIndex])
        } else if (this.selectedIndices[0] === dataIndex) {
          this.$emit('update:selectedIndices', [])
        }
      }
    },
    toggleSelectedGroup (groupIndex) {
      if (this.selection === 'multiple') {
        const { detailsList } = this.$refs
        const groupIndices = detailsList.getDataGroupIndices(groupIndex)
        if (detailsList.isGroupSelected(groupIndex)) {
          const newIndices = this.selectedIndices.filter(index => !groupIndices.includes(index))
          this.$emit('update:selectedIndices', newIndices)
        } else {
          const newIndices = new Set([...this.selectedIndices, ...groupIndices])
          this.$emit('update:selectedIndices', Array.from(newIndices))
        }
      }
    },
    toggleSelectedAll () {
      if (this.selection === 'multiple') {
        const { detailsList } = this.$refs
        if (detailsList.allSelected) {
          this.$emit('update:selectedIndices', [])
        } else {
          this.$emit('update:selectedIndices', Array.from(this.data.keys()))
        }
      }
    }
  }
}
</script>

<template>
  <UncontrolledDetailsList
    ref="detailsList"
    :columns="columns"
    :data="data"
    :groups="groups"
    :selected-indices="selectedIndices"
    :auto="auto"
    :full-auto="fullAuto"
    :compact="compact"
    :selection="selection"
    :collapsible="collapsible"
    :collapsed-indices="collapsedIndices"
    @click-expand="toggleGroupCollapsed"
    @click-expand-all="toggleAllCollapsed"
    @click-select-row="toggleSelectedRow"
    @click-select-group="toggleSelectedGroup"
    @click-select-all="toggleSelectedAll"
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
  </UncontrolledDetailsList>
</template>
