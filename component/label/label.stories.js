import FluentuiLabel from './label.vue'

export default {
  title: 'Basic Inputs/Label',
  component: FluentuiLabel,
  argTypes: {
    default: {
      description: 'The text content of the DOM Element',
      control: { type: 'text' },
      table: {
        type: { summary: 'DomElements' }
      }
    }
  }
}

export const Normal = args => ({
  components: { FluentuiLabel },
  setup () {
    return {
      textContent: args.default,
      required: args.required,
      disabled: args.disabled
    }
  },
  template: `
    <fluentui-label
      :required="required"
      :disabled="disabled"
      v-text="textContent"
    />
  `
})
Normal.args = {
  default: "I'm a Label"
}

export const Required = Normal.bind({})
Required.args = {
  default: "I'm a required Label",
  required: true
}

export const Disabled = Normal.bind({})
Disabled.args = {
  default: "I'm a disabled Label",
  disabled: true
}

export const RequiredAndDisabled = Normal.bind({})
RequiredAndDisabled.args = {
  default: "I'm a required and disabled Label",
  required: true,
  disabled: true
}
