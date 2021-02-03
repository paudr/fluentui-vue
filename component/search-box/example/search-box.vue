<script>
import Control from '../search-box'

export default {
  components: { Control },
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: ''
    }
  }
}
</script>
<template>
  <Control
    class="searchBox"
    v-model:value="value1"
  />
  <Control
    class="searchBox"
    placeholder="Search with no animation"
    disable-animation
    v-model:value="value2"
  />
  <Control
    class="searchBox"
    underlined
    v-model:value="value3"
  />
  <Control
    class="searchBox"
    label="With label"
    v-model:value="value4"
  />
  <Control
    class="searchBox"
    disabled
    v-model:value="value5"
  />
  <Control
    class="searchBox"
    disabled
    underlined
    v-model:value="value6"
  />
  <Control
    class="searchBox"
    label="SearchBox with custom icon"
    placeholder="Filter"
    icon="Filter"
    v-model:value="value7"
  />
</template>

<style scoped lang="less" src="./search-box.less" />
