<script>
import Control from '../block-menu'
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
        icon: 'Print',
        disabled: true
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

export default {
  components: { Control, TextField },
  data () {
    return {
      menu,
      mousestopDelay: 800
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
  <TextField
    label="Mouse stop delay"
    v-model="mousestopDelayText"
  />
  <Control
    :items="menu"
    :mousestop-delay="mousestopDelay"
  />
</template>
