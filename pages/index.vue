<template>
  <v-container>
    <main-visual />
    <!--<section>
      <base-page-title>Calender※調整中です</base-page-title>
      <v-row justify="space-around">
        <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
        <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
      </v-row>
    </section>-->
    <section>
      <base-page-title>News</base-page-title>
      <news-list pageSize="5"><template #name>新着情報</template></news-list>
      <div  class="text-center mt-6">
        <v-btn to="news" color="primary" outlined>ニュース一覧へ</v-btn>
      </div>
    </section>
    <section>
      <base-page-title>OPAC 蔵書検索</base-page-title>
      <opac />
    </section>
    <!--<section>
      <base-page-title>Topics</base-page-title>
    </section>-->
  </v-container>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data: () => ({
    news,
  }),
}
</script>