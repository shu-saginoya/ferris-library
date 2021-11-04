<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <display-pdf :location="location" :name="name"></display-pdf>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '新聞（緑園キャンパス）',
    location: 'pdf/newspaper.pdf',
    name: 'newspaper.pdf',
  }),
  head () {
    return {
      title: this.title,
    }
  }
}
</script>