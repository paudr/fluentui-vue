<script>
import code from './code'

export default {
  props: {
    /** The name of the icon to use from the icon font. If string is empty, a placeholder icon will be rendered the same width as an icon. */
    name: {
      type: String,
      default: '',
      validator: value => !value || value in code
    }
  },
  code
}
</script>

<template>
  <i v-text="$options.code[name]" />
</template>

<style lang="less" scoped src="./icon.less"></style>
