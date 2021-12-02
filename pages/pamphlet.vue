<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <p>在学生対象のパンフレットです</p>
    <v-row>
      <v-col cols="12" lg="10" xl="6">
    <v-tabs v-model="tab" color="primary" grow>
      <v-tab>緑園本館</v-tab>
      <v-tab>山手分室</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <display-pdf
          location="/pdf/pamphlet/pamphlet_ryokuen.pdf"
        ></display-pdf>
      </v-tab-item>
      <v-tab-item>
        <display-pdf
          location="/pdf/pamphlet/pamphlet_yamate.pdf"
        ></display-pdf>
      </v-tab-item>
    </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '学生向けパンフレット',
    tab: null,
  }),
  head () {
    return {
      title: this.title,
    }
  }
}
</script>
