import { action } from '@storybook/addon-actions'
import FluentuiCheckbox from './checkbox.vue'

export default {
  title: 'Basic Inputs/Checkbox',
  component: FluentuiCheckbox,
  argTypes: {
    boxSide: {
      type: { name: 'enum' },
      options: ['', 'start', 'end']
    }
  }
}

export const Unchecked = args => ({
  components: { FluentuiCheckbox },
  setup: () => ({
    args,
    onUpdateModelValue: action('update:modelValue'),
    onUpdateIndeterminate: action('update:indeterminate')
  }),
  template: `
    <fluentui-checkbox
      v-bind="args"
      @update:modelValue="onUpdateModelValue"
      @update:indeterminate="onUpdateIndeterminate"
    />
  `
})
Unchecked.args = {
  label: 'Unchecked checkbox'
}

export const Checked = Unchecked.bind({})
Checked.args = {
  label: 'Checked checkbox',
  modelValue: true
}

export const Indeterminate = Unchecked.bind({})
Indeterminate.args = {
  label: 'Indeterminate checkbox',
  indeterminate: true
}

export const Disabled = Unchecked.bind({})
Disabled.args = {
  label: 'Disabled checkbox',
  disabled: true
}

export const DisabledChecked = Unchecked.bind({})
DisabledChecked.args = {
  label: 'Disabled checked checkbox',
  disabled: true,
  modelValue: true
}

export const DisabledIndeterminate = Unchecked.bind({})
DisabledIndeterminate.args = {
  label: 'Disabled indeterminate checkbox',
  disabled: true,
  indeterminate: true
}
