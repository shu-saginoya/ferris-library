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
      <v-card>
        <v-list two-line>
          <v-list-item v-for="info in news" :key="info.id">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ info.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ info.date }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
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