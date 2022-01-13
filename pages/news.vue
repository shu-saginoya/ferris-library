<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <list-news :pagination="true"></list-news>
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