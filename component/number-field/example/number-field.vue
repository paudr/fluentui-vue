<script>
import NumberField from '../number-field'
import ChoiceGroup from '../../choice-group'

export default {
  components: { NumberField, ChoiceGroup },
  data () {
    return {
      alignments: [
        { text: 'Left', value: 'left' },
        { text: 'Center', value: 'center' },
        { text: 'Right', value: 'right' }
      ],
      align: 'left',
      alignFocus: 'left',
      value: null
    }
  }
}
</script>

<template>
  <ChoiceGroup
    in-row
    label="Text align"
    :options="alignments"
    v-model="align"
  />
  <ChoiceGroup
    in-row
    label="Text align with focus"
    :options="alignments"
    v-model="alignFocus"
  />
  <NumberField
    use-grouping
    :align="align"
    :align-focus="alignFocus"
    label="Number field"
    v-model="value"
  />
</template>
