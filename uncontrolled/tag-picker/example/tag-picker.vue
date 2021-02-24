<script>
import Control from '../tag-picker'
import Checkbox from '../../../component/checkbox'
import ChoiceGroup from '../../../component/choice-group'

const options = [
  { text: 'Option a', value: 'a' },
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' },
  { text: 'Option d', value: 'd' },
  { text: 'Option e', value: 'e' }
]

const vegetables = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Mango', value: 'mango' },
  { text: 'Orange', value: 'orange' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Grape', value: 'grape' },
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

const optionsValue = [
  { text: 'Option b', value: 'b' },
  { text: 'Option c', value: 'c' }
]

const vegetablesValue = [
  { text: 'Banana', value: 'banana' },
  { text: 'Orange', value: 'orange' },
  { text: 'Grape', value: 'grape' }
]

const accentValue = [
  { text: 'menjàrem', value: 'menjarem' },
  { text: 'pastís', value: 'pastis' },
  { text: 'perquè', value: 'perque' },
  { text: 'allò', value: 'allo' },
  { text: 'també', value: 'tambe' }
]

export default {
  components: { Control, Checkbox, ChoiceGroup },
  data () {
    return {
      open: false,
      loading: false,
      loadingText: '',
      options,
      vegetables,
      accent,
      none: undefined,
      optionsValue,
      vegetablesValue,
      accentValue,
      noneValue: undefined,
      selectedData: 'none',
      selectedValue: 'none'
    }
  },
  computed: {
    selectedOptions () {
      return this[this.selectedData]
    },
    selectedValueItems () {
      return this[this.selectedValue + 'Value']
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
      <Control
        label="TagPicker"
        :items="selectedOptions"
        :selected-text="selectedText"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :suggested-index="suggestedIndex"
        :allow-freeform="allowFreeform"
        :auto-complete="autoComplete"
        :accent-insensitive="accentInsensitive"
        :open="open"
        :loading="loading"
        :loading-text="loadingText"
        :model-value="selectedValueItems"
      >
        <template #default="slotProps">
          <template v-if="slotProps.item.value === 'e'">
            <div>
              <button
                :style="{ background: slotProps.selected ? 'blue' : '' }"
                :disabled="disabled || selectedOptions[slotProps.index].disabled"
                @click="slotProps.click"
              >
                <span>Option e</span>
              </button>
            </div>
          </template>
        </template>
        <template #selected="slotProps">
          <template v-if="slotProps.item.value === 'c'">
            <div>
              <button
                :style="{ background: slotProps.selected ? 'blue' : '' }"
                :disabled="disabled || selectedOptions[slotProps.index].disabled"
                @click="slotProps.click"
              >
                <span>Option c</span>
              </button>
            </div>
          </template>
        </template>
      </Control>
    </div>
    <div class="props">
      <div>
        <Checkbox
          label="Open"
          v-model="open"
        />
      </div>
      <div>
        <Checkbox
          label="Loading"
          v-model="loading"
        />
      </div>
      <div>
        <span class="label">Loading text:</span>
        <input
          type="text"
          v-model="loadingText"
        >
      </div>
      <div>
        <ChoiceGroup
          in-row
          label="Items"
          :options="[
            { text: 'None', value: 'none' },
            { text: 'Options', value: 'options' },
            { text: 'Vegetables', value: 'vegetables' },
            { text: 'Accent', value: 'accent' }
          ]"
          v-model="selectedData"
        />
      </div>
      <div>
        <ChoiceGroup
          in-row
          label="Selected Items"
          :options="[
            { text: 'None', value: 'none' },
            { text: 'Options', value: 'options' },
            { text: 'Vegetables', value: 'vegetables' },
            { text: 'Accent', value: 'accent' }
          ]"
          v-model="selectedValue"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less" src="./tag-picker.less" />
