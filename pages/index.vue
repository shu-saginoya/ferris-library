<template>
  <v-container>
    <v-row dense>
      <v-col clos="12" xl="8">
        <main-visual />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
          <base-page-title>News</base-page-title>
          <news-list :page-size="5"
            ><template #name>新着情報</template></news-list
          >
          <div class="text-center mt-6">
            <base-btn-inside link="ニュース一覧へ" to="news"></base-btn-inside>
          </div>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
          <base-page-title>OPAC 蔵書検索</base-page-title>
          <opac />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import news from '@/assets/json/news.json'
import BaseBtnInside from '~/components/BaseBtnInside.vue'

export default {
  components: { BaseBtnInside },
  data: () => ({
    title: 'フェリス女学院大学附属図書館',
    news,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: ''
    }
  },
}
</script>