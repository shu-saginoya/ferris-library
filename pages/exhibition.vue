<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col
        v-for="content in contents"
        :key="content.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card height="100%" @click="openDitails(content)">
          <v-img
            :src="content.eyecatch ? content.eyecatch.url : ''"
            height="160px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          >
            <v-card-text>
              <v-chip v-if="content.category" color="primary">
                {{ content.category.name }}
              </v-chip>
            </v-card-text>
          </v-img>
          <v-card-title>
            {{ content.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ $dayjs(content.publishedAt).format('YYYY年M月D日') }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <card-exhibition-details
      ref="cardExhibitionDetails"
      :items="items"
    ></card-exhibition-details>
  </v-container>
</template>

<script>
export default {
  name: 'PageExhibition',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'exhibition',
      queries: { orders: 'createdAt' },
    })
    return data
  },
  data: () => ({
    title: '企画展示',
    show: false,
    items: {},
  }),
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    openDitails(content) {
      this.items = content
      this.$refs.cardExhibitionDetails.dialogSwitching()
    },
  },
}
</script>
