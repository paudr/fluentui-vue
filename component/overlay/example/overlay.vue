<script>
import Overlay from '../overlay'
import Button from '../../button'

export default {
  components: { Overlay, Button },
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
    <Overlay
      fixed
      class="overlay"
      @click="visible = false"
    >
      <span>I'm a notification!</span>
    </Overlay>
  </teleport>

  <teleport
    v-if="visibleDark"
    to="body"
  >
    <Overlay
      fixed
      dark
      class="overlay"
      @click="visibleDark = false"
    >
      <span>I'm a notification!</span>
    </Overlay>
  </teleport>
</template>

<style scoped lang="less" src="./overlay.less" />
