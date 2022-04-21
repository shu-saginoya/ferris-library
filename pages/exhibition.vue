<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" lg="8" xl="6">
        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
              {{ content.title }}
            </nuxt-link>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageExhibition',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'exhibition',
    })
    return data
  },
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
