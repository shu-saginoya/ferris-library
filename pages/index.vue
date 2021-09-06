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
    <!--<section>
      <base-page-title>News</base-page-title>
    </section>-->
    <section>
      <base-page-title>OPAC 蔵書検索</base-page-title>
      <v-tabs>
        <v-tab> 検索フォーム </v-tab>
        <v-tab> スマートフォン </v-tab>
      </v-tabs>
    </section>
    <!--<section>
      <base-page-title>Topics</base-page-title>
    </section>-->
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
}
</script>