<template>
  <v-slide-group multiple show-arrows>
    <v-slide-item v-for="(item, index) in pickOut" :key="'pickout-' + index">
      <v-card outlined :to="item.to" hover class="mx-1" width="240">
        <v-skeleton-loader type="card" :loading="loading">
          <v-img
            :src="item.image"
            height="160px"
            class="align-end"
            gradient="to bottom, rgba(255,255,255,.2), rgba(255,255,255,1)"
          >
            <v-card-title>{{ item.name }}</v-card-title>
          </v-img>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-skeleton-loader>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: 'HomePickout',
  data: () => ({
    loading: true,
    pickOut: [
      {
        name: '貸出サービス',
        to: '/service',
        text: '貸出できる期間・冊数などの基本的な利用方法について',
        image: require(`@/assets/image/pickout/home-pickout-service.png`),
      },
      {
        name: 'データベース・電子ブック',
        to: '/database',
        text: '図書館で契約しているデータベースや電子ブックを検索することができます',
        image: require(`@/assets/image/pickout/home-pickout-database.png`),
      },
      {
        name: '電子コレクション',
        to: '/digital-collection',
        text: '図書館所蔵の貴重な資料をWEBから閲覧できます',
        image: require(`@/assets/image/pickout/home-pickout-digital-collection.png`),
      },
      {
        name: 'レファレンスサービス',
        to: '/reference',
        text: 'ご希望の資料が当図書館にない場合も資料を探すお手伝いができます',
        image: require(`@/assets/image/pickout/home-pickout-reference.png`),
      },
    ],
  }),
  mounted() {
    this.loading = false
  },
}
</script>