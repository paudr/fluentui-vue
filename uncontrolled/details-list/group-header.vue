<script>
import DetailsRow from './details-row'
import ExpanderButton from './expander-button'

export default {
  components: { DetailsRow, ExpanderButton },
  props: {
    /** Number of cisible columns. */
    columnCount: { type: Number, required: true },
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
    /** Selection state. */
    selected: { type: Boolean, default: false },
    /** Whether the table groups are collapsible or not. */
    collapsible: { type: Boolean, default: false },
    /** Text rendered at the beginning of the data group. */
    name: { type: String, default: '' },
    /** Number indicating the level of nested groups. */
    level: { type: Number, default: 0 },
    /** If all the items in the group are collapsed. */
    collapsed: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the expander. */
    'click-expander',
    /** Raised when the user clicks on the row. */
    'click-row'
  ],
  computed: {
    dataGroups () {
      const { data, groups } = this
      if (groups && groups.length > 0) {
        return groups.map(group => ({
          group,
          data: data.slice(group.startIndex, group.startIndex + group.count)
        }))
      } else {
        return [{ data }]
      }
    }
  }
}
</script>

<template>
  <thead>
    <DetailsRow
      type="group"
      :selection="selection"
      :compact="compact"
      :selected="selected"
      :checkbox="selection === 'multiple'"
      :checkbox-space="!!selection"
      selected-always-visible
      @click="$emit('click-row')"
    >
      <th
        v-if="collapsible"
        class="expanderCell"
      >
        <ExpanderButton
          :expanded="!collapsed"
          @click="$emit('click-expander')"
        />
      </th>
      <th
        :colspan="columnCount"
        :style="{ paddingLeft: `${level * 36}px`}"
      >
        <div
          class="title"
          :class="{ collapsed }"
          v-text="name"
        />
      </th>
    </DetailsRow>
  </thead>
</template>

<style scoped lang="less" src="./group-header.less" />
