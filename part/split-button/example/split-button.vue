<script>
import Control from '../split-button'
import Checkbox from '../../../component/checkbox'
import Dropdown from '../../../component/dropdown'
import TextField from '../../../component/text-field'
import code from '../../../component/icon/code'

const iconOptions = [
  { text: '', value: '' },
  ...Object.keys(code).map(name => ({ text: name, value: name }))
]

export default {
  components: { Control, Checkbox, Dropdown, TextField },
  data () {
    return {
      iconOptions,
      text: 'Add Item',
      icon: 'Add',
      iconColor: '',
      iconSpace: '',
      expandIcon: 'ChevronDown'
    }
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <div>
        <Control
          class="field"
          :text="text"
          :icon="icon"
          :icon-color="iconColor"
          :icon-space="iconSpace"
          :expand-icon="expandIcon"
        />
      </div>
    </div>
    <div class="props">
      <div>
        <TextField
          label="Text"
          v-model="text"
        />
      </div>
      <div>
        <Dropdown
          label="Icon"
          :options="iconOptions"
          v-model="icon"
        />
      </div>
      <div>
        <TextField
          label="Icon color"
          v-model="iconColor"
        />
      </div>
      <div>
        <Checkbox
          label="Icon space"
          v-model="iconSpace"
        />
      </div>
      <div>
        <Dropdown
          label="Expand icon"
          :options="iconOptions"
          v-model="expandIcon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./split-button.less" />
