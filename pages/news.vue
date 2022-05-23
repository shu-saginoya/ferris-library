<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <list-news :pagination="true" :contents="contents"></list-news>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageNews',
  async asyncData({ params, $microcms, $preview }) {
    const data = await $microcms.get({
      endpoint: 'news',
      contentId: params.slug,
      queries: { limit: 100, orders: '-date', draftKey: $preview?.draftKey },
    })
    return data
  },
  data: () => ({
    title: 'News',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
