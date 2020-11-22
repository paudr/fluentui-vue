<script>
export default {
  computed: {
    title () {
      return 'FluentUI Vue'
    }
  }
}
</script>

<template>
  <div class="app">
    <div
      class="title"
      v-text="title"
    />
  </div>
</template>

<style scoped lang="less" src="./app.less" />
