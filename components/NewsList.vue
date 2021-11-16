<template>
  <v-card>
    <v-skeleton-loader
      type="list-item, divider, list-item-two-line, divider, list-item-two-line, divider, list-item-two-line, divider, list-item-two-line, divider, list-item-two-line"
      :loading="loading"
    >
      <v-subheader><slot name="name">News</slot></v-subheader>
    </v-skeleton-loader>

    <v-list>
      <template v-for="info in displayLists">
        <v-divider :key="info.id"></v-divider>
        <v-list-item :key="info.id" two-line>
          <v-list-item-content>
            <v-list-item-title class="wrap-text">{{
              info.title
            }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ info.date }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-dialog v-model="dialog" max-width="600">
              <template #activator="{ on, attrs }">
                <v-btn
                  class="dialog-btn ma-2"
                  color="primary lighten-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon color="grey lighten-1"
                    >mdi-arrow-right-circle-outline</v-icon
                  >
                </v-btn>
              </template>
              <template #default="dialog">
                <v-card>
                  <v-system-bar color="primary" dark> News </v-system-bar>
                  <v-card-title>
                    {{ info.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ info.date }}
                  </v-card-subtitle>
                  <v-card-text class="mt-6" v-html="info.contents">
                  </v-card-text>
                  <v-card-actions v-if="info.actions">
                    <base-btn-inside
                      v-for="btn in info.actions"
                      :key="btn.id"
                      :link="btn.link"
                      :to="btn.to"
                    ></base-btn-inside>
                  </v-card-actions>
                  <v-card-actions v-if="info.openinnew">
                    <base-btn-open-in-new
                      v-for="btn in info.openinnew"
                      :key="btn.id"
                      :link="btn.link"
                      :url="btn.url"
                    ></base-btn-open-in-new>
                  </v-card-actions>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    <v-card-text v-if="pagination">
      <v-pagination
        v-model="page"
        :length="length"
        @input="pageChange"
      ></v-pagination>
    </v-card-text>
  </v-card>
</template>

<script>
import lists from '@/assets/json/news.json'

export default {
  name: 'NewsList',
  props: {
    pagination: { type: Boolean, default: false },
    pageSize: { type: [Number], default: 10 },
  },
  data: () => ({
    loading: true,
    page: 1,
    length: 0,
    lists,
    displayLists: [],
  }),
  mounted() {
    this.loading = false

    this.length = Math.ceil(this.lists.length / this.pageSize)

    this.displayLists = this.lists.slice(
      this.pageSize * (this.page - 1),
      this.pageSize * this.page
    )
  },
  methods: {
    pageChange(pageNumber) {
      this.displayLists = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    },
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>