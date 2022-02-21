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
      <btn-inside link="ホームへもどる" to="/" class="mb-2"></btn-inside>
      <btn-inside link="Return to home page" to="/english" class="mb-2"></btn-inside>
    </v-container>
</template>

<script>
export default {
  name: 'LayoutError',
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
