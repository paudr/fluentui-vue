<script>
import TextField from '../text-field'

export default {
  components: { TextField }
}
</script>

<template>
  <TextField label="I'm a field" />

  <TextField
    readonly
    label="Readonly"
    model-value="I am read-only"
  />

  <TextField
    label="With an icon"
    icon="Accounts"
  />

  <TextField
    label="With placeholder"
    placeholder="Please enter text here"
  />

  <TextField
    label="With prefix"
    prefix="Address:"
  />

  <TextField
    label="With sufix"
    sufix="cm"
  />

  <TextField
    label="With prefix and sufix"
    prefix="http"
    sufix=".com"
  />

  <TextField
    multiline
    label="Multiline"
  />

  <TextField
    multiline
    label="Multiline with icon"
    icon="Edit"
  />

  <TextField
    multiline
    unresizable
    label="Multiline non-resizable"
  />

  <TextField
    multiline
    auto-adjust-height
    label="Multiline with auto adjusting height"
  />
</template>
