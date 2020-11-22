<script>
import Icon from '../icon'

export default {
  components: { Icon },
  props: {
    /** Index of the selected pivot item. */
    modelValue: { type: Number, default: null },
    /** Tabs to render. */
    tabs: { type: Array, required: true },
    /** Whether tabs are rendered large or not. */
    large: { type: Boolean, default: false },
    /** Whether tabs are rendered as tabs or links. */
    tabStyle: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on a tab. */
    'update:modelValue'
  ]
}
</script>

<template>
  <div :class="{ large, tabStyle }">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ selected: modelValue === index }"
      @click.stop="$emit('update:modelValue', index)"
    >
      <span>
        <span>
          <Icon
            v-if="tab.icon"
            class="icon"
            :name="tab.icon"
          />
          <span
            class="label"
            v-text="tab.text"
          />
          <span
            v-if="tab.count != null"
            class="count"
            v-text="`(${tab.count.toString()})`"
          />
        </span>
      </span>
    </button>
  </div>
</template>

<style scoped lang="less" src="./pivot.less" />
