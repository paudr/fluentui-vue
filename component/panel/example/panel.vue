<script>
import Control from '../panel'
import Overlay from '../../overlay'
import Button from '../../button'
import Checkbox from '../../checkbox'
import Dropdown from '../../dropdown'
import ChoiceGroup from '../../choice-group'

export default {
  components: { Control, Overlay, Button, Checkbox, Dropdown, ChoiceGroup },
  data () {
    return {
      showPanel: false,
      choiceValue: '',
      type: 'custom',
      left: false,
      withoutCloseButton: false
    }
  }
}
</script>

<template>
  <Button
    text="Show Panel"
    @click="showPanel = true"
  />

  <Dropdown
    label="type"
    :options="[
      { text: 'custom', value: 'custom' },
      { text: 'extraSmall', value: 'extraSmall' },
      { text: 'small', value: 'small' },
      { text: 'medium', value: 'medium' },
      { text: 'large', value: 'large' },
      { text: 'extraLarge', value: 'extraLarge' },
      { text: 'fluid', value: 'fluid' },
    ]"
    v-model="type"
  />

  <Checkbox
    label="Left"
    v-model="left"
  />

  <Checkbox
    label="Without close button"
    v-model="withoutCloseButton"
  />

  <Overlay
    v-if="showPanel"
    fixed
    dark
    class="overlay"
    @click="showPanel = false"
  >
    <Control
      header-text="Missing Subject"
      :type="type"
      :left="left"
      :without-close-button="withoutCloseButton"
      @click="showPanel = false"
    >
      <ChoiceGroup
        label="Pick one"
        :options="[
          { value: 'A', text: 'Option A' },
          { value: 'B', text: 'Option B' },
          { value: 'C', text: 'Option C', disabled: true }
        ]"
        v-model="choiceValue"
      />
      <template #footer>
        <div class="footer">
          <Button
            primary
            text="Ok"
          />
          <Button text="Cancel" />
        </div>
      </template>
    </Control>
  </Overlay>
</template>

<style scoped lang="less" src="./panel.less" />
