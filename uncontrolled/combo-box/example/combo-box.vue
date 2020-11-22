<script>
import ComboBox from '../combo-box'
import Checkbox from '../../../component/checkbox'
import ChoiceGroup from '../../../component/choice-group'

const options = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd', disabled: true },
  { text: 'Option e', value: 'e' }
]

const vegetables = [
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

const accent = [
  { text: 'menjàrem', value: 'menjarem' },
  { text: 'bàscula', value: 'bascula' },
  { text: 'vàlid', value: 'valid' },
  { text: 'matalàs', value: 'matalas' },
  { text: 'pàmfil', value: 'pamfil' },
  { text: 'interès', value: 'interes' },
  { text: 'bèstia', value: 'bestia' },
  { text: 'mèrit', value: 'merit' },
  { text: 'canapè', value: 'canape' },
  { text: 'perquè', value: 'perque' },
  { text: 'cèntim', value: 'centim' },
  { text: 'mòdul', value: 'modul' },
  { text: 'allò', value: 'allo' },
  { text: 'òliba', value: 'oliba' },
  { text: 'repòs', value: 'repos' },
  { text: 'Sònia', value: 'Sonia' },
  { text: 'arròsvindré', value: 'arrosvindre' },
  { text: 'créixens', value: 'creixens' },
  { text: 'haguéreu', value: 'haguereu' },
  { text: 'accés', value: 'acces' },
  { text: 'també', value: 'tambe' },
  { text: 'Berlín', value: 'Berlin' },
  { text: 'pastís', value: 'pastis' },
  { text: 'legítima', value: 'legitima' },
  { text: 'veí', value: 'vei' },
  { text: 'rítmic', value: 'ritmic' },
  { text: 'tísic', value: 'tisic' },
  { text: 'pastós', value: 'pastos' },
  { text: 'furóncol', value: 'furoncol' },
  { text: 'tórtora', value: 'tortora' },
  { text: 'cantó', value: 'canto' },
  { text: 'institució', value: 'institucio' },
  { text: 'cautxú', value: 'cautxu' },
  { text: 'múscul', value: 'muscul' },
  { text: 'fúcsia', value: 'fucsia' },
  { text: 'brúixola', value: 'bruixola' },
  { text: 'pallús', value: 'pallus' }
]

export default {
  components: { ComboBox, Checkbox, ChoiceGroup },
  data () {
    return {
      open: false,
      options,
      vegetables,
      accent,
      multiple: false,
      selectedData: 'options',
      textValue: '',
      selectedText: '',
      placeholder: '',
      disabled: false,
      readonly: false,
      suggestedIndexText: '-1',
      allowFreeform: false,
      autoComplete: false,
      accentInsensitive: false
    }
  },
  computed: {
    selectedOptions () {
      return this[this.selectedData]
    },
    value: {
      get () {
        const { textValue } = this
        if (this.multiple) {
          return (textValue || '').split(',')
            .filter(value => value)
            .map(value => value.trim())
        } else {
          return textValue
        }
      },
      set (value) {
        if (this.multiple) {
          this.textValue = (value || []).join(', ')
        } else {
          this.textValue = value
        }
      }
    },
    suggestedIndex () {
      return Number(this.suggestedIndexText)
    }
  }
}
</script>

<template>
  <div class="layout">
    <div class="canvas">
      <ComboBox
        label="ComboBox"
        :options="selectedOptions"
        :multiple="multiple"
        :selected-text="selectedText"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :suggested-index="suggestedIndex"
        :allow-freeform="allowFreeform"
        :auto-complete="autoComplete"
        :accent-insensitive="accentInsensitive"
        :open="open"
        v-model="value"
        @click="open = !open"
      />
    </div>
    <div class="props">
      <div>
        <Checkbox
          label="Multiple"
          v-model="multiple"
        />
      </div>
      <div>
        <ChoiceGroup
          in-row
          label="Options"
          :options="[
            { text: 'Options', value: 'options' },
            { text: 'Vegetables', value: 'vegetables' },
            { text: 'Accent', value: 'accent' }
          ]"
          v-model="selectedData"
        />
      </div>
      <div>
        <span class="label">Value:</span>
        <input
          type="text"
          v-model="textValue"
        >
      </div>
      <div>
        <span class="label">Selected text:</span>
        <input
          type="text"
          v-model="selectedText"
        >
      </div>
      <div>
        <span class="label">Placeholder:</span>
        <input
          type="text"
          v-model="placeholder"
        >
      </div>
      <div>
        <Checkbox
          label="Disabled"
          v-model="disabled"
        />
      </div>
      <div>
        <Checkbox
          label="Readonly"
          v-model="readonly"
        />
      </div>
      <div>
        <span class="label">Suggested index:</span>
        <input
          type="number"
          v-model="suggestedIndexText"
        >
      </div>
      <div>
        <Checkbox
          label="Allow freeform"
          v-model="allowFreeform"
        />
      </div>
      <div>
        <Checkbox
          label="Auto-complete"
          v-model="autoComplete"
        />
      </div>
      <div>
        <Checkbox
          label="Accent insensitive"
          v-model="accentInsensitive"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./combo-box.less" />
