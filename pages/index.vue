<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <home-main-visual></home-main-visual>
      </v-col>
      <v-col cols="12" xl="8">
        <info-covid-19></info-covid-19>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
        <text-page-title>News</text-page-title>
        <list-news :page-size="5">
          <template #name>新着情報</template>
        </list-news>
        <div class="text-center mt-6">
          <btn-inside link="ニュース一覧へ" to="news"></btn-inside>
        </div>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <text-page-title>OPAC 蔵書検索</text-page-title>
        <home-opac></home-opac>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data: () => ({
    title: 'フェリス女学院大学附属図書館',
    news,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
}
</script>