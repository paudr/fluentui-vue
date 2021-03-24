import { action } from '@storybook/addon-actions'
import FluentuiBaseSelect from './base-select.vue'
import FluentuiButton from '../button'
import { optionsData } from '../choice-group/choice-group.stories'

export default {
  title: 'Base/BaseSelect',
  component: FluentuiBaseSelect,
  excludeStories: /.*Data$/
}

export const vegetablesData = [
  { type: 'header', text: 'Fruits' },
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange', disabled: true },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' },
  { type: 'divider' },
  { type: 'header', text: 'Vegetables' },
  { text: 'Broccoli', value: 'broccoli' },
  { text: 'Carrot', value: 'carrot' },
  { text: 'Lettuce', value: 'lettuce' }
]

export const Standard = (args, { argTypes }) => ({
  components: { FluentuiBaseSelect },
  setup: () => ({
    args,
    onSelect: action('select'),
    onKeydown: action('keydown')
  }),
  template: `
    <fluentui-base-select
      v-bind="args"
      @select="onSelect"
      @keydown="onKeydown"
    />
  `
})
Standard.args = {
  options: optionsData,
  value: 'b'
}

export const WithGroups = Standard.bind({})
WithGroups.args = {
  options: vegetablesData,
  value: 'banana'
}

export const Multiple = Standard.bind({})
Multiple.args = {
  options: vegetablesData,
  multiple: true,
  value: ['banana']
}

export const Slotted = (args, { argTypes }) => ({
  components: {
    FluentuiBaseSelect,
    FluentuiButton
  },
  setup: () => ({
    args,
    onSelect: action('select'),
    onKeydown: action('keydown')
  }),
  template: `
    <fluentui-base-select
      v-bind="args"
      @select="onSelect"
      @keydown="onKeydown"
    >
      <template v-slot:default="slotProps">
        <div>
          <fluentui-button
            :primary="slotProps.selected"
            :text="slotProps.option.text"
          />
        </div>
      </template>
    </fluentui-base-select>
  `
})
Slotted.args = {
  options: optionsData,
  value: 'b'
}
