<template>
  <v-card>
    <v-skeleton-loader
      type="list-item-two-line, divider, list-item-two-line, divider, list-item-two-line, divider, list-item-two-line, divider, list-item-two-line"
      :loading="loading"
    >
    <v-list>
      <template v-for="(info, index) in displayLists">
        <v-divider v-show="index !== 0" :key="'divider' + info.id"></v-divider>
        <v-list-item
          :key="'info' + info.id"
          two-line
          link
          @click.native=";(dialog = true), (newsCard = info)"
        >
          <v-list-item-content>
            <v-list-item-title class="wrap-text">{{
              info.title
            }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ info.date }}
            </v-list-item-subtitle>
            
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="grey lighten-1"
              >mdi-arrow-right-circle-outline</v-icon
            >
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    </v-skeleton-loader>
    <v-card-text v-if="pagination">
      <v-pagination
        v-model="page"
        :length="length"
        @input="pageChange"
      ></v-pagination>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-system-bar color="primary" dark> News </v-system-bar>
        <v-card-title>
          {{ newsCard.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ newsCard.date }}
        </v-card-subtitle>
        <v-card-text class="mt-6" v-html="newsCard.contents"> </v-card-text>
        <v-card-actions v-if="newsCard.actions" class="overflow-x-auto">
          <btn-inside
            v-for="btn in newsCard.actions"
            :key="btn.id"
            :link="btn.link"
            :to="btn.to"
          ></btn-inside>
        </v-card-actions>
        <v-card-actions v-if="newsCard.openinnew" class="overflow-x-auto">
          <btn-open-in-new
            v-for="btn in newsCard.openinnew"
            :key="btn.id"
            :link="btn.link"
            :url="btn.url"
          ></btn-open-in-new>
        </v-card-actions>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import lists from '@/assets/json/news.json'

export default {
  name: 'ListNews',
  props: {
    pagination: { type: Boolean, default: false },
    pageSize: { type: Number, default: 10 },
  },
  data: () => ({
    loading: true,
    page: 1,
    length: 0,
    lists,
    displayLists: [],
    dialog: false,
    newsCard: [],
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