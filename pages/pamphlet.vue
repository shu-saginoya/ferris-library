<template>
  <v-container>
    <base-page-title>学生向けパンフレット</base-page-title>
    <p>在学生対象のパンフレットです</p>

    <v-tabs v-model="tab" color="primary" grow>
      <v-tab>緑園本館</v-tab>
      <v-tab>山手分室</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <display-pdf
          location="/pdf/pamphlet/pamphlet_ryokuen.pdf"
          name="pamphlet_ryokuen.pdf"
        ></display-pdf>
      </v-tab-item>
      <v-tab-item>
        <display-pdf
          location="/pdf/pamphlet/pamphlet_yamate.pdf"
          name="pamphlet_yamate.pdf"
        ></display-pdf>
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
