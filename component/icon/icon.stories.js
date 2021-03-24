import FluentuiIcon from './icon.vue'

const iconNames = Object.keys(FluentuiIcon.code)

export default {
  title: 'Utilities/Icon',
  component: FluentuiIcon
}

export const Icon = args => ({
  components: { FluentuiIcon },
  setup: () => args,
  template: '<fluentui-icon :name="name" style="font-size: 5em;" />'
})
Icon.argTypes = {
  name: {
    type: { name: 'enum' },
    options: ['', ...iconNames]
  }
}
Icon.args = {
  name: 'Add'
}

export const AllIcons = args => ({
  components: { FluentuiIcon },
  setup () {
    const names = args.name
      ? iconNames.filter(name => name.toLowerCase().includes(args.name))
      : iconNames
    return { names }
  },
  template: `
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <div
      v-for="name in names"
      :key="name"
      style="display: flex; flex-direction: column; align-items: center; margin: 15px; padding 5px;"
    >
      <fluentui-icon
        style="font-size: 4em;"
        :name="name"
      />
      <span style="background: rgb(242, 242, 242); padding: 4px; border-radius: 4px; margin-top: 5px;">
        {{ name }}
      </span>
    </div>
  </div>
`
})
AllIcons.argTypes = {
  name: {
    name: 'filter',
    type: { name: 'string' }
  }
}
