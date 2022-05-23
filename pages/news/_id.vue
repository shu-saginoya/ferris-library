<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
          <list-news :pagination="true" :contents="contents"></list-news>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewsDetails',
  async asyncData({ params, $microcms, $preview }) {
    const data = await $microcms.get({
      endpoint: 'news',
      contentId: params.slug,
      queries: { draftKey: $preview?.draftKey },
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
