<script>
import CommanBar from '../command-bar'
import Checkbox from '../../checkbox'
import TextField from '../../text-field'

const menu = [
  {
    value: 'newItem',
    text: 'New',
    icon: 'Add',
    action: () => alert('New'),
    childs: [
      {
        type: 'title',
        text: 'Actions'
      },
      {
        value: 'upload',
        text: 'Upload',
        icon: 'Upload',
        iconColor: 'salmon'
      },
      {
        value: 'rename',
        text: 'Rename'
      },
      {
        value: 'share',
        text: 'Sharing',
        icon: 'Share',
        childs: [
          {
            value: 'sharetoemail',
            text: 'Share to Email',
            icon: 'Mail'
          },
          {
            value: 'sharetotwitter',
            text: 'Share to Twitter',
            icon: 'Share'
          }
        ]
      },
      {
        type: 'divider'
      },
      {
        type: 'title',
        text: 'Navigation'
      },
      {
        value: 'properties',
        text: 'Properties'
      },
      {
        value: 'print',
        text: 'Print',
        icon: 'Print'
      },
      {
        value: 'bing',
        text: 'Go to Bing'
      }
    ]
  },
  {
    value: 'upload',
    text: 'Upload',
    icon: 'Upload',
    action: () => alert('upload')
  },
  {
    value: 'share',
    text: 'Share',
    icon: 'Share',
    childs: [
      {
        value: 'sharetoemail',
        text: 'Share to Email',
        icon: 'Mail'
      },
      {
        value: 'sharetotwitter',
        text: 'Share to Twitter',
        icon: 'Share'
      }
    ]
  },
  {
    value: 'download',
    text: 'Download',
    icon: 'Download'
  }
]

const overflowItems = [
  {
    value: 'move',
    text: 'Move to...',
    icon: 'MoveToFolder'
  },
  {
    value: 'copy',
    text: 'Copy to...',
    icon: 'Copy'
  },
  {
    value: 'rename',
    text: 'Rename...',
    icon: 'Edit'
  }
]

const farItems = [
  { value: 'tiles', icon: 'Tiles' },
  { value: 'info', icon: 'Info' }
]

export default {
  components: { CommanBar, Checkbox, TextField },
  data () {
    return {
      menu,
      overflowItems,
      farItems,
      mousestopDelay: 800,
      autoupdateOverflow: false
    }
  },
  computed: {
    mousestopDelayText: {
      get () {
        return String(this.mousestopDelay)
      },
      set (value) {
        this.mousestopDelay = Number(value)
      }
    }
  }
}
</script>

<template>
  <Checkbox
    label="Autoupdate overflow"
    v-model="autoupdateOverflow"
  />
  <TextField
    label="Mouse stop delay"
    v-model="mousestopDelayText"
  />
  <CommanBar
    :items="menu"
    :overflow-items="overflowItems"
    :far-items="farItems"
    :mousestop-delay="mousestopDelay"
    :autoupdate-overflow="autoupdateOverflow"
  />
</template>

<style scoped lang="less" src="./command-bar.less" />
