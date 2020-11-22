<script>
export default {
  props: {
    /** Whether the associated form field is required or not. */
    required: { type: Boolean, default: false },
    /** Renders the label as disabled. */
    disabled: { type: Boolean, default: false }
  }
}
</script>

<template>
  <label :class="{ required, disabled }">
    <!-- @slot The text content of the DOM Element -->
    <slot />
  </label>
</template>

<style scoped lang="less" src="./label.less" />
