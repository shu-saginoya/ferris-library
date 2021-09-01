<template>
  <v-main>
    <v-container v-if="error.statusCode === 404" tag="section">
      <h2 class="v-heading text-h4 pt-8 mb-4">
        {{ pageNotFound }}
      </h2>
      <p>お探しのページは、移動または削除された可能性があります。</p>
      <p>
        現在このサイトはテストバージョンのためまだ制作されていない可能性もあります。
      </p>
      <v-btn depressed color="primary" to="/"> ホームへもどる </v-btn>
    </v-container>

    <v-container v-else tag="section">
      <h2 class="v-heading text-h4 pt-8 mb-4">
        {{ otherError }}
      </h2>
      <v-btn depressed color="primary" to="/"> ホームへもどる </v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
</style>
