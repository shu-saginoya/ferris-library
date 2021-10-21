<template>
  <v-sheet color="grey lighten-3" class="pa-6">
    <v-pagination
      v-if="totalPageNum > 1"
      v-model="currentPageNum"
      :length="totalPageNum"
      total-visible="5"
      class="mb-2"
    ></v-pagination>
    <v-skeleton-loader type="image" :loading="loading">
      <vue-pdf
        :src="location"
        :page="currentPageNum"
        @num-pages="totalPageNum = $event"
      ></vue-pdf>
    </v-skeleton-loader>
    <v-row align="center" justify="space-around" class="mt-4">
      <v-btn :href="location" target="_blank">
        PDFファイルを開く
        <v-icon right>mdi-download</v-icon>
      </v-btn>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'DisplayPdf',
  props: {
    location: { type: String, default: 'デフォルト設定です' },
  },
  data: () => ({
    currentPageNum: 1,
    totalPageNum: 0,
    loading: true,
  }),
  mounted() {
    this.loading = false
  },
}
</script>