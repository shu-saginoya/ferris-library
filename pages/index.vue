<template>
  <v-container>
    <home-main-visual />
    <v-row>
      <v-col cols="12" lg="6" xl="4"> </v-col>
      <v-col cols="12" lg="6" xl="4">
        <v-expansion-panels accordion>
          <v-expansion-panel hover>
            <v-expansion-panel-header class="text-h6">
              新型コロナウイルス関連のお知らせ
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ covid19 }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <text-page-title>News</text-page-title>
        <list-news :page-size="5"
          ><template #name>新着情報</template></list-news
        >
        <div class="text-center mt-6">
          <btn-inside link="ニュース一覧へ" to="news"></btn-inside>
        </div>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <text-page-title>OPAC 蔵書検索</text-page-title>
        <home-opac />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import news from '@/assets/json/news.json'
import covid19 from '@/assets/json/covid19.json'

export default {
  data: () => ({
    title: 'フェリス女学院大学附属図書館',
    news,
    covid19,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
}
</script>