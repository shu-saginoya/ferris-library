<template>
  <v-sheet color="grey lighten-3" class="pa-6">
    <v-pagination
      v-model="currentPageNum"
      :length="totalPageNum"
      total-visible="6"
      class="mb-2"
    ></v-pagination>
    <vue-pdf
      src="/pdf/newspaper.pdf"
      :page="currentPageNum"
      @num-pages="totalPageNum = $event"
    ></vue-pdf>
  </v-sheet>
</template>

<script>
export default {
  name: 'DisplayPdf',
  data: () => ({
    currentPageNum: 1,
    totalPageNum: 0,
  }),
}
</script>