<script>
import Control from '../spinner'

export default {
  components: { Control }
}
</script>
<template>
  <div class="root">
    <label>Extra small spinner</label>
    <div>
      <Control size="xSmall" />
    </div>

    <label>Small spinner</label>
    <div>
      <Control size="small" />
    </div>

    <label>Medium spinner</label>
    <div>
      <Control size="medium" />
    </div>

    <label>Large spinner</label>
    <div>
      <Control size="large" />
    </div>

    <label>With text</label>
    <div>
      <Control label="I am loading..." />
    </div>
  </div>
</template>

<style scoped lang="less" src="./spinner.less" />
