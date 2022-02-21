<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer :english-page="englishPage"></layout-navigation-drawer>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2">
        <img
          src="@/assets/image/ferris-logo.png"
          height="32"
          class="ferris-logo mr-2"
        />
         <span class="site-title grey--text text--darken-1">{{ siteTitle }}</span>
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
  vertical-align: middle;
}
.site-title {
  font-feature-settings: "palt";
}
</style>