<template>
  <v-sheet color="grey lighten-3" class="pa-6">
    <vue-pdf
      :src="location"
      :page="currentPageNum"
      @num-pages="totalPageNum = $event"
    ></vue-pdf>
    <v-pagination
      v-if="totalPageNum > 1"
      v-model="currentPageNum"
      :length="totalPageNum"
      total-visible="6"
      class="mb-2"
    ></v-pagination>
    <v-row align="center" justify="space-around">
      <v-btn :href="location" :download="name">
        ダウンロード
        <v-icon right>mdi-download</v-icon>
      </v-btn>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'DisplayPdf',
  props: {
    location: {type: String, default: "デフォルト設定です"},
    name: {type: String, default: "デフォルト設定です"},
  },
  data: () => ({
    currentPageNum: 1,
    totalPageNum: 0,
  }),
}
</script>