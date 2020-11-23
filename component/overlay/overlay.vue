<script>
export default {
  props: {
    /** Whether to use the dark-themed overlay. */
    dark: { type: Boolean, default: false },
    /** Whether the overlay have a fixed position instead absolute. */
    fixed: { type: Boolean, default: false }
  }
}
</script>

<template>
  <div
    class="overlay"
    :class="{ dark, fixed }"
  >
    <!-- @slot The content of the overlay -->
    <slot />
  </div>
</template>

<style scoped lang="less" src="./overlay.less" />
