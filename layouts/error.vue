<template>
    <v-container>
      <template v-if="error.statusCode === 404">
      <text-page-title>
        {{ pageNotFound }}
      </text-page-title>
      <p>お探しのページは、移動または削除された可能性があります。</p>
      </template>
      <template v-else>
      <text-page-title>
        {{ otherError }}
      </text-page-title>
      </template>
      <v-btn depressed color="primary" to="/"> ホームへもどる </v-btn>
    </v-container>
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
