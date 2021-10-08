<template>
  <v-container>
    <base-page-title>News</base-page-title>

    <news-list><template #name>ニュース一覧</template></news-list>

    <div class="text-center mt-6">
      <v-pagination v-model="page" :length="1"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import NewsList from '~/components/NewsList.vue'
export default {
  components: { NewsList },
  data: () => ({
    page: 1,
  }),
}
</script>