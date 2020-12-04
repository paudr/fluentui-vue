<script>
import Control from '../checkbox'

export default {
  components: { Control },
  data () {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: false,
      value5: false,
      indeterminate5: true,
      value6: true,
      indeterminate6: true,
      value7: false,
      value8: false,
      value9: false
    }
  }
}
</script>
<template>
  <Control
    class="checkbox"
    label="Unchecked checkbox"
    v-model="value1"
  />

  <Control
    class="checkbox"
    label="Checked checkbox"
    v-model="value2"
  />

  <Control
    class="checkbox"
    label="Disabled checkbox"
    disabled
    v-model="value3"
  />

  <Control
    class="checkbox"
    label="Disabled checked checkbox"
    disabled
    checked
    v-model="value4"
  />

  <Control
    class="checkbox"
    label="Indeterminate checkbox"
    v-model="value5"
    v-model:indeterminate="indeterminate5"
  />

  <Control
    class="checkbox"
    label="Indeterminate checkbox init to false"
    v-model="value6"
    v-model:indeterminate="indeterminate6"
  />

  <Control
    class="checkbox"
    label="Indeterminate disabled checkbox"
    indeterminate
    disabled
    v-model="value7"
  />

  <Control
    class="checkbox"
    label="Readonly checkbox"
    readonly
    v-model="value8"
  />

  <Control
    class="checkbox"
    label="Checkbox after de label"
    box-side="end"
    v-model="value9"
  />
</template>

<style scoped lang="less" src="./checkbox.less" />
