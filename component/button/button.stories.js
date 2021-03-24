import { action } from '@storybook/addon-actions'
import FluentuiButton from './button.vue'

export default {
  title: 'Basic Inputs/Button',
  component: FluentuiButton,
  argTypes: {
    type: {
      type: { name: 'enum' },
      options: ['', 'default', 'action', 'command', 'compound', 'icon']
    }
  }
}

export const Button = args => ({
  components: { FluentuiButton },
  setup: () => ({
    args,
    onClick: action('click')
  }),
  template: `
    <fluentui-button
      v-bind="args"
      @click="onClick"
    />
  `
})
Button.storyName = 'Default'
Button.args = {
  text: 'Standard'
}

export const Primary = Button.bind({})
Primary.args = {
  primary: true,
  text: 'Primary'
}

export const Compound = Button.bind({})
Compound.args = {
  type: 'compound',
  text: 'Standard',
  secondaryText: 'This is the secondary text.'
}

export const CompoundPrimary = Button.bind({})
CompoundPrimary.args = {
  type: 'compound',
  primary: true,
  text: 'Primary',
  secondaryText: 'This is the secondary text.'
}

export const Command = Button.bind({})
Command.args = {
  type: 'command',
  text: 'Send mail',
  icon: 'Mail'
}

export const Icon = Button.bind({})
Icon.args = {
  type: 'icon',
  icon: 'Emoji2'
}

export const Action = Button.bind({})
Action.args = {
  type: 'action',
  text: 'Create account',
  icon: 'AddFriend'
}
