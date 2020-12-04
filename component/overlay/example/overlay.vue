<script>
import Control from '../overlay'
import Button from '../../button'

export default {
  components: { Control, Button },
  data () {
    return {
      visible: false,
      visibleDark: false
    }
  }
}
</script>

<template>
  <div class="buttons">
    <Button
      text="Show overlay"
      @click="visible = true"
    />

    <Button
      text="Show dark overlay"
      @click="visibleDark = true"
    />
  </div>

  <teleport
    v-if="visible"
    to="body"
  >
    <Control
      fixed
      class="overlay"
      @click="visible = false"
    >
      <span>I'm a notification!</span>
    </Control>
  </teleport>

  <teleport
    v-if="visibleDark"
    to="body"
  >
    <Control
      fixed
      dark
      class="overlay"
      @click="visibleDark = false"
    >
      <span>I'm a notification!</span>
    </Control>
  </teleport>
</template>

<style scoped lang="less" src="./overlay.less" />
