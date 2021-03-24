<script>
import Icon from '../icon'

export default {
  components: { Icon },
  props: {
    /**
     * Type of button.
     * @values default, action, command, compound, icon
     */
    type: {
      type: String,
      default: 'default',
      validator: value => !value || ['default', 'action', 'command', 'compound', 'icon'].includes(value)
    },
    /** Changes the visual presentation of the button to be emphasized. */
    primary: { type: Boolean, default: false },
    /** Text to render button label. If text is supplied, it will override any string in button children. Other children components will be passed through after the text. */
    text: { type: String, default: null },
    /** Description of the action this button takes. Only used for compound buttons. */
    secondaryText: { type: String, default: null },
    /** The name of the icon to use from the icon font. */
    icon: { type: String, default: null },
    /** If provided, this component will be rendered as an anchor. */
    href: { type: String, default: null },
    /** Target attribute of the anchor element. 'href' attribute must to be populated. */
    target: { type: String, default: null },
    /** Whether the button is checked. */
    checked: { type: Boolean, default: false },
    /** Whether the button is disabled. */
    disabled: { type: Boolean, default: false }
  },
  emits: [
    /** Raised when the user clicks on the element. */
    'click'
  ]
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="button"
    :class="{
      default: type === 'default',
      action: type === 'action',
      command: type === 'command',
      compound: type === 'compound',
      icon: type === 'icon',
      primary,
      checked
    }"
    :href="href"
    :target="href ? target : null"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span>
      <Icon
        v-if="icon"
        :name="icon"
        class="icon"
      />
      <span
        v-if="type !== 'icon' && (text || secondaryText)"
        class="textContainer"
      >
        <span
          v-if="text"
          class="label"
          v-text="text"
        />
        <span
          v-if="secondaryText"
          class="description"
          v-text="secondaryText"
        />
      </span>
    </span>
  </component>
</template>

<style scoped lang="less" src="./button.less"></style>
