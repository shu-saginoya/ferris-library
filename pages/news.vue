<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>

    <news-list pagination="true"><template #name>ニュース一覧</template></news-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'News',
  }),
  head () {
    return {
      title: this.title,
    }
  }
}
</script>