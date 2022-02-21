<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" lg="10" xl="6">
        <display-pdf :location="location" :name="name"></display-pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageNewspaper',
  data: () => ({
    title: '新聞（緑園キャンパス）',
    location: 'pdf/newspaper.pdf',
    name: 'newspaper.pdf',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>