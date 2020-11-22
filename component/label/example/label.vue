<script>
import Label from '../label'

export default {
  components: { Label }
}
</script>
<template>
  <Label>I'm a Label</Label>

  <Label disabled>I'm a disabled Label</Label>

  <Label required>I'm a required Label</Label>

  <Label
    required
    disabled
    v-text="'I\'m a required and disabled Label'"
  />
</template>
