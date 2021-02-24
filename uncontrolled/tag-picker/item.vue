<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    text: { type: String, required: true },
    disabled: { type: Boolean, default: false }
  },
  emits: ['click']
}
</script>

<template>
  <div
    :class="{ disabled }"
    tabindex="0"
  >
    <span v-text="text" />
    <button
      tabindex="-1"
      @click.stop="$emit('click')"
    >
      <span>
        <Icon
          class="itemIcon"
          name="Cancel"
        />
      </span>
    </button>
  </div>
</template>

<style scoped lang="less" src="./item.less" />
