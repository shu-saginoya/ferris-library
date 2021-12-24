<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>English page is in preparation.</p>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'English',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>