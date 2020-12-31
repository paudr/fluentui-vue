<script>
import Control from '../details-list'
import ChoiceGroup from '../../../component/choice-group'
import Checkbox from '../../../component/checkbox'
import Dropdown from '../../../component/dropdown'

const data = {
  colors: {
    columns: [
      { title: 'Button', key: 'button', align: 'left', width: '125px' },
      { title: 'Name', key: 'name', align: 'left', width: '125px' },
      { title: 'Color', key: 'color', align: 'left' }
    ],
    groups: [
      { name: 'Color: "red"', startIndex: 0, count: 2, level: 0 },
      { name: 'Color: "green"', startIndex: 2, count: 0, level: 0 },
      { name: 'Color: "blue"', startIndex: 2, count: 3, level: 0 }
    ],
    data: [
      { name: 'a', color: 'red' },
      { name: 'b', color: 'red' },
      { name: 'c', color: 'blue' },
      { name: 'd', color: 'blue' },
      { name: 'e', color: 'blue' }
    ]
  },
  numbers: {
    columns: [{ title: 'Name' }, { title: 'Value' }],
    groups: Array(100)
      .fill(0)
      .map((_, i) => i * 10)
      .flatMap(i =>
        i % 100 === 0
          ? [
              {
                name: `Hundreds ${i.toString().padStart(3, '0')}`,
                startIndex: i,
                count: 0,
                level: 0
              },
              {
                name: `Tens: ${i.toString().padStart(3, '0')}`,
                startIndex: i,
                count: 10,
                level: 1
              }
            ]
          : [
              {
                name: `Tens: ${i.toString().padStart(3, '0')}`,
                startIndex: i,
                count: 10,
                level: 1
              }
            ]
      ),
    data: Array(1000)
      .fill(0)
      .map((_, i) => [`Item ${i}`, i.toString()])
  },
  noGroups: {
    columns: [{ title: 'Name' }, { title: 'Value' }],
    data: Array(1000)
      .fill(0)
      .map((_, i) => [`Item ${i}`, i.toString()])
  }
}
export default {
  components: { Control, ChoiceGroup, Checkbox, Dropdown },
  data () {
    return {
      selectedData: 'colors',
      selection: '',
      collapsible: true
    }
  },
  computed: {
    currentData () {
      return data[this.selectedData]
    }
  },
  methods: {
    alert (row) {
      alert(row)
    }
  }
}
</script>
<template>
  <div class="controls">
    <ChoiceGroup
      in-row
      label="Data"
      :options="[
        { text: 'Colors', value: 'colors' },
        { text: 'Numbers', value: 'numbers' },
        { text: 'No groups', value: 'noGroups' }
      ]"
      v-model="selectedData"
    />
    <Dropdown
      class="selection"
      label="Selection"
      :options="[
        { text: 'No', value: '' },
        { text: 'Multiple', value: 'multiple' },
        { text: 'Simple', value: 'simple' }
      ]"
      v-model="selection"
    />
    <Checkbox
      label="Collapsible"
      v-model="collapsible"
    />
  </div>
  <div>
    <Control
      :columns="currentData.columns"
      :groups="currentData.groups"
      :data="currentData.data"
      :selection="selection"
      :collapsible="collapsible"
      v-slot="slotProps"
    >
      <button
        v-if="slotProps.column === 'button'"
        @click="() => alert(slotProps.row)"
      >
        <span>Click me!</span>
      </button>
    </Control>
  </div>
</template>

<style lang="less" scoped src="./details-list.less" />
