<script>
import Dialog from '../dialog'
import Overlay from '../../overlay'
import Button from '../../button'
import ChoiceGroup from '../../choice-group'

export default {
  components: { Dialog, Overlay, Button, ChoiceGroup },
  data () {
    return {
      showDialog1: false,
      showDialog2: false,
      showDialog3: false,
      choiceValue: ''
    }
  }
}
</script>

<template>
  <Button
    text="Show Dialog"
    @click="showDialog1 = true"
  />

  <Button
    text="Show Dialog"
    @click="showDialog2 = true"
  />

  <Button
    text="Show Dialog"
    @click="showDialog3 = true"
  />

  <Overlay
    v-if="showDialog1"
    dark
    class="overlay"
    @click="showDialog1 = false"
  >
    <Dialog
      header="Missing Subject"
      text="Do you want to send this message without a subject?"
      style="max-width: 400px;"
    />
  </Overlay>

  <Overlay
    v-if="showDialog2"
    dark
    class="overlay"
    @click="showDialog2 = false"
  >
    <Dialog
      header="All emails together"
      type="largeHeader"
      text="Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails."
      style="max-width: 400px; max-height: 250px"
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
    </Dialog>
  </Overlay>

  <Overlay
    v-if="showDialog3"
    class="overlay"
  >
    <Dialog
      type="close"
      header="Missing Subject"
      text="Do you want to send this message without a subject?"
      style="max-width: 400px;"
      @click="showDialog3 = false"
    />
  </Overlay>
</template>

<style scoped lang="less" src="./dialog.less" />
