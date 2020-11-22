<script>
import ComboField from '../combo-field'

export default {
  components: { ComboField },
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
    <ComboField
      :open="open"
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
        @click.stop="open = !open"
      >
      <template #dropdown>
        <div class="dropdown">
          {{ text }}
        </div>
      </template>
    </ComboField>
  </div>
</template>

<style scoped lang="less" src="./extended-field.less" />
