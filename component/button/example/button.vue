<script>
import Button from '../button'
import Checkbox from '../../checkbox'

export default {
  components: { Button, Checkbox },
  data () {
    return {
      primary: false,
      checked: false,
      disabled: false
    }
  }
}
</script>
<template>
  <div class="checks">
    <Checkbox
      label="Primary"
      v-model="primary"
    />
    <Checkbox
      label="Checked"
      v-model="checked"
    />
    <Checkbox
      label="Disabled"
      v-model="disabled"
    />
  </div>
  <div class="examples">
    <span>Standard</span>
    <div>
      <Button
        text="Standard"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Compound</span>
    <div>
      <Button
        type="compound"
        text="Compound"
        secondary-text="This is the secondary text."
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Command</span>
    <div>
      <Button
        type="command"
        text="New Item"
        icon="Add"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Icon</span>
    <div>
      <Button
        type="icon"
        icon="Emoji2"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Action</span>
    <div>
      <Button
        type="action"
        text="Create account"
        icon="AddFriend"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<style scoped lang="less" src="./button.less" />
