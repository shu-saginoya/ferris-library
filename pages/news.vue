<template>
  <v-container>
    <base-page-title>News</base-page-title>

    <news-list number="10000"><template #name>ニュース一覧</template></news-list>

    <div class="text-center mt-6">
      <v-pagination v-model="page" :length="1"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    page: 1,
  }),
}
</script>