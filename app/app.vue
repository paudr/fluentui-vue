<script>
import Button from '../component/button/example'
import Calendar from '../component/calendar/example'
import Checkbox from '../component/checkbox/example'
import ChoiceGroup from '../component/choice-group/example'
import ComboBox from '../component/combo-box/example'
import DatePicker from '../component/date-picker/example'
import Dropdown from '../component/dropdown/example'
import Icon from '../component/icon/example'
import Label from '../component/label/example'
import Pivot from '../component/pivot/example'
import Select from '../component/select/example'
import Spinner from '../component/spinner/example'
import TextField from '../component/text-field/example'

import UncontrolledCalendar from '../uncontrolled/calendar/example'
import UncontrolledComboBox from '../uncontrolled/combo-box/example'
import UncontrolledDropdown from '../uncontrolled/dropdown/example'
import UncontrolledSelect from '../uncontrolled/select/example'

import Autofill from '../part/autofill/example'
import ComboField from '../part/combo-field/example'
import CommandButton from '../part/command-button/example'
import InputField from '../part/input-field/example'
import SplitButton from '../part/split-button/example'

const component = {
  Button,
  Calendar,
  Checkbox,
  ChoiceGroup,
  ComboBox,
  DatePicker,
  Dropdown,
  Icon,
  Pivot,
  Label,
  Select,
  Spinner,
  TextField
}

const uncontrolled = {
  UncontrolledCalendar,
  UncontrolledComboBox,
  UncontrolledDropdown,
  UncontrolledSelect
}

const part = {
  Autofill,
  ComboField,
  CommandButton,
  InputField,
  SplitButton
}

export default {
  components: {
    ...component,
    ...uncontrolled,
    ...part
  },
  data () {
    return {
      currentComponent: null,
      component: Object.keys(component),
      uncontrolled: Object.keys(uncontrolled).map(name => name.replace(/^Uncontrolled/, '')),
      part: Object.keys(part)
    }
  },
  computed: {
    title () {
      return this.currentComponent
        ? `FluentUI Vue: ${this.currentComponent}`
        : 'FluentUI Vue'
    }
  }
}
</script>

<template>
  <div class="app">
    <div
      class="title"
      v-text="title"
    />
    <div class="controls">
      <div class="group">
        <div>Component</div>
        <button
          v-for="name in component"
          :key="name"
          :class="{ selected: name === currentComponent }"
          @click="currentComponent = name"
          v-text="name"
        />
      </div>
      <div class="group">
        <div>Uncontrolled</div>
        <button
          v-for="name in uncontrolled"
          :key="name"
          :class="{ selected: 'Uncontrolled' + name === currentComponent }"
          @click="currentComponent = 'Uncontrolled' + name"
          v-text="name"
        />
      </div>
      <div class="group">
        <div>Part</div>
        <button
          v-for="name in part"
          :key="name"
          :class="{ selected: name === currentComponent }"
          @click="currentComponent = name"
          v-text="name"
        />
      </div>
    </div>
    <div class="canvas">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<style scoped lang="less" src="./app.less" />
