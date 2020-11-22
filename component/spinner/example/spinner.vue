<script>
import Spinner from '../spinner'

export default {
  components: { Spinner }
}
</script>
<template>
  <div class="root">
    <label>Extra small spinner</label>
    <div>
      <Spinner size="xSmall" />
    </div>

    <label>Small spinner</label>
    <div>
      <Spinner size="small" />
    </div>

    <label>Medium spinner</label>
    <div>
      <Spinner size="medium" />
    </div>

    <label>Large spinner</label>
    <div>
      <Spinner size="large" />
    </div>

    <label>With text</label>
    <div>
      <Spinner label="I am loading..." />
    </div>
  </div>
</template>

<style scoped lang="less" src="./spinner.less" />
