<template>
  <v-card>
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
            <v-list-item-title class="wrap-text">
              <span v-show="$dayjs(info.date) > $dayjs()" class="red--text text--lighten-2">予約投稿：</span>
              {{ info.title }}
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="$dayjs(info.date).format('YYYY年M月D日')"
            >
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
    <v-card-text v-if="pagination">
      <v-pagination
        v-model="page"
        :length="length"
        @input="pageChange"
      ></v-pagination>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="600">
      <card-news :news-card="newsCard" @dialogClose="dialogClose"></card-news>
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
    page: 1,
    length: 0,
    lists,
    displayLists: [],
    dialog: false,
    newsCard: [],
    mode: undefined,
  }),
  mounted() {
    // 非公開モードのチェック
    this.privateMode = this.$route.query.mode

    this.length = Math.ceil(this.lists.length / this.pageSize)

    if (this.privateMode !== 'private') {
      this.displayLists = this.lists.filter((element) => {
        return new Date() >= new Date(element.date)
      })
    }
    else {
      this.displayLists = this.lists
    }
    this.displayLists = this.displayLists.slice(
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
    dialogClose() {
      this.dialog = false
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