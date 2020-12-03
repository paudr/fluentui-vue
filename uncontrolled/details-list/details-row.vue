<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    /**
     * Type of table row
     * @values header, group, data
     */
    type: {
      type: String,
      required: true,
      validator: value => ['header', 'group', 'data'].includes(value)
    },
    /**
     * Controls how/if the details list manages selection.
     * @values multiple, simple, safe
     */
    selection: {
      type: String,
      default: '',
      validator: value => ['', 'multiple', 'simple', 'safe'].includes(value)
    },
    /** Row's checked state */
    selected: { type: Boolean, default: false },
    /** Whether to render in compact mode. */
    compact: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click'
  ]
}
</script>

<template>
  <tr
    :class="[type, { selected, compact }]"
    @click.stop="$emit('click')"
  >
    <td
      v-if="selection"
      class="checkboxCell"
    >
      <div v-if="type === 'data' || selection === 'multiple'">
        <div>
          <Icon
            class="icon circle"
            name="CircleRing"
          />
          <Icon
            class="icon checkmark"
            name="StatusCircleCheckmark"
          />
        </div>
      </div>
    </td>
    <!-- @slot Row's content -->
    <slot />
  </tr>
</template>

<style scoped lang="less" src="./details-row.less" />
