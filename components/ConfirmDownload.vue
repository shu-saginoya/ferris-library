<template>
  <v-snackbar v-model="confirmDownload" :multi-line="multiLine" :timeout="timeout">
    {{ fileType }}ファイルを開きますか？<br />
    {{ fileSize }}
    <template #action="{ attrs }">
      <v-btn class="mx-3" :href="url" target="_blank">
        はい
        <v-icon right>mdi-download</v-icon>
      </v-btn>
      <v-btn icon v-bind="attrs" @child-emit="confirmDownload = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'ConfirmDownload',
  props: {
    url: { type: String, required: true, default: 'ファイルの場所' },
  },
  data: () => ({
    confirmDownload: false,
    multiLine: true,
    timeout: 6000,
    fileType: undefined,
    fileSize: undefined
  }),
  methods: {
    snackbarOpen() {
      this.confirmDownload = true
      this.fileType = this.url.type
      this.fileSize = this.url.size
    },
  },
}
</script>