<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <news-list :pagination="true"
          ><template #name>ニュース一覧</template></news-list
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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