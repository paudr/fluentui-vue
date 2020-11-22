<script>
import ChoiceGroup from '../choice-group'

export default {
  components: { ChoiceGroup },
  data () {
    return {
      options: [
        { text: 'Option a', value: 'a' },
        { text: 'Option b', value: 'b' },
        { text: 'Option c', value: 'c', disabled: true },
        { text: 'Option d', value: 'd' }
      ],
      value1: 'b',
      value2: 'b',
      value3: 'b',
      value4: ''
    }
  }
}
</script>

<template>
  <ChoiceGroup
    class="choiceGroup"
    label="Choice Group"
    :options="options"
    v-model="value1"
  />

  <ChoiceGroup
    class="choiceGroup"
    disabled
    label="Disabled choice Group"
    :options="options"
    v-model="value2"
  />

  <ChoiceGroup
    class="choiceGroup"
    readonly
    label="Readonly choice Group"
    :options="options"
    v-model="value3"
  />

  <ChoiceGroup
    class="choiceGroup"
    in-row
    label="Choice Group in row"
    :options="options"
    v-model="value4"
  />
</template>

<style scoped lang="less" src="./choice-group.less" />
