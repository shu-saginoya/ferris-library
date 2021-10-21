<template>
  <v-container>
    <base-page-title>フロアマップ</base-page-title>
    <p>緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です</p>

    <v-tabs v-model="tab" color="primary" grow>
      <v-tab>緑園本館</v-tab>
      <v-tab>山手分室</v-tab>
      <v-tab>今どこマップ（緑園本館）</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <display-pdf
          location="/pdf/floor-map/floor-map-ryokuen.pdf"
        ></display-pdf>
      </v-tab-item>
      <v-tab-item>
        <display-pdf
          location="/pdf/floor-map/floor-map-yamate.pdf"
        ></display-pdf>
      </v-tab-item>
      <v-tab-item>
        <v-sheet color="grey lighten-3" class="pa-6">
        <p align="center">パワーポイントのファイルをダウンロードしますか？</p>
        <v-row align="center" justify="space-around" class="mt-4">
          <v-btn
            href="/document/floor-map_3d.ppsx"
            download="floor-map_3d.ppsx"
          >
            ダウンロード
            <v-icon right>mdi-download</v-icon>
          </v-btn>
        </v-row>
        </v-sheet>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
