<script>
import ExtendedField from './extended-field'

export default {
  components: { ExtendedField }
}
</script>

<template>
  <div class="root">
    <div>
      <ExtendedField label="I'm a field" />
    </div>
    <div>
      <ExtendedField
        label="I'm a field"
        description="A fancy description."
      />
    </div>
    <div>
      <ExtendedField
        label="Invalid"
        invalid
      />
    </div>
    <div>
      <ExtendedField
        label="With error message"
        error-message="A descriptive error message."
      />
    </div>
    <div>
      <ExtendedField
        label="Disabled"
        disabled
      />
    </div>
    <div>
      <ExtendedField
        label="Required"
        required
      />
      <br>
      <ExtendedField required />
    </div>
    <div>
      <ExtendedField
        label="Borderless"
        borderless
      />
    </div>
    <div>
      <ExtendedField
        label="Underlined"
        underlined
      />
    </div>
  </div>
</template>

<style scoped lang="less" src="./input-field.less" />
