<script>
import Pivot from '../pivot'

const fullTabs = [
  { text: 'My files', value: 'files', icon: 'Emoji2', count: 42 },
  { text: 'Recent', value: 'recent', icon: 'Recent', count: 23 },
  { text: 'Shared with me', value: 'shared', icon: 'Ringer', count: 1 }
]

const onlyTextTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value
}))

const withIconsTabs = fullTabs.map(tab => ({
  text: tab.text,
  value: tab.value,
  icon: tab.icon
}))

export default {
  components: { Pivot },
  data () {
    return {
      fullTabs,
      onlyTextTabs,
      withIconsTabs,
      selectedTab1: null,
      selectedTab2: null,
      selectedTab3: null,
      selectedTab4: null,
      selectedTab5: null,
      selectedTab6: null
    }
  }
}
</script>

<template>
  <div class="example">
    <span>Standard</span>
    <Pivot
      :tabs="fullTabs"
      v-model="selectedTab1"
    />
  </div>

  <div class="example">
    <span>Only text</span>
    <Pivot
      :tabs="onlyTextTabs"
      v-model="selectedTab2"
    />
  </div>

  <div class="example">
    <span>With icons</span>
    <Pivot
      :tabs="withIconsTabs"
      v-model="selectedTab3"
    />
  </div>

  <div class="example">
    <span>Large tabs</span>
    <Pivot
      large
      :tabs="withIconsTabs"
      v-model="selectedTab4"
    />
  </div>

  <div class="example">
    <span>With tab style</span>
    <Pivot
      tab-style
      :tabs="withIconsTabs"
      v-model="selectedTab5"
    />
  </div>

  <div class="example">
    <span>Large with tab style</span>
    <Pivot
      large
      tab-style
      :tabs="withIconsTabs"
      v-model="selectedTab6"
    />
  </div>
</template>

<style scoped lang="less" src="./pivot.less" />
