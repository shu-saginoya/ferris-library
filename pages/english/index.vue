<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <home-main-visual :english-page="true"></home-main-visual>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="8">
        <div class="text-center text-md-left text-h5 mb-2">
          <v-skeleton-loader type="heading" :loading="loading">
            <v-icon left>mdi-library-shelves</v-icon>OPAC Detailed search
          </v-skeleton-loader>
        </div>
        <home-opac english-page="true"></home-opac>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'english',
  data: () => ({
    title: 'Ferris University Library',
    loading: true,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
  mounted() {
    this.loading = false
  },
}
</script>