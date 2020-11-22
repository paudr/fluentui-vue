<script>
import Icon from '../../component/icon'

export default {
  components: { Icon },
  props: {
    /** The text in the "Go to today" link shown in the calendar. */
    goToday: {
      type: String,
      default: ''
    }
  },
  emits: [
    /** Raised when user make click in a navigation button. */
    'navigate',
    /** 'Raised when user make click in a go today button. */
    'click-go-today'
  ]
}
</script>

<template>
  <div
    class="calendar"
    :class="{ showGoToday: goToday }"
  >
    <div class="header">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="titleComponents">
        <div class="navContainer">
          <button
            class="prev"
            @click="$emit('navigate', -1)"
          >
            <Icon name="Up" />
          </button>
          <button
            class="next"
            @click="$emit('navigate', 1)"
          >
            <Icon name="Down" />
          </button>
        </div>
      </div>
    </div>
    <slot />
    <button
      v-if="goToday"
      class="goToday"
      @click="$emit('click-go-today')"
      v-text="goToday"
    />
  </div>
</template>

<style scoped lang="less" src="./layout.less" />
