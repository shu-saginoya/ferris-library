<template>
  <v-card>
    <v-system-bar color="primary" dark> News </v-system-bar>
    <v-card-title>
      {{ newsCard.title }}
    </v-card-title>
    <v-card-subtitle v-text="$dayjs(newsCard.date).format('YYYY年M月D日')">
    </v-card-subtitle>
    <v-card-text class="mt-6 news-contents" v-html="newsCard.contents">
    </v-card-text>
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
      <v-btn text @click="$emit('dialogClose')">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardNews',
  props: {
    newsCard: { type: Object, default: () => {} },
  },
  data: () => ({}),
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.news-contents >>> img {
  max-width: 100%;
  height: auto;
}
.news-contents >>> table {
  display: block;
  border-spacing: 0;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.news-contents >>> th,
.news-contents >>> td {
  border: solid 1px #ddd;
  padding: 10px 5px;
}
.news-contents >>> th {
  background-color: #EEE;
}
.news-contents >>> dt {
  font-weight: bold;
}
.news-contents >>> dd {
  padding-left: 1em;
}
</style>
