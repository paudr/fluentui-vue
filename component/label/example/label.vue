<script>
import Control from '../label'

export default {
  components: { Control }
}
</script>
<template>
  <Control>I'm a Label</Control>

  <Control disabled>
    I'm a disabled Label
  </Control>

  <Control required>
    I'm a required Label
  </Control>

  <Control
    required
    disabled
    v-text="'I\'m a required and disabled Label'"
  />
</template>
