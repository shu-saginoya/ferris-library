<template>
  <v-card>
    <v-system-bar color="primary" dark> News </v-system-bar>
    <v-card-title>
      {{ items.title }}
    </v-card-title>
    <v-card-subtitle v-text="$dayjs(items.date).format('YYYY年M月D日')">
    </v-card-subtitle>
    <v-card-text class="mt-6 news-contents" v-html="items.contents">
    </v-card-text>
    <v-card-text v-if="items.images">
      <v-img
        v-for="(image, index) in items.images"
        :key="'image' + index"
        :src="image.src"
        contain
        class="article-image"
      ></v-img>
    </v-card-text>
    <v-card-actions v-if="items.actions" class="overflow-x-auto">
      <btn-inside
        v-if="items.actions && items.actions.link && items.actions.to"
        :link="items.actions.link"
        :to="items.actions.to"
      ></btn-inside>
      <btn-inside
        v-if="items.actions2 && items.actions2.link && items.actions2.to"
        :link="items.actions2.link"
        :to="items.actions2.to"
      ></btn-inside>
    </v-card-actions>
    <v-card-actions v-if="items.openinnew" class="overflow-x-auto">
      <btn-open-in-new
        v-if="items.openinnew && items.openinnew.link && items.openinnew.url"
        :link="items.openinnew.link"
        :url="items.openinnew.url"
      ></btn-open-in-new>
      <btn-open-in-new
        v-if="items.openinnew2 && items.openinnew2.link && items.openinnew2.url"
        :link="items.openinnew2.link"
        :url="items.openinnew2.url"
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
    items: { type: Object, default: () => {} },
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
  background-color: #eee;
}
.news-contents >>> dt {
  font-weight: bold;
}
.news-contents >>> dd {
  padding-left: 1em;
}
.article-image {
  margin: 8px;
}
</style>
