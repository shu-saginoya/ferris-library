<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="timeout">
    PDFファイルを開きますか？<br />
    {{ fileName }}
    <template #action="{ attrs }">
      <v-btn class="mx-3" :href="url" target="_blank"
        >はい<v-icon right>mdi-download</v-icon></v-btn
      >
      <v-btn icon v-bind="attrs" @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackbarPdf',
  props: {
    fileName: { type: String, required: true, default: 'ファイル名' },
    url: { type: String, required: true, default: 'ファイルの場所' },
  },
  data: () => ({
    timeout: 6000,
  }),
  methods: {
    snackbarOpen() {
      this.snackbar = true
    },
  },
}
</script>