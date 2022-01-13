<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <home-main-visual></home-main-visual>
      </v-col>
      <v-col cols="12" xl="8">
        <home-calender></home-calender>
      </v-col>
      <v-col cols="12" xl="8">
        <info-covid-19></info-covid-19>
      </v-col>
      <v-col cols="12" xl="8">
        <home-pickout></home-pickout>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" xl="4">
        <div class="sub-title text-h5 mb-2"><v-icon left>mdi-newspaper-variant-outline</v-icon>新着情報</div>
        <list-news :page-size="5"></list-news>
        <div class="text-center mt-5">
          <btn-inside link="ニュース一覧へ" to="news"></btn-inside>
        </div>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <div class="sub-title text-h5 mb-2"><v-icon left>mdi-library-shelves</v-icon>OPAC蔵書検索</div>
        <home-opac></home-opac>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'フェリス女学院大学附属図書館',
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
}
</script>

<style scoped>

</style>