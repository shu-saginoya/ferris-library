<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer :english-page="englishPage"></layout-navigation-drawer>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2">
        <img
          src="@/assets/images/layouts/site-logo2.jpg"
          width="264"
          height="22"
          class="ferris-logo"
        />
         <!-- <span class="site-title grey--text text--darken-4">{{ siteTitle }}</span> -->
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    englishPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: null,
    siteTitle: '',
  }),
  mounted() {
    this.siteTitle = this.englishPage
      ? 'Ferris University Library'
      : 'フェリス女学院大学附属図書館'
  },
}
</script>

<style scoped>
.ferris-logo {
  vertical-align: baseline;
  max-width: 100%;
}
.site-title {
  font-feature-settings: "palt";
  font-family: "Noto Serif Japanese", serif;
  font-weight: bold;
}
</style>