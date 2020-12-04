<script>
import Control from '../icon'
import code from '../code'

export default {
  components: { Control },
  data () {
    return {
      names: Object.keys(code),
      filter: ''
    }
  },
  computed: {
    filteredNames () {
      const { names, filter } = this
      return names.filter((name) => name.toLowerCase().includes(filter))
    }
  }
}
</script>
<template>
  <div class="filter">
    <label>Filter</label>
    <input
      type="text"
      v-model="filter"
    >
  </div>
  <div class="grid">
    <div
      v-for="name in filteredNames"
      :key="name"
      class="element"
    >
      <Control
        class="icon"
        :name="name"
      />
      <span
        class="label"
        v-text="name"
      />
    </div>
  </div>
</template>

<style lang="less" scoped src="./icon.less" />
