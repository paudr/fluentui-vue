<script>
import BlockMenu from '../block-menu'
import debounce from '../../utils/debounce'
import Item, { more } from './item'

const observer = Symbol('observer')
const itemWidths = Symbol('itemWidths')

export default {
  components: { Item, BlockMenu },
  props: {
    /** Items to render. */
    items: { type: Array, required: true },
    /** Default items to have in the overflow menu. */
    overflowItems: { type: Array, default: () => [] },
    /** Items to render on the right side. */
    farItems: { type: Array, default: () => [] },
    /** Time in milliseconds that the mouse must be over the button to expand child menu. */
    mousestopDelay: { type: Number, default: 800 },
    /** Whether the command bar move items to overflow items or not. */
    autoupdateOverflow: { type: Boolean, default: false },
    /** Miliseconds between two consecutive resize checks. */
    autoupdateOverflowRate: { type: Number, default: 250 }
  },
  data () {
    return {
      /** Collection of items elements */
      refItems: [],
      expanded: null,
      overflowIndex: this.items.length
    }
  },
  computed: {
    currentItems () {
      const { items, overflowItems, overflowIndex } = this
      const currentItems = [...items.slice(0, overflowIndex)]
      const currentOverflowItems = [
        ...items.slice(overflowIndex),
        ...overflowItems
      ]
      if (currentOverflowItems.length > 0) {
        currentItems.push({
          type: more,
          childs: currentOverflowItems
        })
      }
      return currentItems
    },
    more () { return more }
  },
  methods: {
    createObserver () {
      if (this[observer]) {
        this[observer].unobserve(this.$el)
      }
      this[observer] = new ResizeObserver(debounce(() => this.updateOverflowIndex(), this.autoupdateOverflowRate))
      if (this.autoupdateOverflow) {
        this[observer].observe(this.$el)
      }
    },
    calculateItemWidths () {
      const items = this.refItems.filter(item => item.type !== more)
      this[itemWidths] = []
      for (
        let index = 0, accumulated = 0;
        index < items.length;
        index += 1
      ) {
        accumulated += items[index].$el.getBoundingClientRect().width
        this[itemWidths].push(accumulated)
      }
    },
    updateOverflowIndex () {
      if (Array.isArray(this[itemWidths])) {
        if (this[itemWidths].length === 0) { // First execution
          this.calculateItemWidths()
        }
        const parentWidth = this.$el.getBoundingClientRect().width
        const farWidth = this.$refs.far
          ? this.$refs.far.getBoundingClientRect().width
          : 0
        const moreItem = this.refItems.find(item => item.type === more)
        const moreWidth = moreItem
          ? moreItem.$el.getBoundingClientRect().width
          : 0
        const space = parentWidth - farWidth - moreWidth - 8
        let index = this[itemWidths].length - 1
        for (; index >= 0; index -= 1) {
          if (this[itemWidths][index] < space) { break }
        }
        this.overflowIndex = index + 1
      }
    },
    resetOverflowIndex () {
      this.overflowIndex = this.items.length
      this.$nextTick(() => {
        this.calculateItemWidths()
        if (this.autoupdateOverflow) {
          this.updateOverflowIndex()
        }
      })
    },
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
  },
  watch: {
    autoupdateOverflow (value) {
      if (value) {
        this[observer].observe(this.$el)
      } else {
        this[observer].unobserve(this.$el)
      }
      this.resetOverflowIndex()
    },
    autoupdateOverflowRate () {
      this.createObserver()
    }
  },
  mounted () {
    this.createObserver()
    this.calculateItemWidths()
  },
  beforeUnmount () {
    this[observer].unobserve(this.$el)
  },
  beforeUpdate () {
    this.refItems = []
  }
}
</script>

<template>
  <div class="commandBar">
    <div>
      <Item
        :ref="el => refItems.push(el)"
        v-for="(item, index) in currentItems"
        :key="index"
        :type="item.type"
        :text="item.text"
        :icon="item.icon"
        :icon-color="item.iconColor"
        :has-action="typeof item.action === 'function'"
        :has-childs="item.childs && item.childs.length > 0"
        :mousestop-delay="mousestopDelay"
        @click="handleClick(index)"
        @click-expand="expanded = index"
        @mousestop="expanded = index"
        @mousestop-expand="expanded = index"
      >
        <BlockMenu
          v-if="item.childs && item.childs.length > 0 && index === expanded"
          :items="item.childs"
        />
      </Item>
    </div>
    <div ref="far">
      <Item
        v-for="(item, index) in farItems"
        :key="index"
        :text="item.text"
        :icon="item.icon"
        :icon-color="item.iconColor"
      />
      <div />
    </div>
  </div>
</template>

<style scoped lang="less" src="./command-bar.less" />
