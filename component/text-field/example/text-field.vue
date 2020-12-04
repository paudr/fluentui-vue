<script>
import Control from '../text-field'

export default {
  components: { Control }
}
</script>

<template>
  <Control label="I'm a field" />

  <Control
    readonly
    label="Readonly"
    model-value="I am read-only"
  />

  <Control
    label="With an icon"
    icon="Accounts"
  />

  <Control
    label="With placeholder"
    placeholder="Please enter text here"
  />

  <Control
    label="With prefix"
    prefix="Address:"
  />

  <Control
    label="With sufix"
    sufix="cm"
  />

  <Control
    label="With prefix and sufix"
    prefix="http"
    sufix=".com"
  />

  <Control
    multiline
    label="Multiline"
  />

  <Control
    multiline
    label="Multiline with icon"
    icon="Edit"
  />

  <Control
    multiline
    unresizable
    label="Multiline non-resizable"
  />

  <Control
    multiline
    auto-adjust-height
    label="Multiline with auto adjusting height"
  />
</template>
