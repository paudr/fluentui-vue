<script>
import Autofill from '..//autofill'
import Checkbox from '../../../component/checkbox'

export default {
  components: { Autofill, Checkbox },
  data () {
    return {
      readonly: false,
      disabled: false,
      autofill: false,
      accentInsensitive: false,
      placeholder: '',
      value: '',
      suggestedValue: ''
    }
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <Autofill
        class="field"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :autofill="autofill"
        :accent-insensitive="accentInsensitive"
        :suggested-value="suggestedValue"
        v-model="value"
      />
    </div>
    <div class="props">
      <div>
        <Checkbox
          label="Readonly"
          v-model="readonly"
        />
      </div>
      <div>
        <Checkbox
          label="Disabled"
          v-model="disabled"
        />
      </div>
      <div>
        <Checkbox
          label="Autofill"
          v-model="autofill"
        />
      </div>
      <div>
        <Checkbox
          label="Accent insensitive"
          v-model="accentInsensitive"
        />
      </div>
      <div>
        <span class="label">Placeholder:</span>
        <input
          type="text"
          v-model="placeholder"
        >
      </div>
      <div>
        <span class="label">Value:</span>
        <input
          type="text"
          v-model="value"
        >
      </div>
      <div>
        <span class="label">Sugested value:</span>
        <input
          type="text"
          v-model="suggestedValue"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./autofill.less" />
