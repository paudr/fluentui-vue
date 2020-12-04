<script>
import Control from '../button'
import Checkbox from '../../checkbox'

export default {
  components: { Control, Checkbox },
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
      <Control
        text="Standard"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Compound</span>
    <div>
      <Control
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
      <Control
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
      <Control
        type="icon"
        icon="Emoji2"
        :primary="primary"
        :checked="checked"
        :disabled="disabled"
      />
    </div>

    <span>Action</span>
    <div>
      <Control
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
