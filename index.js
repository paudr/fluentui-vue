import BlockMenu from './component/block-menu'
import Button from './component/button'
import Calendar from './component/calendar'
import Checkbox from './component/checkbox'
import ChoiceGroup from './component/choice-group'
import CommandBar from './component/command-bar'
import DatePicker from './component/date-picker'
import DetailsList from './component/details-list'
import Dialog from './component/dialog'
import Dropdown from './component/dropdown'
import Icon from './component/icon'
import Label from './component/label'
import NumberField from './component/number-field'
import Overlay from './component/overlay'
import Panel from './component/panel'
import Pivot from './component/pivot'
import Select from './component/select'
import Spinner from './component/spinner'
import TextField from './component/text-field'

const components = {
  BlockMenu,
  Button,
  Calendar,
  Checkbox,
  ChoiceGroup,
  CommandBar,
  DatePicker,
  DetailsList,
  Dialog,
  Dropdown,
  Icon,
  Label,
  NumberField,
  Overlay,
  Panel,
  Pivot,
  Select,
  Spinner,
  TextField
}

export default {
  install (app) {
    for (const name in components) {
      const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      const componentName = 'standard-' + kebabName
      app.component(componentName, components[name])
    }
  }
}
