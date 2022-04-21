<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" lg="8" xl="6">
        <p>text</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageExhibition',
  data: () => ({
    title: '企画展示',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
