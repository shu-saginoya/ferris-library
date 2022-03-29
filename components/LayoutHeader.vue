<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer :english-page="englishPage"></layout-navigation-drawer>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2">
        <img
          :src="siteTitle.img"
          class="ferris-logo"
          :width="siteTitle.width"
          :height="siteTitle.height"
          :alt="siteTitle.name"
        />
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
      ? { 
          name: 'Ferris University Library',
          img: require('@/assets/images/layouts/site-logo-english.png'),
          width: '120',
          height: '34'
        }
      : {
          name: 'フェリス女学院大学附属図書館',
          img: require('@/assets/images/layouts/site-logo.png'),
          width: '200',
          height: '65'
        }
  },
}
</script>

<style scoped>
.ferris-logo {
  vertical-align: middle;
  max-width: 100%;
}
.site-title {
  font-feature-settings: "palt";
  font-weight: bold;
}
</style>