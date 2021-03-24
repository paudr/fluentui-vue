<script>
export default {
  props: {
    /**
     * The size of Spinner to render.
     * @values large, medium, small, xSmall
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => !value || ['xSmall', 'small', 'medium', 'large'].includes(value)
    },
    /** The label to show next to the Spinner. */
    label: { type: String, default: '' }
  }
}
</script>

<template>
  <div :class="size">
    <div class="circle" />
    <div
      v-if="label"
      class="label"
      v-text="label"
    />
  </div>
</template>

<style scoped lang="less" src="./spinner.less"></style>
