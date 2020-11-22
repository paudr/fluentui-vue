<script>
import InputField from '../input-field'

export default {
  components: { InputField },
  props: {
    label: { type: String, default: '' },
    description: { type: String, default: '' },
    invalid: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    borderless: { type: Boolean, default: false },
    underlined: { type: Boolean, default: false }
  },
  data () {
    return {
      open: false,
      text: ''
    }
  }
}
</script>

<template>
  <div>
    <InputField
      :label="label"
      :description="description"
      :invalid="invalid"
      :error-message="errorMessage"
      :disabled="disabled"
      :required="required"
      :borderless="borderless"
      :underlined="underlined"
      @click="$refs.field.focus()"
    >
      <input
        ref="field"
        type="text"
        class="field"
        :disabled="disabled"
        v-model="text"
      >
    </InputField>
  </div>
</template>

<style scoped lang="less" src="./extended-field.less" />
