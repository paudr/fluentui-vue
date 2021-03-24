import FluentuiSpinner from './spinner.vue'

export default {
  title: 'Progress/Spinner',
  component: FluentuiSpinner,
  argTypes: {
    size: {
      type: { name: 'enum' },
      options: ['', 'large', 'medium', 'small', 'xSmall']
    }
  }
}

export const Spinner = args => ({
  components: { FluentuiSpinner },
  setup: () => ({ args }),
  template: '<fluentui-spinner v-bind="args" />'
})
Spinner.args = { label: 'Loading...' }

export const ExtraSmallSpinner = Spinner.bind({})
ExtraSmallSpinner.args = { size: 'xSmall' }

export const SmallSpinner = Spinner.bind({})
SmallSpinner.args = { size: 'small' }

export const MediumSpinner = Spinner.bind({})
MediumSpinner.args = { size: 'medium' }

export const LargeSpinner = Spinner.bind({})
LargeSpinner.args = { size: 'large' }
