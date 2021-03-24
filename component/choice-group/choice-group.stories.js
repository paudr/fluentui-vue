import { action } from '@storybook/addon-actions'
import FluentuiChoiceGroup from './choice-group.vue'
import FluentuiIcon from '../icon'

export default {
  title: 'Basic Inputs/ChoiceGroup',
  component: FluentuiChoiceGroup,
  excludeStories: /.*Data$/
}

export const optionsData = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd', disabled: true },
  { text: 'Option e', value: 'e' }
]

export const iconOptionsData = [
  { icon: 'AlignCenter', value: 'center' },
  { icon: 'AlignLeft', value: 'left' },
  { icon: 'AlignRight', value: 'right' },
  { icon: 'AlignJustify', value: 'justify' }
]

export const Normal = args => ({
  components: { FluentuiChoiceGroup },
  setup: () => ({
    args,
    onUpdateModelValue: action('update:modelValue')
  }),
  template: `
    <fluentui-choice-group
      v-bind="args"
      @update:modelValue="onUpdateModelValue"
    />
  `
})
Normal.args = {
  label: 'Pick one',
  options: optionsData
}

export const InRow = Normal.bind({})
InRow.args = {
  label: 'Pick one',
  options: optionsData,
  inRow: true
}

export const Slotted = args => ({
  components: {
    FluentuiChoiceGroup,
    FluentuiIcon
  },
  setup: () => ({
    args,
    onUpdateModelValue: action('update:modelValue')
  }),
  template: `
    <fluentui-choice-group
      v-bind="args"
      @update:modelValue="onUpdateModelValue"
    >
      <template v-slot:default="slotProps">
        <fluentui-icon
          :name="slotProps.option.icon"
          style="font-size: 4em; margin: 15px 5px;"
        />
      </template>
    <fluentui-choice-group>
  `
})
Slotted.args = {
  label: 'Pick one',
  options: iconOptionsData
}
