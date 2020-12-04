<script>
import Item from './item'

export default {
  name: 'BlockMenu',
  components: { Item },
  props: {
    /** Items to render. */
    items: { type: Array, required: true },
    /** Time in milliseconds that the mouse must be over the button to expand child menu. */
    mousestopDelay: { type: Number, default: 800 }
  },
  data () {
    return {
      expanded: null
    }
  },
  computed: {
    iconSpace () {
      return this.items
        .filter(item => !item.type || item.type === 'button')
        .some(button => button.icon)
    }
  },
  methods: {
    handleClick (index) {
      if (this.expanded !== index) {
        this.expanded = null
      }
      const item = this.items[index]
      if (item) {
        if (typeof item.action === 'function') {
          item.action.call(null)
        } else if (item.childs && item.childs.length > 0) {
          this.expanded = index
        }
      }
    }
  }
}
</script>

<template>
  <div class="blockMenu">
    <ul>
      <Item
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :text="item.text"
        :icon="item.icon"
        :icon-color="item.iconColor"
        :icon-space="iconSpace"
        :has-action="typeof item.action === 'function'"
        :has-childs="item.childs && item.childs.length > 0"
        :mousestop-delay="mousestopDelay"
        :disabled="item.disabled"
        @click="handleClick(index)"
        @click-expand="expanded = index"
        @mousestop="expanded = index"
        @mousestop-expand="expanded = index"
      >
        <BlockMenu
          v-if="item.childs && item.childs.length > 0 && index === expanded"
          class="childBlockMenu"
          :items="item.childs"
          :mousestop-delay="mousestopDelay"
        />
      </Item>
    </ul>
  </div>
</template>

<style scoped lang="less" src="./block-menu.less" />
