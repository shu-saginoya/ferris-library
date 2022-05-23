<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
          <card-news :news-card="contents"></card-news>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CmsPreview',
  async asyncData({ params, $microcms, $preview }) {
    const data = await $microcms.get({
      endpoint: 'news',
      contentId: params.slug,
      queries: { draftKey: $preview?.draftKey },
    })
    return data
  },
  data: () => ({
    title: '記事のプレビュー',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
